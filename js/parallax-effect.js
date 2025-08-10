// Parallax Effect - Simple y Elegante
document.addEventListener('DOMContentLoaded', () => {
    // Crear elementos parallax
    createParallaxElements();
    
    // Configurar el efecto de scroll
    setupParallaxScroll();
});

function createParallaxElements() {
    // Crear contenedor de elementos parallax
    const parallaxContainer = document.createElement('div');
    parallaxContainer.className = 'parallax-container';
    parallaxContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;
    
    // Crear elementos flotantes elegantes
    const elements = [
        { type: 'circle', size: '60px', color: 'rgba(79, 70, 229, 0.1)', x: '10%', y: '20%', speed: 0.3 },
        { type: 'circle', size: '40px', color: 'rgba(99, 102, 241, 0.08)', x: '85%', y: '30%', speed: 0.5 },
        { type: 'square', size: '30px', color: 'rgba(129, 140, 248, 0.06)', x: '20%', y: '70%', speed: 0.2 },
        { type: 'square', size: '50px', color: 'rgba(165, 180, 252, 0.05)', x: '75%', y: '80%', speed: 0.4 },
        { type: 'circle', size: '35px', color: 'rgba(199, 210, 254, 0.07)', x: '50%', y: '15%', speed: 0.6 },
        { type: 'square', size: '25px', color: 'rgba(79, 70, 229, 0.04)', x: '90%', y: '60%', speed: 0.3 },
        { type: 'circle', size: '45px', color: 'rgba(99, 102, 241, 0.06)', x: '15%', y: '85%', speed: 0.5 },
        { type: 'square', size: '55px', color: 'rgba(129, 140, 248, 0.05)', x: '60%', y: '40%', speed: 0.2 }
    ];
    
    elements.forEach((element, index) => {
        const parallaxElement = document.createElement('div');
        parallaxElement.className = 'parallax-element';
        parallaxElement.dataset.speed = element.speed;
        
        const borderRadius = element.type === 'circle' ? '50%' : '8px';
        
        parallaxElement.style.cssText = `
            position: absolute;
            width: ${element.size};
            height: ${element.size};
            background: ${element.color};
            border-radius: ${borderRadius};
            left: ${element.x};
            top: ${element.y};
            transform: translateZ(0);
            transition: transform 0.1s ease-out;
            animation: floatParallax ${8 + index * 2}s ease-in-out infinite;
            animation-delay: ${index * 0.5}s;
        `;
        
        parallaxContainer.appendChild(parallaxElement);
    });
    
    // Agregar estilos CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParallax {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.6;
            }
            25% {
                transform: translateY(-15px) rotate(90deg);
                opacity: 0.8;
            }
            50% {
                transform: translateY(-25px) rotate(180deg);
                opacity: 1;
            }
            75% {
                transform: translateY(-15px) rotate(270deg);
                opacity: 0.8;
            }
        }
        
        .parallax-container {
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }
        
        .parallax-container.visible {
            opacity: 1;
        }
        
        .main-content {
            position: relative;
            z-index: 1;
        }
    `;
    document.head.appendChild(style);
    
    // Insertar después del hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.parentNode.insertBefore(parallaxContainer, heroSection.nextSibling);
    }
}

function setupParallaxScroll() {
    let ticking = false;
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const heroSection = document.querySelector('.hero-section');
    
    if (!parallaxContainer || !heroSection) return;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        // Mostrar elementos parallax solo después del hero section
        if (scrollY > heroHeight * 0.5) {
            parallaxContainer.classList.add('visible');
        } else {
            parallaxContainer.classList.remove('visible');
        }
        
        // Aplicar efecto parallax a cada elemento
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed);
            const yPos = scrollY * speed * 0.1;
            const xPos = scrollY * speed * 0.05;
            
            element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        });
    }
    
    // Inicializar
    updateParallax();
}

// Efecto adicional de partículas sutiles
function createSubtleParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.3;
    `;
    
    // Crear partículas sutiles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'subtle-particle';
        
        const size = Math.random() * 3 + 1; // 1-4px
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 15; // 15-35s
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(79, 70, 229, 0.2);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: subtleFloat ${duration}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Agregar animación para partículas
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes subtleFloat {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Insertar después del hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.parentNode.insertBefore(particleContainer, heroSection.nextSibling);
    }
}

// Inicializar partículas sutiles
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createSubtleParticles, 1000);
});
