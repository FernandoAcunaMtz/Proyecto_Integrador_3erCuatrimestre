/**
 * Campus Virtual LMS - Main JavaScript File
 * Versión optimizada con solución para el carrito
 */

class CampusVirtual {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            try {
                console.log('Campus Virtual LMS inicializado');

                // Inicialización de módulos
                this.navigation = new Navigation();
                this.animations = new Animations();
                this.cart = new ShoppingCart();
                this.notifications = new NotificationSystem();
                this.forms = new FormHandler();

                // Efectos globales
                this.setupScrollEffect();
                this.updateFooterYear();

            } catch (error) {
                console.error('Error de inicialización:', error);
                this.notifications.show('Error al cargar la aplicación', 'error');
            }
        });
    }

    setupScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const updateNavbar = () => {
            const isScrolled = window.scrollY > 50;
            navbar.classList.toggle('scrolled', isScrolled);
            navbar.style.backgroundColor = isScrolled
                ? 'var(--primary-color)'
                : 'rgba(44, 62, 80, 0.7)';
            navbar.style.backdropFilter = isScrolled ? 'none' : 'blur(10px)';
        };

        updateNavbar();
        window.addEventListener('scroll', updateNavbar);
    }

    updateFooterYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
}

/**
 * Módulo de Navegación
 */
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        try {
            this.navLinks = document.querySelectorAll('.nav-link');
            this.offcanvas = document.getElementById('sidebarMenu');

            this.setupEventListeners();
        } catch (error) {
            console.error('Error en navegación:', error);
        }
    }

    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }

    handleNavClick(e) {
        this.navLinks.forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (this.offcanvas) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(this.offcanvas);
            bsOffcanvas?.hide();
        }
    }
}

/**
 * Módulo de Animaciones
 */
class Animations {
    constructor() {
        this.init();
    }

    init() {
        try {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            this.observeElements();
        } catch (error) {
            console.error('Error en animaciones:', error);
        }
    }

    observeElements() {
        document.querySelectorAll('.card, .course-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            this.observer.observe(card);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

/**
 * Módulo del Carrito de Compras (Actualizado)
 */


/**
 * Módulo de Notificaciones
 */
class NotificationSystem {
    constructor() {
        this.types = {
            'success': 'alert-success',
            'error': 'alert-danger',
            'warning': 'alert-warning',
            'info': 'alert-info'
        };
    }

    show(message, type = 'info') {
        try {
            const notification = document.createElement('div');
            notification.className = `alert ${this.types[type] || this.types.info} alert-dismissible fade show position-fixed`;
            notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
            notification.setAttribute('role', 'alert');

            notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;

            document.body.appendChild(notification);

            setTimeout(() => {
                new bootstrap.Alert(notification).close();
            }, 5000);
        } catch (error) {
            console.error('Error en notificación:', error);
        }
    }
}

/**
 * Módulo de Formularios
 */
class FormHandler {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        });
    }

    handleSubmit(e) {
        if (!this.validateForm(e.target)) {
            e.preventDefault();
            return;
        }
        new NotificationSystem().show('Formulario enviado correctamente', 'success');
    }

    validateForm(formElement) {
        let isValid = true;
        const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showValidationError(input);
                isValid = false;
            } else {
                this.clearValidationError(input);
            }
        });

        return isValid;
    }

    showValidationError(input) {
        input.classList.add('is-invalid');

        if (!input.nextElementSibling?.classList.contains('invalid-feedback')) {
            const feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            feedback.textContent = 'Este campo es obligatorio';
            input.after(feedback);
        }
    }

    clearValidationError(input) {
        input.classList.remove('is-invalid');
        const feedback = input.nextElementSibling;
        if (feedback?.classList.contains('invalid-feedback')) {
            feedback.remove();
        }
    }
}

// Inicializar la aplicación
new CampusVirtual();