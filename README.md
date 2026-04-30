// 1. DADOS DO PROJETO (Centralizados para facilitar edição)
const jornadaData = [
  { id: 1, title: "Cultivo", desc: "Manejo responsável do solo." },
  { id: 2, title: "Indústria", desc: "Transformação tecnológica do grão." },
  { id: 3, title: "Cidade", desc: "O malte chegando ao consumidor." }
];

// 2. RENDERIZAÇÃO DINÂMICA
const renderJornada = () => {
  const container = document.getElementById('jornada-container');
  if (!container) return;

  container.innerHTML = jornadaData.map(item => `
    <article class="process-card surface-block">
      <div class="process-number">0${item.id}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');
};

// 3. ACESSIBILIDADE: CONTROLE DE FONTE
let fontSize = 100; // Em porcentagem (%)
const changeFontSize = (type) => {
  fontSize += (type === 'increase' ? 10 : -10);
  document.documentElement.style.fontSize = `${fontSize}%`;
};

// 4. SCROLL REVEAL (Visão Sistêmica)
const handleScroll = () => {
  const sections = document.querySelectorAll('.reveal');
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('visible');
  });
};

// Inicialização
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', () => {
  renderJornada();
  handleScroll();
});
