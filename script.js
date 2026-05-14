/* ============================================================================
   AGRO FORTE - JAVASCRIPT INTELIGENTE
   
   Estrutura do JS:
   1. Dados Dinâmicos (Arrays de Objetos)
   2. Utilidades & Helpers
   3. Acessibilidade (Font Size, Alto Contraste)
   4. Carrossel de Práticas
   5. Sistema de Abas & Acordeões
   6. Galeria Dinâmica
   7. Formulário de Contato
   8. Scroll Reveal Animations
   9. Menu Mobile
   10. Inicialização
   ============================================================================ */

/* ============================================================================
   1. DADOS DINÂMICOS
   ============================================================================ */

// Dados de Práticas Sustentáveis
const praticasData = [
    {
        id: 1,
        titulo: "Rotação de Culturas",
        descricao: "A rotação de culturas é uma técnica ancestral que alterna o plantio de diferentes espécies no mesmo solo. Isso reduz pragas, melhora a fertilidade do solo e aumenta a biodiversidade. Estudos mostram que a rotação pode aumentar a produtividade em até 30%."
    },
    {
        id: 2,
        titulo: "Compostagem & Adubação Orgânica",
        descricao: "Transformar resíduos orgânicos em adubo natural reduz desperdícios e melhora a estrutura do solo. A compostagem aumenta a retenção de água e nutrientes, criando um ciclo virtuoso de produção sustentável."
    },
    {
        id: 3,
        titulo: "Plantio Direto",
        descricao: "O plantio direto reduz o revolvimento do solo, preservando sua estrutura e microorganismos. Essa prática diminui a erosão, economiza combustível e melhora a capacidade de retenção de água do solo."
    },
    {
        id: 4,
        titulo: "Integração Lavoura-Pecuária",
        descricao: "A integração de cultivos com criação de animais cria um sistema equilibrado. Os animais controlam pragas, fertilizam o solo naturalmente, e os cultivos fornecem alimento, gerando sinergia produtiva."
    },
    {
        id: 5,
        titulo: "Conservação de Água",
        descricao: "Técnicas como mulching, gotejamento e captação de chuva otimizam o uso da água. Em regiões secas, essas práticas podem reduzir o consumo de água em até 50% mantendo a produtividade."
    }
];

// Dados de Benefícios por Categoria
const beneficiosData = {
    ambiental: [
        {
            titulo: "Redução de Emissões de CO₂",
            descricao: "Práticas sustentáveis reduzem significativamente as emissões de gases de efeito estufa, contribuindo para o combate às mudanças climáticas."
        },
        {
            titulo: "Preservação da Biodiversidade",
            descricao: "A agricultura regenerativa cria habitats para polinizadores e fauna benéfica, aumentando a biodiversidade local em até 40%."
        },
        {
            titulo: "Recuperação de Solos Degradados",
            descricao: "Técnicas regenerativas recuperam solos erodidos e compactados, restaurando sua fertilidade natural e capacidade produtiva."
        },
        {
            titulo: "Proteção de Recursos Hídricos",
            descricao: "Reduz a contaminação por agroquímicos e melhora a qualidade da água, protegendo aquíferos e mananciais."
        }
    ],
    economico: [
        {
            titulo: "Redução de Custos",
            descricao: "Menos dependência de insumos químicos e combustíveis reduz custos operacionais em até 35% a longo prazo."
        },
        {
            titulo: "Agregação de Valor",
            descricao: "Produtos orgânicos e sustentáveis alcançam preços 20-40% mais altos no mercado, aumentando a rentabilidade."
        },
        {
            titulo: "Acesso a Mercados Premium",
            descricao: "Certificações de sustentabilidade abrem portas para mercados internacionais e consumidores conscientes."
        },
        {
            titulo: "Resiliência a Crises",
            descricao: "Sistemas diversificados são mais resilientes a flutuações de mercado e eventos climáticos extremos."
        }
    ],
    social: [
        {
            titulo: "Melhoria da Saúde",
            descricao: "Alimentos livres de agroquímicos reduzem riscos de doenças e melhoram a qualidade de vida das comunidades rurais."
        },
        {
            titulo: "Emprego e Renda",
            descricao: "Agricultura sustentável cria mais empregos por hectare que a agricultura convencional, fortalecendo economias locais."
        },
        {
            titulo: "Soberania Alimentar",
            descricao: "Comunidades produzem seu próprio alimento, reduzindo dependência de cadeias globais e aumentando segurança alimentar."
        },
        {
            titulo: "Preservação de Conhecimento",
            descricao: "Valoriza saberes tradicionais e ancestrais, mantendo viva a cultura agrícola das comunidades."
        }
    ]
};

// Dados de Galeria
const galeriaData = [
    { titulo: "Plantação Orgânica" },
    { titulo: "Compostagem Ativa" },
    { titulo: "Biodiversidade" },
    { titulo: "Colheita Sustentável" },
    { titulo: "Solo Regenerado" },
    { titulo: "Irrigação Eficiente" }
];

/* ============================================================================
   2. UTILIDADES & HELPERS
   ============================================================================ */

// Selecionar elementos do DOM
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Criar elemento com classes
function createElement(tag, classes = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (classes) el.className = classes;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

// Adicionar classe com verificação
function addClass(el, className) {
    if (el && !el.classList.contains(className)) {
        el.classList.add(className);
    }
}

// Remover classe com verificação
function removeClass(el, className) {
    if (el && el.classList.contains(className)) {
        el.classList.remove(className);
    }
}

// Toggle classe
function toggleClass(el, className) {
    if (el) el.classList.toggle(className);
}

// Verificar se elemento tem classe
function hasClass(el, className) {
    return el && el.classList.contains(className);
}

/* ============================================================================
   3. ACESSIBILIDADE
   ============================================================================ */

class AccessibilityManager {
    constructor() {
        this.fontSizeMultiplier = 1;
        this.contrastMode = false;
        this.loadSettings();
    }

    // Aumentar tamanho da fonte
    increaseFontSize() {
        if (this.fontSizeMultiplier < 1.5) {
            this.fontSizeMultiplier += 0.1;
            this.applyFontSize();
            this.saveSettings();
            this.announceChange("Tamanho da fonte aumentado");
        }
    }

    // Diminuir tamanho da fonte
    decreaseFontSize() {
        if (this.fontSizeMultiplier > 0.8) {
            this.fontSizeMultiplier -= 0.1;
            this.applyFontSize();
            this.saveSettings();
            this.announceChange("Tamanho da fonte diminuído");
        }
    }

    // Aplicar tamanho da fonte ao documento
    applyFontSize() {
        document.documentElement.style.setProperty(
            '--font-size-multiplier',
            this.fontSizeMultiplier.toFixed(1)
        );
    }

    // Alternar modo alto contraste
    toggleContrast() {
        this.contrastMode = !this.contrastMode;
        if (this.contrastMode) {
            addClass(document.body, 'high-contrast');
            this.announceChange("Modo alto contraste ativado");
        } else {
            removeClass(document.body, 'high-contrast');
            this.announceChange("Modo alto contraste desativado");
        }
        this.saveSettings();
    }

    // Salvar configurações no localStorage
    saveSettings() {
        localStorage.setItem('agroForteA11y', JSON.stringify({
            fontSizeMultiplier: this.fontSizeMultiplier,
            contrastMode: this.contrastMode
        }));
    }

    // Carregar configurações do localStorage
    loadSettings() {
        const saved = localStorage.getItem('agroForteA11y');
        if (saved) {
            const settings = JSON.parse(saved);
            this.fontSizeMultiplier = settings.fontSizeMultiplier || 1;
            this.contrastMode = settings.contrastMode || false;
            this.applyFontSize();
            if (this.contrastMode) {
                addClass(document.body, 'high-contrast');
            }
        }
    }

    // Anunciar mudanças para leitores de tela
    announceChange(message) {
        const announcement = createElement('div', 'sr-only', message);
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }
}

// Instanciar gerenciador de acessibilidade
const a11y = new AccessibilityManager();

// Conectar botões de acessibilidade
$('#fontSizeIncrease')?.addEventListener('click', () => a11y.increaseFontSize());
$('#fontSizeDecrease')?.addEventListener('click', () => a11y.decreaseFontSize());
$('#toggleContrast')?.addEventListener('click', () => a11y.toggleContrast());

/* ============================================================================
   4. CARROSSEL DE PRÁTICAS
   ============================================================================ */

class Carousel {
    constructor() {
        this.currentIndex = 0;
        this.track = $('#carouselTrack');
        this.prevBtn = $('#prevBtn');
        this.nextBtn = $('#nextBtn');
        this.indicatorsContainer = $('#indicators');
        this.init();
    }

    init() {
        this.renderItems();
        this.renderIndicators();
        this.attachEventListeners();
    }

    renderItems() {
        this.track.innerHTML = '';
        praticasData.forEach((pratica) => {
            const item = createElement('div', 'carousel-item');
            item.innerHTML = `
                <h3>${pratica.titulo}</h3>
                <p>${pratica.descricao}</p>
            `;
            this.track.appendChild(item);
        });
    }

    renderIndicators() {
        this.indicatorsContainer.innerHTML = '';
        praticasData.forEach((_, index) => {
            const indicator = createElement('button', 'indicator' + (index === 0 ? ' active' : ''));
            indicator.setAttribute('role', 'tab');
            indicator.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });
    }

    attachEventListeners() {
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        // Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % praticasData.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + praticasData.length) % praticasData.length;
        this.updateCarousel();
    }

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Atualizar indicadores
        $$('.indicator').forEach((indicator, index) => {
            if (index === this.currentIndex) {
                addClass(indicator, 'active');
                indicator.setAttribute('aria-selected', 'true');
            } else {
                removeClass(indicator, 'active');
                indicator.setAttribute('aria-selected', 'false');
            }
        });
        
        // Anúncio para leitores de tela
        a11y.announceChange(`Prática ${this.currentIndex + 1} de ${praticasData.length}: ${praticasData[this.currentIndex].titulo}`);
    }
}

// Instanciar carrossel
const carousel = new Carousel();

/* ============================================================================
   5. SISTEMA DE ABAS & ACORDEÕES
   ============================================================================ */

class TabsAndAccordions {
    constructor() {
        this.currentTab = 'ambiental';
        this.init();
    }

    init() {
        this.setupTabs();
        this.renderAccordions('ambiental');
        this.attachTabListeners();
    }

    setupTabs() {
        $$('.tab-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const tabId = btn.id.replace('tab-', '');
                this.switchTab(tabId);
            });
        });
    }

    switchTab(tabId) {
        // Remover ativo de todos os botões e painéis
        $$('.tab-btn').forEach((btn) => {
            removeClass(btn, 'active');
            btn.setAttribute('aria-selected', 'false');
        });
        $$('.tab-panel').forEach((panel) => {
            removeClass(panel, 'active');
        });

        // Ativar selecionado
        const btn = $(`#tab-${tabId}`);
        const panel = $(`#panel-${tabId}`);
        
        if (btn && panel) {
            addClass(btn, 'active');
            btn.setAttribute('aria-selected', 'true');
            addClass(panel, 'active');
            
            this.currentTab = tabId;
            this.renderAccordions(tabId);
            a11y.announceChange(`Aba ${tabId} selecionada`);
        }
    }

    attachTabListeners() {
        // Navegação por teclado
        $$('.tab-btn').forEach((btn, index) => {
            btn.addEventListener('keydown', (e) => {
                let newIndex = index;
                if (e.key === 'ArrowRight') {
                    newIndex = (index + 1) % $$('.tab-btn').length;
                } else if (e.key === 'ArrowLeft') {
                    newIndex = (index - 1 + $$('.tab-btn').length) % $$('.tab-btn').length;
                }
                $$('.tab-btn')[newIndex].focus();
            });
        });
    }

    renderAccordions(category) {
        const container = $(`#accordion-${category}`);
        if (!container) return;

        container.innerHTML = '';
        const items = beneficiosData[category] || [];

        items.forEach((item, index) => {
            const accordionItem = createElement('div', 'accordion-item');
            accordionItem.innerHTML = `
                <button class="accordion-header" aria-expanded="false" aria-controls="accordion-content-${index}">
                    <span>${item.titulo}</span>
                    <span class="accordion-toggle">▼</span>
                </button>
                <div class="accordion-content" id="accordion-content-${index}">
                    <p class="accordion-text">${item.descricao}</p>
                </div>
            `;

            const header = accordionItem.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                this.toggleAccordion(accordionItem, header);
            });

            // Teclado
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleAccordion(accordionItem, header);
                }
            });

            container.appendChild(accordionItem);
        });
    }

    toggleAccordion(item, header) {
        const isOpen = hasClass(item, 'open');
        
        // Fechar todos os acordeões da mesma categoria
        item.parentElement.querySelectorAll('.accordion-item').forEach((el) => {
            if (el !== item) {
                removeClass(el, 'open');
                el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle o atual
        if (isOpen) {
            removeClass(item, 'open');
            header.setAttribute('aria-expanded', 'false');
        } else {
            addClass(item, 'open');
            header.setAttribute('aria-expanded', 'true');
        }
    }
}

// Instanciar sistema de abas e acordeões
const tabsAccordions = new TabsAndAccordions();

/* ============================================================================
   6. GALERIA DINÂMICA
   ============================================================================ */

class Gallery {
    constructor() {
        this.gallery = $('#gallery');
        this.init();
    }

    init() {
        this.renderGallery();
    }

    renderGallery() {
        this.gallery.innerHTML = '';
        galeriaData.forEach((item, index) => {
            const galleryItem = createElement('div', 'gallery-item');
            galleryItem.setAttribute('role', 'img');
            galleryItem.setAttribute('aria-label', item.titulo);
            galleryItem.innerHTML = `
                <div class="gallery-item-title">${item.titulo}</div>
            `;
            
            // Adicionar animação de entrada
            galleryItem.style.animationDelay = `${index * 0.1}s`;
            addClass(galleryItem, 'scroll-reveal');
            
            this.gallery.appendChild(galleryItem);
        });
    }
}

// Instanciar galeria
const gallery = new Gallery();

/* ============================================================================
   7. FORMULÁRIO DE CONTATO
   ============================================================================ */

class ContactForm {
    constructor() {
        this.form = $('#contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validate()) {
            return;
        }

        const formData = {
            name: $('#name').value,
            email: $('#email').value,
            message: $('#message').value
        };

        // Simular envio
        this.showStatus('Enviando mensagem...', 'info');
        
        setTimeout(() => {
            console.log('Formulário enviado:', formData);
            this.showStatus('Mensagem enviada com sucesso! Obrigado por entrar em contato.', 'success');
            this.form.reset();
            
            // Limpar status após 5 segundos
            setTimeout(() => {
                this.clearStatus();
            }, 5000);
        }, 1500);
    }

    validate() {
        let isValid = true;
        
        // Validar nome
        const nameInput = $('#name');
        const nameError = $('#nameError');
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Por favor, insira seu nome.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validar email
        const emailInput = $('#email');
        const emailError = $('#emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Por favor, insira um email válido.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validar mensagem
        const messageInput = $('#message');
        const messageError = $('#messageError');
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Por favor, insira sua mensagem.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        return isValid;
    }

    showStatus(message, type) {
        const statusDiv = $('#formStatus');
        statusDiv.textContent = message;
        statusDiv.className = `form-status show ${type}`;
    }

    clearStatus() {
        const statusDiv = $('#formStatus');
        statusDiv.className = 'form-status';
        statusDiv.textContent = '';
    }
}

// Instanciar formulário
const contactForm = new ContactForm();

/* ============================================================================
   8. SCROLL REVEAL ANIMATIONS
   ============================================================================ */

class ScrollReveal {
    constructor() {
        this.elements = $$('.scroll-reveal');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        addClass(entry.target, 'scroll-reveal');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            this.elements.forEach((el) => {
                observer.observe(el);
            });
        }
    }
}

// Instanciar scroll reveal
const scrollReveal = new ScrollReveal();

/* ============================================================================
   9. MENU MOBILE
   ============================================================================ */

class MobileMenu {
    constructor() {
        this.menuToggle = $('#menuToggle');
        this.navMenu = $('#navMenu');
        this.navLinks = $$('.nav-link');
        this.init();
    }

    init() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
            
            // Fechar menu ao clicar em um link
            this.navLinks.forEach((link) => {
                link.addEventListener('click', () => this.closeMenu());
            });

            // Fechar menu ao clicar fora
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.header')) {
                    this.closeMenu();
                }
            });

            // Teclado - ESC para fechar
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMenu();
                }
            });
        }
    }

    toggleMenu() {
        const isOpen = this.menuToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.menuToggle.setAttribute('aria-expanded', 'true');
        addClass(this.navMenu, 'open');
    }

    closeMenu() {
        this.menuToggle.setAttribute('aria-expanded', 'false');
        removeClass(this.navMenu, 'open');
    }
}

// Instanciar menu mobile
const mobileMenu = new MobileMenu();

/* ============================================================================
   10. INICIALIZAÇÃO & SMOOTH SCROLL
   ============================================================================ */

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = $(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌱 Agro Forte - Landing Page carregada com sucesso!');
    
    // Adicionar classe scroll-reveal aos elementos que precisam
    $$('.about-card').forEach((card) => {
        addClass(card, 'scroll-reveal');
    });
});

// Observar mudanças de tamanho de janela para responsividade
window.addEventListener('resize', () => {
    // Aqui você pode adicionar lógica responsiva se necessário
});

console.log('✅ Todos os módulos JavaScript carregados com sucesso!');
