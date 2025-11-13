// JavaScript para animações da página Home

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // ANIMAÇÃO DE CONTAGEM DOS NÚMEROS (COUNTER)
    // ------------------------------------------
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const steps = 60; // Número de steps
        const increment = target / steps;
        let current = start;
        let step = 0;

        const updateCounter = () => {
            step++;
            current = (target / steps) * step;
            
            if (step <= steps) {
                element.textContent = Math.floor(current);
                setTimeout(updateCounter, duration / steps);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    // Observa quando os elementos entram na viewport
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                
                if (target !== null && !isNaN(target) && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    // Pequeno delay para garantir que está visível
                    setTimeout(() => {
                        animateCounter(statNumber, target, 2000);
                    }, 300);
                }
            }
        });
    }, observerOptions);

    // Função para inicializar animação dos números
    const initStatsAnimation = () => {
        const heroStats = document.querySelectorAll('.hero-stat-item .stat-number[data-target]');
        
        if (heroStats.length > 0) {
            heroStats.forEach(stat => {
                // Verifica se já está visível na tela
                const rect = stat.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible && !stat.classList.contains('animated')) {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target !== null && !isNaN(target)) {
                        stat.classList.add('animated');
                        setTimeout(() => {
                            animateCounter(stat, target, 2000);
                        }, 500);
                    }
                } else {
                    // Se não estiver visível, observa
                    statsObserver.observe(stat);
                }
            });
        } else {
            // Se não encontrar, tenta novamente após um pequeno delay
            setTimeout(initStatsAnimation, 500);
        }
    };

    // Inicializa a animação
    initStatsAnimation();
    
    // Também observa para quando o usuário rolar até a seção
    document.querySelectorAll('.hero-stat-item .stat-number[data-target]').forEach(stat => {
        statsObserver.observe(stat);
    });

    // ------------------------------------------
    // ANIMAÇÃO DE SCROLL PARA ELEMENTOS
    // ------------------------------------------
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Anima elementos ao entrar na viewport
    document.querySelectorAll('.service-item, .stat-card, .mission-text-large, .mission-text-small').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // ------------------------------------------
    // EFEITO PARALLAX NO HERO (OPCIONAL)
    // ------------------------------------------
    const heroSection = document.querySelector('.hero-home-background');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // ------------------------------------------
    // ANIMAÇÃO DE TEXTO TIPOWRITER (OPCIONAL)
    // ------------------------------------------
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        typeWriter();
    });
});

