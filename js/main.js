let animals = [
    { id: 1, nomeAnimal: 'Rex', raca: 'Vira-lata', cor: 'Caramelo', porte: 'Médio', sexo: 'Macho', status: 'encontrado', local: 'Próximo à praça central', bairro: 'Centro', cidade: 'Três Lagoas', dataEncontrado: '2026-05-20', nomePessoa: 'João Silva', telefone: '67999999999', obs: 'Estava com coleira azul e é muito dócil.', foto: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
    { id: 2, nomeAnimal: 'Luna', raca: 'Sem raça definida', cor: 'Preta com branco', porte: 'Pequeno', sexo: 'Fêmea', status: 'perdido', local: 'Vista pela última vez perto de uma farmácia', bairro: 'Vila Nova', cidade: 'Três Lagoas', dataEncontrado: '2026-05-18', nomePessoa: 'Maria Oliveira', telefone: '67988887777', obs: 'Assustada, não gosta de barulho.', foto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80' }
];
function setActive(btn) { document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active')); if (btn) btn.classList.add('active') }
function showScreen(id, btn) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(id).classList.add('active'); if (btn) setActive(btn); else { const map = { home: 0, cadastro: 1, lista: 2 }; setActive(document.querySelectorAll('.nav-btn')[map[id]]) } if (id === 'lista') renderCards(); updateTotal(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function fakeLocation() { document.getElementById('locText').textContent = 'Localização marcada: -20.7849, -51.7007 (demo)' }
document.getElementById('foto').addEventListener('change', e => { const f = e.target.files[0]; if (f) { const p = document.getElementById('preview'); p.src = URL.createObjectURL(f); p.style.display = 'block'; } });
document.getElementById('animalForm').addEventListener('submit', e => { e.preventDefault(); animals.unshift({ id: Date.now(), nomeAnimal: val('nomeAnimal') || 'Nome não informado', raca: val('raca') || 'Não informada', cor: val('cor') || 'Não informada', porte: val('porte'), sexo: val('sexo'), status: val('status'), local: val('local') || 'Não informado', bairro: val('bairro') || 'Não informado', cidade: val('cidade') || 'Não informada', dataEncontrado: val('dataEncontrado') || new Date().toISOString().slice(0, 10), nomePessoa: val('nomePessoa') || 'Não informado', telefone: val('telefone') || '', obs: val('obs') || 'Sem observações.', foto: document.getElementById('preview').src || 'https://via.placeholder.com/800x500?text=Sem+Foto' }); alert('Cadastro salvo em memória para demonstração.'); e.target.reset(); document.getElementById('preview').style.display = 'none'; document.getElementById('locText').textContent = 'Nenhuma localização marcada'; showScreen('lista'); });
function val(id) { return document.getElementById(id).value.trim() }
function renderCards() { const q = (document.getElementById('search')?.value || '').toLowerCase(); const sf = (document.getElementById('statusFilter')?.value || ''); const pf = (document.getElementById('porteFilter')?.value || ''); const wrap = document.getElementById('cards'); wrap.innerHTML = ''; const filtered = animals.filter(a => { const txt = `${a.nomeAnimal} ${a.bairro} ${a.cidade} ${a.cor} ${a.porte} ${a.raca}`.toLowerCase(); return txt.includes(q) && (!sf || a.status === sf) && (!pf || a.porte === pf) }); if (!filtered.length) { wrap.innerHTML = '<div class="empty">Nenhum animal encontrado com esses filtros.</div>'; return } filtered.forEach(a => { wrap.innerHTML += `<article class='card'><div class='card-img'><img src='${a.foto}'><span class='badge ${a.status === 'encontrado' ? 'found' : 'lost'}'>${a.status}</span></div><div class='card-body'><h3>${a.nomeAnimal}</h3><p style='color:var(--muted)'>${a.raca} • ${a.cor}</p><div class='meta'><p><strong>Porte</strong><br>${a.porte}</p><p><strong>Bairro</strong><br>${a.bairro}</p><p><strong>Cidade</strong><br>${a.cidade}</p><p><strong>Data</strong><br>${formatDate(a.dataEncontrado)}</p></div><div class='card-actions'><button class='btn primary' onclick='details(${a.id})'>Ver detalhes</button><button class='btn outline' onclick='editDemo(${a.id})'>Editar</button></div></div></article>` }); }
function details(id) { const a = animals.find(x => x.id === id); document.getElementById('modalContent').innerHTML = `<img class='detail-img' src='${a.foto}'><div class='detail-body'><span class='badge ${a.status === 'encontrado' ? 'found' : 'lost'}' style='position:static'>${a.status}</span><h2 style='margin-top:14px;font-size:30px'>${a.nomeAnimal}</h2><p style='color:var(--muted);margin-top:6px'>${a.raca} • ${a.cor} • ${a.porte}</p><div class='detail-grid'><div class='detail-item'><span>Sexo</span><strong>${a.sexo}</strong></div><div class='detail-item'><span>Data</span><strong>${formatDate(a.dataEncontrado)}</strong></div><div class='detail-item'><span>Bairro</span><strong>${a.bairro}</strong></div><div class='detail-item'><span>Cidade</span><strong>${a.cidade}</strong></div><div class='detail-item' style='grid-column:1/-1'><span>Local de referência</span><strong>${a.local}</strong></div><div class='detail-item' style='grid-column:1/-1'><span>Observações</span><strong>${a.obs}</strong></div><div class='detail-item'><span>Responsável</span><strong>${a.nomePessoa}</strong></div><div class='detail-item'><span>WhatsApp</span><strong>${a.telefone || 'Não informado'}</strong></div></div><a class='btn wa full' target='_blank' href='https://wa.me/55${onlyNumbers(a.telefone)}?text=Olá, vi o cadastro do cachorro ${encodeURIComponent(a.nomeAnimal)} no sistema Encontre Meu Amigo.'>Chamar no WhatsApp</a></div>`; document.getElementById('modal').classList.add('active'); }
function closeModal() { document.getElementById('modal').classList.remove('active') }
function editDemo(id) { alert('Na versão Firebase, este botão abrirá a tela de edição carregando o documento do Firestore.'); }
function onlyNumbers(v) { return String(v || '').replace(/\D/g, '') }
function formatDate(d) { if (!d) return '-'; const [y, m, day] = d.split('-'); return `${day}/${m}/${y}` }
function updateTotal() { document.getElementById('totalHome').textContent = animals.length }
document.addEventListener('input', e => { if (['search', 'statusFilter', 'porteFilter'].includes(e.target.id)) renderCards() }); renderCards(); updateTotal();

function abrirModalPix() {
    document.getElementById("pixModal").classList.add("active");
}

function fecharModalPix() {
    document.getElementById("pixModal").classList.remove("active");
}

function salvarComentarioPix() {
    const comentario = document.getElementById("comentarioPix").value.trim();
    const lista = document.getElementById("listaComentarios");

    if (!comentario) {
        alert("Digite um comentário antes de salvar.");
        return;
    }

    const vazio = lista.querySelector(".empty-comment");
    if (vazio) vazio.remove();

    const item = document.createElement("div");
    item.className = "comment-item";
    const estrelasTexto = "⭐".repeat(avaliacaoSelecionada || 0);

    item.innerHTML = `
    <strong>Apoiador:</strong> ${estrelasTexto}<br>
    ${comentario}
    `;

    lista.prepend(item);

    document.getElementById("comentarioPix").value = "";
    fecharModalPix();
}

let avaliacaoSelecionada = 0;

function setRating(valor) {
    avaliacaoSelecionada = valor;

    const estrelas = document.querySelectorAll("#starRating span");
    estrelas.forEach((estrela, index) => {
        estrela.classList.toggle("active", index < valor);
    });

    const textos = {
        1: "😕 Pode melhorar",
        2: "🙂 Interessante",
        3: "😊 Boa ideia",
        4: "😍 Excelente projeto",
        5: "🚀 Projeto incrível!"
    };

    document.getElementById("ratingText").textContent = textos[valor];
}