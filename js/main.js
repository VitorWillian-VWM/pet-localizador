/*================
DADOS INICIAIS
=================*/
let animals = [
    {
        id: 1,
        tipoCadastro: 'encontrador',
        nomeAnimal: 'Rex',
        raca: 'Vira-lata',
        cor: 'Caramelo',
        porte: 'Médio',
        sexo: 'Macho',
        status: 'encontrado',
        local: 'Próximo à praça central',
        bairro: 'Centro',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-20',
        nomePessoa: 'João Silva',
        telefone: '67999999999',
        obs: 'Estava com coleira azul.',
        foto: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 2,
        tipoCadastro: 'dono',
        nomeAnimal: 'Luna',
        raca: 'Sem raça definida',
        cor: 'Preta com branco',
        porte: 'Pequeno',
        sexo: 'Fêmea',
        status: 'perdido',
        local: 'Vista perto de uma farmácia',
        bairro: 'Vila Nova',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-18',
        nomePessoa: 'Maria Oliveira',
        telefone: '67988887777',
        obs: 'Muito assustada.',
        foto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 3,
        tipoCadastro: 'encontrador',
        nomeAnimal: 'Thor',
        raca: 'Labrador',
        cor: 'Dourado',
        porte: 'Grande',
        sexo: 'Macho',
        status: 'encontrado',
        local: 'Perto do supermercado',
        bairro: 'Jardim Alvorada',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-15',
        nomePessoa: 'Carlos Mendes',
        telefone: '67991112222',
        obs: 'Muito dócil.',
        foto: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 4,
        tipoCadastro: 'dono',
        nomeAnimal: 'Mel',
        raca: 'Pinscher',
        cor: 'Preta',
        porte: 'Pequeno',
        sexo: 'Fêmea',
        status: 'perdido',
        local: 'Saiu correndo perto de casa',
        bairro: 'Interlagos',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-17',
        nomePessoa: 'Fernanda Souza',
        telefone: '67992223333',
        obs: 'Tem uma coleira rosa.',
        foto: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 5,
        tipoCadastro: 'encontrador',
        nomeAnimal: 'Bob',
        raca: 'Golden Retriever',
        cor: 'Dourado',
        porte: 'Grande',
        sexo: 'Macho',
        status: 'encontrado',
        local: 'Praça esportiva',
        bairro: 'Santa Luzia',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-14',
        nomePessoa: 'Ricardo Lima',
        telefone: '67993334444',
        obs: 'Bem alimentado.',
        foto: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 6,
        tipoCadastro: 'dono',
        nomeAnimal: 'Nina',
        raca: 'Shih Tzu',
        cor: 'Branca',
        porte: 'Pequeno',
        sexo: 'Fêmea',
        status: 'perdido',
        local: 'Perto da escola municipal',
        bairro: 'Parque São Carlos',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-13',
        nomePessoa: 'Amanda Rocha',
        telefone: '67994445555',
        obs: 'Pelagem aparada.',
        foto: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 7,
        tipoCadastro: 'encontrador',
        nomeAnimal: 'Max',
        raca: 'Pastor Alemão',
        cor: 'Marrom e preto',
        porte: 'Grande',
        sexo: 'Macho',
        status: 'encontrado',
        local: 'Próximo ao terminal',
        bairro: 'Centro',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-12',
        nomePessoa: 'Paulo Henrique',
        telefone: '67995556666',
        obs: 'Muito atento.',
        foto: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 8,
        tipoCadastro: 'dono',
        nomeAnimal: 'Belinha',
        raca: 'Poodle',
        cor: 'Branca',
        porte: 'Pequeno',
        sexo: 'Fêmea',
        status: 'perdido',
        local: 'Rua da igreja',
        bairro: 'Santos Dumont',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-11',
        nomePessoa: 'Luciana Alves',
        telefone: '67996667777',
        obs: 'Muito carinhosa.',
        foto: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 9,
        tipoCadastro: 'encontrador',
        nomeAnimal: 'Toby',
        raca: 'Beagle',
        cor: 'Marrom, branco e preto',
        porte: 'Médio',
        sexo: 'Macho',
        status: 'encontrado',
        local: 'Ao lado do mercado',
        bairro: 'Ipacarai',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-10',
        nomePessoa: 'Eduardo Martins',
        telefone: '67997778888',
        obs: 'Muito brincalhão.',
        foto: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 10,
        tipoCadastro: 'dono',
        nomeAnimal: 'Pandora',
        raca: 'Border Collie',
        cor: 'Preta e branca',
        porte: 'Médio',
        sexo: 'Fêmea',
        status: 'perdido',
        local: 'Perto do posto',
        bairro: 'Jardim Brasília',
        cidade: 'Três Lagoas',
        dataEncontrado: '2026-05-09',
        nomePessoa: 'Gustavo Pereira',
        telefone: '67998889999',
        obs: 'Responde pelo nome.',
        foto: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80'
    }
];

/*================
VARIÁVEIS GLOBAIS
=================*/
let avaliacaoSelecionada = 0;
let statusAtual = '';
let paginaAtual = 1;
const itensPorPagina = 6;

/*================
NAVEGAÇÃO
=================*/
function setActive(btn) {
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
    });

    if (btn) {
        btn.classList.add('active');
    }
}

function showScreen(id, btn) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    if (btn) {
        setActive(btn);
    } else {
        const map = {
            home: 0,
            cadastro: 1,
            lista: 2
        };

        setActive(document.querySelectorAll('.nav-btn')[map[id]]);
    }

    if (id === 'lista') {
        renderCards();
    }

    updateTotal();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/*================
STATUS DO CADASTRO
=================*/
function setStatusTab(status, btn) {
    statusAtual = status;
    paginaAtual = 1;

    document.querySelectorAll('.tab-btn').forEach(botao => {
        botao.classList.remove('active');
    });

    btn.classList.add('active');
    renderCards();
}

/*================
LOCALIZAÇÃO
=================*/
function fakeLocation() {
    document.getElementById('locText').textContent =
        'Localização marcada: -20.7849, -51.7007 (demo)';
}

/*================
UPLOAD DE IMAGEM
=================*/
document.getElementById('foto').addEventListener('change', e => {
    const arquivo = e.target.files[0];
    const fileName = document.getElementById('fileName');
    const preview = document.getElementById('preview');

    if (arquivo) {
        fileName.textContent = arquivo.name;
        preview.src = URL.createObjectURL(arquivo);
        preview.style.display = 'block';
    } else {
        fileName.textContent = 'Nenhuma foto selecionada';
        preview.style.display = 'none';
    }
});

/*================
CADASTRO DE ANIMAL
=================*/
document.getElementById('animalForm').addEventListener('submit', e => {
    e.preventDefault();

    animals.unshift({
        id: Date.now(),
        tipoCadastro: val('tipoCadastro'),
        nomeAnimal: val('nomeAnimal') || 'Nome não informado',
        raca: val('raca') || 'Não informada',
        cor: val('cor') || 'Não informada',
        porte: val('porte'),
        sexo: val('sexo'),
        status: val('status'),
        local: val('local') || 'Não informado',
        bairro: val('bairro') || 'Não informado',
        cidade: val('cidade') || 'Não informada',
        dataEncontrado: val('dataEncontrado') || new Date().toISOString().slice(0, 10),
        nomePessoa: val('nomePessoa') || 'Não informado',
        telefone: val('telefone') || '',
        obs: val('obs') || 'Sem observações.',
        foto: document.getElementById('preview').src || 'https://via.placeholder.com/800x500?text=Sem+Foto'
    });

    mostrarMensagemModal(
    'Cadastro realizado!',
    'O animal foi cadastrado com sucesso na demonstração.',
    'success'
    );

    e.target.reset();

    document.getElementById('preview').style.display = 'none';
    document.getElementById('fileName').textContent = 'Nenhuma foto selecionada';
    document.getElementById('locText').textContent = 'Nenhuma localização marcada';

    showScreen('lista');
});


/*================
FORMULÁRIO DINÂMICO
=================*/
function atualizarFormularioPorTipo() {
    const tipoCadastro = document.getElementById('tipoCadastro');
    const status = document.getElementById('status');
    const statusField = document.querySelector('.status-field');

    if (!tipoCadastro || !status || !statusField) return;

    if (tipoCadastro.value === 'encontrador') {
        status.value = 'encontrado';
        statusField.classList.add('hidden-field');
    }

    if (tipoCadastro.value === 'dono') {
        status.value = 'perdido';
        statusField.classList.add('hidden-field');
    }
}

document.getElementById('tipoCadastro').addEventListener('change', atualizarFormularioPorTipo);


/*================
UTILITÁRIOS
=================*/
function val(id) {
    return document.getElementById(id).value.trim();
}

function onlyNumbers(valor) {
    return String(valor || '').replace(/\D/g, '');
}

function formatDate(data) {
    if (!data) return '-';

    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

/*================
LISTAGEM DE ANIMAIS
=================*/
function renderCards() {
    const busca = (document.getElementById('search')?.value || '').toLowerCase();
    const porteFiltro = document.getElementById('porteFilter')?.value || '';

    const wrap = document.getElementById('cards');
    const pagination = document.getElementById('pagination');

    wrap.innerHTML = '';
    pagination.innerHTML = '';

    const filtrados = animals.filter(animal => {
        const texto = `
            ${animal.nomeAnimal}
            ${animal.bairro}
            ${animal.cidade}
            ${animal.cor}
            ${animal.porte}
            ${animal.raca}
            ${animal.tipoCadastro}
        `.toLowerCase();

        return texto.includes(busca) &&
            (!statusAtual || animal.status === statusAtual) &&
            (!porteFiltro || animal.porte === porteFiltro);
    });

    if (!filtrados.length) {
        wrap.innerHTML = `
            <div class="empty">
                Nenhum animal encontrado com esses filtros.
            </div>
        `;
        return;
    }

    const totalPaginas = Math.ceil(filtrados.length / itensPorPagina);
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const animaisPagina = filtrados.slice(inicio, fim);

    animaisPagina.forEach(animal => {
        wrap.innerHTML += `
            <article class="card">
                <div class="card-img">
                    <img src="${animal.foto}">
                    <span class="badge ${animal.status === 'encontrado' ? 'found' : 'lost'}">
                        ${animal.status === 'encontrado' ? 'Encontrado' : 'Perdido'}
                    </span>
                </div>

                <div class="card-body">
                    <h3>${animal.nomeAnimal}</h3>

                    <p style="color:var(--muted)">
                        ${animal.raca} • ${animal.cor}
                    </p>

                    <div class="meta">
                        <p><strong>Porte</strong><br>${animal.porte}</p>
                        <p><strong>Bairro</strong><br>${animal.bairro}</p>
                        <p><strong>Cidade</strong><br>${animal.cidade}</p>
                        <p><strong>Cadastro</strong><br>${formatTipoCadastro(animal.tipoCadastro)}</p>
                    </div>

                    <div class="card-actions">
                        <button class="btn primary" onclick="details(${animal.id})">
                            Ver detalhes
                        </button>

                        <button class="btn outline" onclick="editDemo(${animal.id})">
                            Editar
                        </button>
                    </div>
                </div>
            </article>
        `;
    });

    for (let i = 1; i <= totalPaginas; i++) {
        pagination.innerHTML += `
            <button class="${i === paginaAtual ? 'active' : ''}" onclick="mudarPagina(${i})">
                ${i}
            </button>
        `;
    }
}

/*================
PAGINAÇÃO
=================*/
function mudarPagina(pagina) {
    paginaAtual = pagina;
    renderCards();
}

/*================
TIPO DE CADASTRO
=================*/
function formatTipoCadastro(tipo) {
    const tipos = {
        encontrador: 'Pessoa que encontrou',
        dono: 'Dono procurando'
    };

    return tipos[tipo] || 'Não informado';
}

/*================
DETALHES DO ANIMAL
=================*/
function details(id) {
    const animal = animals.find(item => item.id === id);

    document.getElementById('modalContent').innerHTML = `
        <img class="detail-img" src="${animal.foto}">

        <div class="detail-body">
            <span class="badge ${animal.status === 'encontrado' ? 'found' : 'lost'}" style="position:static">
                ${animal.status}
            </span>

            <h2 style="margin-top:14px;font-size:30px">${animal.nomeAnimal}</h2>

            <p style="color:var(--muted);margin-top:6px">
                ${animal.raca} • ${animal.cor} • ${animal.porte}
            </p>

            <div class="detail-grid">
                <div class="detail-item"><span>Sexo</span><strong>${animal.sexo}</strong></div>
                <div class="detail-item"><span>Data</span><strong>${formatDate(animal.dataEncontrado)}</strong></div>
                <div class="detail-item"><span>Bairro</span><strong>${animal.bairro}</strong></div>
                <div class="detail-item"><span>Cidade</span><strong>${animal.cidade}</strong></div>
                <div class="detail-item" style="grid-column:1/-1"><span>Local</span><strong>${animal.local}</strong></div>
                <div class="detail-item" style="grid-column:1/-1"><span>Observações</span><strong>${animal.obs}</strong></div>
                <div class="detail-item"><span>Responsável</span><strong>${animal.nomePessoa}</strong></div>
                <div class="detail-item"><span>WhatsApp</span><strong>${animal.telefone || 'Não informado'}</strong></div>
            </div>

            <a class="btn wa full"
               target="_blank"
               href="https://wa.me/55${onlyNumbers(animal.telefone)}?text=Olá, vi o cadastro do cachorro ${encodeURIComponent(animal.nomeAnimal)} no sistema Encontre Meu Amigo.">
               Chamar no WhatsApp
            </a>
        </div>
    `;

    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function editDemo(id) {
    mostrarMensagemModal(
        'Função em desenvolvimento',
        'Na versão com Firebase este botão permitirá editar o cadastro completo.',
        'info'
    );
}

/*================
CONTADOR HOME
=================*/
function updateTotal() {
    document.getElementById('totalHome').textContent = animals.length;
}

/*================
FILTROS
=================*/
document.addEventListener('input', e => {
    if (['search', 'porteFilter'].includes(e.target.id)) {
        renderCards();
    }
});

/*================
MODAL DE MENSAGEM
=================*/
function mostrarMensagemModal(titulo, texto, tipo = 'success') {
    const modal = document.getElementById('customModal');
    const icon = document.getElementById('customModalIcon');

    document.getElementById('customModalTitle').textContent = titulo;
    document.getElementById('customModalText').textContent = texto;

    if (tipo === 'success') {
        icon.textContent = '✓';
        icon.style.background = '#e8f8ee';
        icon.style.color = '#2b7a4b';
    }

    if (tipo === 'warning') {
        icon.textContent = '!';
        icon.style.background = '#fff4dc';
        icon.style.color = '#d89000';
    }

    if (tipo === 'info') {
        icon.textContent = 'i';
        icon.style.background = '#e8f1ff';
        icon.style.color = '#2563eb';
    }

    modal.classList.add('active');
}

function fecharMensagemModal() {
    document.getElementById('customModal').classList.remove('active');
}

/*================
MODAL PIX
=================*/
function abrirModalPix() {
    document.getElementById('pixModal').classList.add('active');
}

function fecharModalPix() {
    document.getElementById('pixModal').classList.remove('active');
}

/*================
AVALIAÇÃO
=================*/
function setRating(valor) {
    avaliacaoSelecionada = valor;

    const estrelas = document.querySelectorAll('#starRating span');

    estrelas.forEach((estrela, index) => {
        estrela.classList.toggle('active', index < valor);
    });

    const textos = {
        1: '😕 Pode melhorar',
        2: '🙂 Interessante',
        3: '😊 Boa ideia',
        4: '😍 Excelente projeto',
        5: '🚀 Projeto incrível!'
    };

    document.getElementById('ratingText').textContent = textos[valor];
}

/*================
COMENTÁRIOS PIX
=================*/
function salvarComentarioPix() {
    const comentario = document.getElementById('comentarioPix').value.trim();
    const lista = document.getElementById('listaComentarios');

    if (!comentario) {
        mostrarMensagemModal(
        'Comentário vazio',
        'Digite um comentário antes de salvar.',
        'warning'
    );
        return;
    }

    const vazio = lista.querySelector('.empty-comment');

    if (vazio) {
        vazio.remove();
    }

    const item = document.createElement('div');
    const estrelasTexto = '⭐'.repeat(avaliacaoSelecionada || 0);

    item.className = 'comment-item';

    item.innerHTML = `
        <strong>Apoiador:</strong> ${estrelasTexto}<br>
        ${comentario}
    `;

    lista.prepend(item);

    document.getElementById('comentarioPix').value = '';
    fecharModalPix();
}

/*================
INICIALIZAÇÃO
=================*/
renderCards();
updateTotal();
atualizarFormularioPorTipo();