document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // LÓGICA DO MENU MOBILE MODERNA
    // ------------------------------------------
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        // Animação suave
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                mobileMenu.style.transition = 'all 0.3s ease-out';
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateY(0)';
            }, 10);
        }
    };

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
    
    // Fecha o menu ao clicar em um link com animação
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.transition = 'all 0.3s ease-out';
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            });
        });
    }
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.transition = 'all 0.3s ease-out';
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        }
    });

    // ------------------------------------------
    // LÓGICA DA BARRA DE PESQUISA
    // ------------------------------------------
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const searchExecute = document.getElementById('search-execute');

    // Função que executa a busca no Google (limpa)
    const executeSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        }
    };
    
    // Alterna a visibilidade da barra de pesquisa com animação
    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', (event) => {
            event.preventDefault();

            const isHidden = searchBar.classList.contains('hidden');
            
            if (isHidden) {
                searchBar.classList.remove('hidden');
                searchBar.style.opacity = '0';
                searchBar.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    searchBar.style.transition = 'all 0.3s ease-out';
                    searchBar.style.opacity = '1';
                    searchBar.style.transform = 'scale(1)';
                    searchInput.focus();
                }, 10);
            } else {
                searchBar.style.transition = 'all 0.3s ease-out';
                searchBar.style.opacity = '0';
                searchBar.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    searchBar.classList.add('hidden');
                    searchInput.value = '';
                }, 300);
            }
        });
    }
    
    // Adiciona efeito de digitação suave no campo de busca
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.style.transform = 'scale(1.02)';
            searchInput.style.transition = 'transform 0.2s ease-out';
        });
        
        searchInput.addEventListener('blur', () => {
            searchInput.style.transform = 'scale(1)';
        });
    }

    // Executa a busca ao clicar no botão de seta
    if (searchExecute) {
        searchExecute.addEventListener('click', executeSearch);
    }

    // Executa a busca ao pressionar ENTER no campo
    if (searchInput) {
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                executeSearch();
            }
        });
    }
    
    // ------------------------------------------
    // ANIMAÇÕES DE SCROLL SUAVE
    // ------------------------------------------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos com animação de scroll
    document.querySelectorAll('.service-card, .value-item, .info-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // ------------------------------------------
    // HEADER SCROLL EFFECT
    // ------------------------------------------
    let lastScroll = 0;
    const header = document.querySelector('.main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 12px 40px rgba(10, 31, 92, 0.25)';
            } else {
                header.style.boxShadow = '0 8px 32px rgba(10, 31, 92, 0.15)';
            }
            
            lastScroll = currentScroll;
        });
    }
});