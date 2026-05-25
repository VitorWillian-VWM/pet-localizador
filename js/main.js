/*================
CARDS DOS ANIMAIS - FIREBASE
=================*/
let allFirebaseAnimals = [];

async function buildCards(filter = 'all') {
  currentFilter = filter;

  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  grid.innerHTML = '<p>Carregando anúncios...</p>';

  try {
    const snapshot = await db.collection('sitepet_animais')
      .orderBy('criadoEm', 'desc')
      .get();

    allFirebaseAnimals = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    renderFilteredCards();

  } catch (error) {
    console.error(error);
    grid.innerHTML = '<p>Erro ao carregar os anúncios.</p>';
  }
}

/*================
MODAL CADASTRO ANIMAL
=================*/
function openAnimalModal(event) {
    event.preventDefault();

    document.getElementById('animalModal').classList.add('open');

    const loginBtn = document.querySelector('.login-toggle-btn');
    const statusText = document.getElementById('userStatusText');

    if (!loggedUser) {
        if (loginBtn) loginBtn.style.display = 'block';
        if (statusText) statusText.textContent = 'Você ainda não está logado.';
        openLoginModal();
    } else {
        fillUserData();
    }
}

function closeAnimalModal() {
    document.getElementById('animalModal').classList.remove('open');
}

function toggleLoginArea() {
    document.getElementById('loginArea').classList.toggle('active');
}

function sendPhotoWhatsApp() {
    const nomePessoa = document.getElementById('nomePessoa').value || 'Não informado';
    const telefonePessoa = document.getElementById('telefonePessoa').value || 'Não informado';
    const tipoCadastro = document.getElementById('tipoCadastro').value || 'Não informado';
    const nomeAnimal = document.getElementById('nomeAnimal').value || 'Sem nome';
    const racaAnimal = document.getElementById('racaAnimal').value || 'Não informada';
    const corAnimal = document.getElementById('corAnimal').value || 'Não informada';
    const bairroAnimal = document.getElementById('bairroAnimal').value || 'Não informado';
    const cidadeAnimal = document.getElementById('cidadeAnimal').value || 'Não informada';
    const descricaoAnimal = document.getElementById('descricaoAnimal').value || 'Sem descrição';

    const mensagem = `
        Olá! Quero enviar a foto de um animal para o site Encontre Meu Amigo.

        DADOS DA PESSOA
        Nome: ${nomePessoa}
        WhatsApp: ${telefonePessoa}

        DADOS DO ANIMAL
        Situação: ${tipoCadastro}
        Nome: ${nomeAnimal}
        Raça: ${racaAnimal}
        Cor: ${corAnimal}
        Bairro: ${bairroAnimal}
        Cidade: ${cidadeAnimal}

        Descrição:
        ${descricaoAnimal}

        Vou enviar a foto logo em seguida.
    `;

        const msg = encodeURIComponent(mensagem);

        window.open(`https://wa.me/5567935015153?text=${msg}`, '_blank');
    }

/*================
FILTROS DE BUSCA
=================*/
function applySearchFilters() {
  renderFilteredCards();
}

function renderFilteredCards() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  const searchText = document.getElementById('searchText')?.value.toLowerCase().trim() || '';
  const filterTipo = document.getElementById('filterTipo')?.value || 'all';
  const filterCategoria = document.getElementById('filterCategoria')?.value || 'all';
  const filterBairro = document.getElementById('filterBairro')?.value.toLowerCase().trim() || '';

  let animals = [...allFirebaseAnimals];

  if (currentFilter === 'lost') animals = animals.filter(a => a.tipoCadastro === 'perdido');
  if (currentFilter === 'found') animals = animals.filter(a => a.tipoCadastro === 'encontrado');

  if (filterTipo !== 'all') {
    animals = animals.filter(a => a.tipoCadastro === filterTipo);
  }

  if (filterCategoria !== 'all') {
    animals = animals.filter(a => a.categoriaAnimal === filterCategoria);
  }

  if (searchText) {
    animals = animals.filter(a =>
      (a.nomeAnimal || '').toLowerCase().includes(searchText) ||
      (a.racaAnimal || '').toLowerCase().includes(searchText) ||
      (a.corAnimal || '').toLowerCase().includes(searchText)
    );
  }

  if (filterBairro) {
    animals = animals.filter(a =>
      (a.bairroAnimal || '').toLowerCase().includes(filterBairro)
    );
  }

  if (animals.length === 0) {
    grid.innerHTML = '<p>Nenhum animal encontrado.</p>';
    return;
  }

  grid.innerHTML = animals.map(a => {
    const tagClass = a.tipoCadastro === 'perdido' ? 'tag-lost' : 'tag-found';
    const tagLabel = a.tipoCadastro === 'perdido' ? 'Perdido' : 'Encontrado';

    const nome = a.nomeAnimal || 'Sem nome';
    const raca = a.racaAnimal || 'Raça não informada';
    const bairro = a.bairroAnimal || 'Bairro não informado';

    let dataFormatada = 'Data não informada';

    if (a.criadoEm && a.criadoEm.toDate) {
      dataFormatada = a.criadoEm.toDate().toLocaleDateString('pt-BR');
    }

    const imgEl = a.foto
      ? `<img src="${a.foto}" alt="${nome}">`
      : `<div class="img-hint"><span>🐾</span><small>Foto em análise</small></div>`;

    return `
      <div class="animal-card">
        <div class="animal-card-img">
          <span class="tag ${tagClass}">${tagLabel}</span>
          ${imgEl}
        </div>

        <div class="animal-card-body">
          <h4>${nome}</h4>
          <div class="breed">${raca}</div>

          <div class="animal-card-meta">
            <span>📍 ${bairro}</span>
            <span>📅 ${dataFormatada}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/*===================
    MENU DE CONTA
=====================*/
function toggleAccountMenu() {
  document.getElementById('accountDropdown').classList.toggle('open');
}

function logout() {
  localStorage.removeItem('sitepet_logged_user');
  loggedUser = null;

  const dropdown = document.getElementById('accountDropdown');
  if (dropdown) dropdown.classList.remove('open');

  updateHeaderAccountUI();

  showMessage('Logout', 'Você saiu da sua conta.');
}

document.addEventListener('click', function (e) {
  const menu = document.querySelector('.account-menu');

  if (menu && !menu.contains(e.target)) {
    document.getElementById('accountDropdown')?.classList.remove('open');
  }
});

/*========================================
ATUALIZAÇÃO DA INTERFACE DO MENU DE CONTA
==========================================*/
function updateHeaderAccountUI() {
  const loginBtn = document.getElementById('loginHeaderBtn');
  const accountMenu = document.getElementById('accountMenuWrapper');

  if (!loginBtn || !accountMenu) return;

  if (loggedUser) {
    loginBtn.classList.add('hidden');
    accountMenu.classList.remove('hidden');
  } else {
    loginBtn.classList.remove('hidden');
    accountMenu.classList.add('hidden');
  }
}

/*================
MENU / NAVEGAÇÃO
=================*/
const menuLinks = document.querySelectorAll('.nav-links a');
const heroSection = document.getElementById('home-section');
const animalsSection = document.getElementById('animals-section');
const searchBar = document.querySelector('.search-bar');
const howSection = document.getElementById('how-section');
const featuresSection = document.querySelector('.features');
const tipsSection = document.getElementById('tips-section');
const contactSection = document.getElementById('contact-section');
const tipoFilterWrapper = document.getElementById('tipoFilterWrapper');

function resetSections() {
    if (heroSection) heroSection.style.display = 'none';
    if (searchBar) searchBar.style.display = 'none';
    if (animalsSection) animalsSection.style.display = 'none';
    if (featuresSection) featuresSection.style.display = 'none';
    if (howSection) howSection.style.display = 'none';
    if (tipsSection) tipsSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
}

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        menuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        document.querySelector('.nav-links')?.classList.remove('open');

        const page = this.dataset.page;

        refreshCardsIfNeeded(page);

        if (page === 'home') {
            resetSections();

            heroSection.style.display = 'flex';
            searchBar.style.display = 'flex';
            animalsSection.style.display = 'block';
            featuresSection.style.display = 'block';

            searchBar.classList.remove('hidden-hero');

            if (tipoFilterWrapper) {
                tipoFilterWrapper.style.display = 'flex';
            }

            buildCards('all');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (page === 'lost') {
            resetSections();

            searchBar.style.display = 'flex';
            animalsSection.style.display = 'block';
            featuresSection.style.display = 'block';

            searchBar.classList.add('hidden-hero');

            if (tipoFilterWrapper) {
                tipoFilterWrapper.style.display = 'none';
            }

            buildCards('lost');

            animalsSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (page === 'found') {
            resetSections();

            searchBar.style.display = 'flex';
            animalsSection.style.display = 'block';
            featuresSection.style.display = 'block';

            searchBar.classList.add('hidden-hero');

            if (tipoFilterWrapper) {
                tipoFilterWrapper.style.display = 'none';
            }

            buildCards('found');

            animalsSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (page === 'how') {
            resetSections();

            howSection.style.display = 'block';

            howSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (page === 'tips') {
            resetSections();

            tipsSection.style.display = 'block';

            tipsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if (page === 'contact') {
            resetSections();

            contactSection.style.display = 'block';

            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/*========================
  LOGIN / CADASTRO USUÁRIO
==========================*/
let loggedUser = null;
localStorage.removeItem('sitepet_logged_user');

function openLoginModal() {
    document.getElementById('loginModal').classList.add('open');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('open');
}

function showLoginMode() {
    document.getElementById('loginBox').style.display = 'block';
    document.getElementById('registerBox').style.display = 'none';

    document.getElementById('btnLoginMode').classList.add('active');
    document.getElementById('btnRegisterMode').classList.remove('active');
}

function showRegisterMode() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('registerBox').style.display = 'block';

    document.getElementById('btnLoginMode').classList.remove('active');
    document.getElementById('btnRegisterMode').classList.add('active');
}

async function registerUser() {
    const nome = document.getElementById('registerNome').value.trim();
    const telefone = document.getElementById('registerTelefone').value.trim();
    const usuario = document.getElementById('registerUsuario').value.trim();
    const senha = document.getElementById('registerPassword').value.trim();

    if (!nome || !telefone || !usuario || !senha) {
        showMessage('Atenção', 'Preencha todos os campos para criar o cadastro.');
        return;
    }

    try {
        const existingUser = await db.collection('sitepet_usuarios')
            .where('usuario', '==', usuario)
            .get();

        if (!existingUser.empty) {
            showMessage('Atenção', 'Esse usuário já existe. Escolha outro nome de usuário.');
            return;
        }

        const docRef = await db.collection('sitepet_usuarios').add({
            nome,
            telefone,
            usuario,
            senha,
            criadoEm: new Date()
        });

        loggedUser = {
            id: docRef.id,
            nome,
            telefone,
            usuario,
            senha
        };

        localStorage.setItem('sitepet_logged_user', JSON.stringify(loggedUser));

        fillUserData();
        updateHeaderAccountUI();
        closeLoginModal();

        showMessage('Sucesso', 'Cadastro realizado e login efetuado com sucesso.');

    } catch (error) {
        console.error(error);
        showMessage('Erro', 'Não foi possível criar o cadastro. Tente novamente.');
    }
}

async function loginUser() {
    const usuario = document.getElementById('loginUsuario').value.trim();
    const senha = document.getElementById('loginPassword').value.trim();

    if (!usuario || !senha) {
        showMessage('Atenção', 'Informe usuário e senha.');
        return;
    }

    try {
        const userSnapshot = await db.collection('sitepet_usuarios')
            .where('usuario', '==', usuario)
            .where('senha', '==', senha)
            .get();

        if (userSnapshot.empty) {
            showMessage('Atenção', 'Usuário ou senha incorretos.');
            return;
        }

        const userDoc = userSnapshot.docs[0];
        loggedUser = {
            id: userDoc.id,
            ...userDoc.data()
        };

        localStorage.setItem('sitepet_logged_user', JSON.stringify(loggedUser));

        fillUserData();
        updateHeaderAccountUI();
        closeLoginModal();

        showMessage('Sucesso', 'Login realizado com sucesso.');

    } catch (error) {
        console.error(error);
        showMessage('Erro', 'Não foi possível fazer login. Tente novamente.');
    }
}

function fillUserData() {
    if (!loggedUser) return;

    document.getElementById('nomePessoa').value = loggedUser.nome || '';
    document.getElementById('telefonePessoa').value = loggedUser.telefone || '';

    const statusText = document.getElementById('userStatusText');
    const loginBtn = document.querySelector('.login-toggle-btn');

    if (statusText) {
        statusText.textContent = `Logado como ${loggedUser.nome}`;
    }

    if (loginBtn) {
        loginBtn.style.display = 'none';
    }
}

function checkLoggedUser() {
    if (loggedUser) {
        fillUserData();
    }
}


/*==========================
  MODAL DE PERFIL DO USUÁRIO
============================*/
function openProfileModal() {
  document.getElementById('accountDropdown').classList.remove('open');

  if (!loggedUser) {
    showMessage('Atenção', 'Você precisa fazer login para acessar o perfil.');
    openLoginModal();
    return;
  }

  document.getElementById('profileNome').textContent = loggedUser.nome || '-';
  document.getElementById('profileTelefone').textContent = loggedUser.telefone || '-';
  document.getElementById('profileUsuario').textContent = loggedUser.usuario || '-';

  document.getElementById('profileModal').classList.add('open');
}

function closeProfileModal() {
  document.getElementById('profileModal').classList.remove('open');
}


/*=======================================
 MODAL DE ANIMAIS CADASTRADOS DO USUÁRIO
=========================================*/
async function openMyAnimalsModal() {
  document.getElementById('accountDropdown').classList.remove('open');

  if (!loggedUser) {
    showMessage('Atenção', 'Você precisa fazer login para ver seus animais cadastrados.');
    openLoginModal();
    return;
  }

  const list = document.getElementById('myAnimalsList');
  list.innerHTML = 'Carregando...';

  document.getElementById('myAnimalsModal').classList.add('open');

  try {
    const snapshot = await db.collection('sitepet_animais')
      .where('usuarioId', '==', loggedUser.id)
      .get();

    if (snapshot.empty) {
      list.innerHTML = '<p>Você ainda não cadastrou nenhum animal.</p>';
      return;
    }

    list.innerHTML = snapshot.docs.map(doc => {
      const animal = doc.data();

      return `
        <div class="my-animal-item">
          <strong>${animal.nomeAnimal || 'Sem nome'}</strong>
          <span>Situação: ${animal.tipoCadastro || '-'}</span>
          <span>Raça: ${animal.racaAnimal || '-'}</span>
          <span>Cor: ${animal.corAnimal || '-'}</span>
          <span>Bairro: ${animal.bairroAnimal || '-'}</span>
          <span>Cidade: ${animal.cidadeAnimal || '-'}</span>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error(error);
    list.innerHTML = '<p>Erro ao carregar seus animais cadastrados.</p>';
  }
}

function closeMyAnimalsModal() {
  document.getElementById('myAnimalsModal').classList.remove('open');
}

/*==========================
  SALVAR ANIMAL NO FIREBASE
============================*/
const animalForm = document.getElementById('animalForm');

if (animalForm) {
    animalForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const novoAnimal = {
            nomePessoa: document.getElementById('nomePessoa').value,
            telefonePessoa: document.getElementById('telefonePessoa').value,
            tipoCadastro: document.getElementById('tipoCadastro').value,
            nomeAnimal: document.getElementById('nomeAnimal').value || 'Sem nome',
            categoriaAnimal: document.getElementById('categoriaAnimal').value,
            racaAnimal: document.getElementById('racaAnimal').value || 'Não informada',
            corAnimal: document.getElementById('corAnimal').value,
            bairroAnimal: document.getElementById('bairroAnimal').value,
            cidadeAnimal: document.getElementById('cidadeAnimal').value,
            descricaoAnimal: document.getElementById('descricaoAnimal').value,
            foto: '',
            usuarioId: loggedUser ? loggedUser.id : '',
            usuarioNome: loggedUser ? loggedUser.nome : '',
            criadoEm: new Date()
        };

        try {
            await db.collection('sitepet_animais').add(novoAnimal);

            showMessage('Anúncio', ' publicado com sucesso!');
            animalForm.reset();
            closeAnimalModal();

        } catch (error) {
            console.error(error);
            showMessage('Erro', ' ao publicar anúncio. Tente novamente.');
        }
    });
}

/*==================================
ATUALIZAÇÃO DOS CARDS APÓS CADASTRO
=====================================*/
function refreshCardsIfNeeded(page) {
    if (page === 'home') {
        buildCards('all');
    }

    if (page === 'lost') {
        buildCards('lost');
    }

    if (page === 'found') {
        buildCards('found');
    }
}

/*==========================
  TOGGLE VISUALIZAÇÃO SENHA
=============================*/
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        button.textContent = "🙈";
    } else {
        input.type = "password";
        button.textContent = "👁️";
    }
}

/*===================
    MENSAGENS GERAIS
=====================*/
function showMessage(title, text) {
    document.getElementById('messageTitle').textContent = title;
    document.getElementById('messageText').textContent = text;
    document.getElementById('messageModal').classList.add('open');
}

function closeMessageModal() {
    document.getElementById('messageModal').classList.remove('open');
}

function toggleMobileMenu() {
  document.querySelector('.nav-links')?.classList.toggle('open');
}

/*===================
EVENTOS DOS FILTROS
=====================*/
document.getElementById('searchText')?.addEventListener('input', renderFilteredCards);
document.getElementById('filterBairro')?.addEventListener('input', renderFilteredCards);
document.getElementById('filterTipo')?.addEventListener('change', renderFilteredCards);
document.getElementById('filterCategoria')?.addEventListener('change', renderFilteredCards);


/*================
INICIALIZAÇÃO
=================*/
updateHeaderAccountUI();
buildCards('all');

/*================
USUÁRIOS ONLINE - FIREBASE REALTIME DATABASE
=================*/
(function initOnlineStatus() {
  const countEl = document.getElementById('onlineCount');
  if (!countEl) return;

  // Gera um ID único para esta sessão
  const sessionId = Math.random().toString(36).slice(2);

  const presencaRef = rtdb.ref('presenca');
  const minhaPresenca = presencaRef.child(sessionId);

  // Detecta conexão com o Firebase
  rtdb.ref('.info/connected').on('value', function (snap) {
    if (!snap.val()) return;

    // Quando desconectar (fechar aba, perder internet), remove automaticamente
    minhaPresenca.onDisconnect().remove();

    // Registra presença
    minhaPresenca.set({
      entrou: firebase.database.ServerValue.TIMESTAMP
    });
  });

  // Escuta em tempo real quantos usuários estão online
  presencaRef.on('value', function (snap) {
    const total = snap.numChildren();
    countEl.textContent = total;
  });
})();
