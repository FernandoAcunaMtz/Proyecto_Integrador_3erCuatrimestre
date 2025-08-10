// ==================== //
// FUNCIONALIDAD DE LA PÁGINA DE VENTA DE CURSOS
// ==================== //

document.addEventListener('DOMContentLoaded', function () {
    // Actualizar año en el footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Datos de los cursos
    const coursesData = {
        1: {
            id: 1,
            title: "Desarrollo Web Full Stack",
            subtitle: "De principiante a experto",
            instructor: "Carlos Rodríguez",
            duration: "120 horas",
            level: "Intermedio",
            description: "Aprende a crear aplicaciones web completas con las tecnologías más demandadas del mercado: HTML, CSS, JavaScript, React, Node.js y más.",
            features: ["Certificado", "50+ videos", "Proyectos prácticos"],
            originalPrice: 799,
            currentPrice: 599,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "programacion",
            popularity: 95
        },
        2: {
            id: 2,
            title: "Marketing Digital Avanzado",
            subtitle: "Estrategias del mundo digital",
            instructor: "Ana Martínez",
            duration: "80 horas",
            level: "Avanzado",
            description: "Domina las últimas estrategias de marketing digital, SEO, redes sociales, email marketing y análisis de datos para posicionar tu marca.",
            features: ["Certificado", "35+ videos", "Casos de estudio"],
            originalPrice: 649,
            currentPrice: 499,
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "marketing",
            popularity: 88
        },
        3: {
            id: 3,
            title: "Inversiones Financieras",
            subtitle: "Gestión de portafolios",
            instructor: "Roberto Silva",
            duration: "60 horas",
            level: "Principiante",
            description: "Aprende a invertir de manera inteligente y haz crecer tu capital con estrategias comprobadas de gestión de riesgos y diversificación.",
            features: ["Certificado", "25+ videos", "Herramientas"],
            originalPrice: 399,
            currentPrice: 399,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "finanzas",
            popularity: 82
        },
        4: {
            id: 4,
            title: "Meta-finance®",
            subtitle: "Estrategias avanzadas",
            instructor: "Dr. Elena Vargas",
            duration: "100 horas",
            level: "Avanzado",
            description: "Descubre el revolucionario método Meta-finance® para maximizar tus ganancias financieras con estrategias de trading avanzadas.",
            features: ["Certificado", "40+ videos", "Comunidad VIP"],
            originalPrice: 899,
            currentPrice: 699,
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "finanzas",
            popularity: 90
        },
        5: {
            id: 5,
            title: "Diseño UX/UI",
            subtitle: "Experiencia de usuario",
            instructor: "María González",
            duration: "90 horas",
            level: "Intermedio",
            description: "Aprende a crear interfaces intuitivas y experiencias de usuario excepcionales con las mejores prácticas de UX/UI design.",
            features: ["Certificado", "30+ videos", "Portfolio"],
            originalPrice: 549,
            currentPrice: 449,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "diseno",
            popularity: 85
        },
        6: {
            id: 6,
            title: "Python para Data Science",
            subtitle: "Análisis de datos",
            instructor: "Dr. Luis Mendoza",
            duration: "110 horas",
            level: "Intermedio",
            description: "Domina Python para análisis de datos, machine learning y visualización con pandas, numpy, matplotlib y scikit-learn.",
            features: ["Certificado", "45+ videos", "Datasets reales"],
            originalPrice: 699,
            currentPrice: 549,
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "programacion",
            popularity: 92
        }
    };

    // Sistema de Carrito de Compras
    const cart = {
        items: [],
        total: 0,

        addItem: function (course) {
            const existingItem = this.items.find(item => item.id === course.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({
                    id: course.id,
                    title: course.title,
                    price: course.currentPrice,
                    image: course.image,
                    quantity: 1
                });
            }

            this.calculateTotal();
            this.updateUI();
            this.saveToLocalStorage();

            // Mostrar notificación
            this.showToast();
        },

        removeItem: function (id) {
            this.items = this.items.filter(item => item.id !== id);
            this.calculateTotal();
            this.updateUI();
            this.saveToLocalStorage();
        },

        updateQuantity: function (id, quantity) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                if (quantity <= 0) {
                    this.removeItem(id);
                } else {
                    item.quantity = quantity;
                    this.calculateTotal();
                    this.updateUI();
                    this.saveToLocalStorage();
                }
            }
        },

        calculateTotal: function () {
            this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },

        updateUI: function () {
            // Actualizar contador
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = totalItems;

            // Actualizar lista de items
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';

            if (this.items.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-muted text-center py-2 mb-0">Tu carrito está vacío</p>';
            } else {
                this.items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item d-flex justify-content-between align-items-center py-2';
                    itemElement.innerHTML = `
                        <img src="${item.image}" class="cart-item-img rounded" width="40" height="40" alt="${item.title}">
                        <div class="flex-grow-1 mx-3">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-sm btn-outline-secondary quantity-btn" data-id="${item.id}" data-action="decrease" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="btn btn-sm btn-outline-secondary quantity-btn" data-id="${item.id}" data-action="increase" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                                <small class="text-muted">$${item.price.toFixed(2)}</small>
                            </div>
                        </div>
                        <span class="cart-item-price fw-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="btn btn-sm btn-outline-danger remove-item ms-2" data-id="${item.id}" aria-label="Eliminar" onclick="cart.removeItem(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                });
            }

            // Actualizar subtotal
            document.getElementById('cartSubtotal').textContent = `$${this.total.toFixed(2)}`;
        },

        showToast: function () {
            const toast = new bootstrap.Toast(document.getElementById('addedToCartToast'));
            toast.show();
        },

        saveToLocalStorage: function () {
            localStorage.setItem('shoppingCart', JSON.stringify(this.items));
        },

        loadFromLocalStorage: function () {
            const savedCart = localStorage.getItem('shoppingCart');
            if (savedCart) {
                this.items = JSON.parse(savedCart);
                this.calculateTotal();
                this.updateUI();
            }
        },

        init: function () {
            this.loadFromLocalStorage();

            // Función temporal para limpiar localStorage (ejecutar en consola: cart.clearStorage())
            this.clearStorage = function() {
                localStorage.removeItem('shoppingCart');
                this.items = [];
                this.total = 0;
                this.updateUI();
                console.log('Carrito limpiado');
            };

            // Delegación de eventos para los botones del carrito (mantener como respaldo)
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const removeButton = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
                    const itemId = removeButton.getAttribute('data-id');
                    if (itemId) {
                        this.removeItem(parseInt(itemId));
                    }
                } else if (e.target.classList.contains('quantity-btn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const id = e.target.getAttribute('data-id');
                    const action = e.target.getAttribute('data-action');
                    const item = this.items.find(item => item.id == id);
                    
                    if (item) {
                        const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
                        this.updateQuantity(id, newQuantity);
                    }
                }
            });
        }
    };

    // Sistema de Filtros
    const filterSystem = {
        currentFilter: 'all',
        currentSort: 'default',

        init: function () {
            // Eventos de filtros
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const filter = e.target.getAttribute('data-filter');
                    this.setFilter(filter);
                });
            });

            // Evento de ordenamiento
            document.getElementById('sortSelect').addEventListener('change', (e) => {
                const sort = e.target.value;
                this.setSort(sort);
            });
        },

        setFilter: function (filter) {
            this.currentFilter = filter;
            
            // Actualizar botones activos
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === filter) {
                    btn.classList.add('active');
                }
            });

            this.applyFilters();
        },

        setSort: function (sort) {
            this.currentSort = sort;
            this.applyFilters();
        },

        applyFilters: function () {
            const courseCards = document.querySelectorAll('[data-category]');
            
            courseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const shouldShow = this.currentFilter === 'all' || category === this.currentFilter;
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });

            // Aplicar ordenamiento
            this.sortCourses();
        },

        sortCourses: function () {
            const coursesGrid = document.getElementById('coursesGrid');
            const courseCards = Array.from(coursesGrid.children);

            courseCards.sort((a, b) => {
                const courseA = coursesData[a.querySelector('.course-card').getAttribute('data-id')];
                const courseB = coursesData[b.querySelector('.course-card').getAttribute('data-id')];

                if (!courseA || !courseB) return 0;

                switch (this.currentSort) {
                    case 'price-low':
                        return courseA.currentPrice - courseB.currentPrice;
                    case 'price-high':
                        return courseB.currentPrice - courseA.currentPrice;
                    case 'duration':
                        return parseInt(courseA.duration) - parseInt(courseB.duration);
                    case 'popularity':
                        return courseB.popularity - courseA.popularity;
                    default:
                        return 0;
                }
            });

            // Reordenar elementos en el DOM
            courseCards.forEach(card => {
                coursesGrid.appendChild(card);
            });
        }
    };

    // Sistema de Búsqueda
    const searchSystem = {
        init: function () {
            const searchInput = document.getElementById('courseSearch');
            let searchTimeout;

            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performSearch(e.target.value);
                }, 300);
            });
        },

        performSearch: function (query) {
            const courseCards = document.querySelectorAll('[data-category]');
            const searchTerm = query.toLowerCase().trim();

            courseCards.forEach(card => {
                const courseCard = card.querySelector('.course-card');
                const courseId = courseCard.getAttribute('data-id');
                const course = coursesData[courseId];

                if (!course) return;

                const searchableText = `${course.title} ${course.subtitle} ${course.instructor} ${course.description}`.toLowerCase();
                const matches = searchableText.includes(searchTerm);

                if (matches || searchTerm === '') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    };

    // Sistema de Modal de Vista Previa
    const modalSystem = {
        currentCourseId: null,

        init: function () {
            // Eventos para botones de vista previa
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('quick-view-btn')) {
                    const courseId = e.target.getAttribute('data-course-id');
                    this.showModal(courseId);
                }
            });

            // Evento para añadir al carrito desde el modal
            document.getElementById('addToCartFromModal').addEventListener('click', () => {
                if (this.currentCourseId) {
                    const course = coursesData[this.currentCourseId];
                    if (course) {
                        cart.addItem(course);
                        this.hideModal();
                    }
                }
            });
        },

        showModal: function (courseId) {
            const course = coursesData[courseId];
            if (!course) return;

            this.currentCourseId = courseId;
            const modalContent = document.getElementById('coursePreviewContent');

            modalContent.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="${course.image}" class="img-fluid rounded" alt="${course.title}">
                    </div>
                    <div class="col-md-6">
                        <h4 class="fw-bold mb-3">${course.title}</h4>
                        <p class="text-muted mb-3">${course.subtitle}</p>
                        
                        <div class="course-details mb-4">
                            <div class="row">
                                <div class="col-6">
                                    <p><strong><i class="fas fa-user text-primary me-2"></i>Instructor:</strong></p>
                                    <p class="text-muted">${course.instructor}</p>
                                </div>
                                <div class="col-6">
                                    <p><strong><i class="fas fa-clock text-primary me-2"></i>Duración:</strong></p>
                                    <p class="text-muted">${course.duration}</p>
                                </div>
                                <div class="col-6">
                                    <p><strong><i class="fas fa-signal text-primary me-2"></i>Nivel:</strong></p>
                                    <p class="text-muted">${course.level}</p>
                                </div>
                                <div class="col-6">
                                    <p><strong><i class="fas fa-star text-primary me-2"></i>Popularidad:</strong></p>
                                    <p class="text-muted">${course.popularity}%</p>
                                </div>
                            </div>
                        </div>

                        <div class="course-description mb-4">
                            <h6 class="fw-bold">Descripción:</h6>
                            <p>${course.description}</p>
                        </div>

                        <div class="course-features mb-4">
                            <h6 class="fw-bold">Características:</h6>
                            <ul class="list-unstyled">
                                ${course.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="course-pricing">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                ${course.originalPrice !== course.currentPrice ? 
                                    `<span class="text-muted text-decoration-line-through">$${course.originalPrice}</span>` : ''
                                }
                                <span class="h3 text-success fw-bold mb-0">$${course.currentPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const modal = new bootstrap.Modal(document.getElementById('coursePreviewModal'));
            modal.show();
        },

        hideModal: function () {
            const modal = bootstrap.Modal.getInstance(document.getElementById('coursePreviewModal'));
            if (modal) {
                modal.hide();
            }
        }
    };

    // Sistema de Animaciones y Efectos
    const animationSystem = {
        init: function () {
            // Efecto de navbar al hacer scroll
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                window.addEventListener('scroll', function () {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
            }

            // Animación de entrada para las tarjetas
            this.animateCardsOnScroll();
        },

        animateCardsOnScroll: function () {
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

            document.querySelectorAll('.course-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        }
    };

    // Manejar clic en botones "Añadir al Carrito"
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();

            const courseCard = e.target.closest('.course-card');
            const courseId = courseCard.getAttribute('data-id');
            const course = coursesData[courseId];

            if (course) {
                cart.addItem(course);

                // Animación de confirmación
                const originalText = e.target.innerHTML;
                e.target.innerHTML = '<i class="fas fa-check me-2"></i>Añadido';
                e.target.classList.remove('btn-primary');
                e.target.classList.add('btn-success', 'added');

                setTimeout(() => {
                    e.target.innerHTML = originalText;
                    e.target.classList.remove('btn-success', 'added');
                    e.target.classList.add('btn-primary');
                }, 2000);
            }
        }
    });

    // Inicializar todos los sistemas
    cart.init();
    filterSystem.init();
    searchSystem.init();
    modalSystem.init();
    animationSystem.init();

    // Efecto de carga inicial
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
