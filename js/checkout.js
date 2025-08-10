document.addEventListener('DOMContentLoaded', function() {
    // Datos de los cursos para mostrar información en el resumen
    const coursesData = {
        1: {
            id: 1,
            title: "Desarrollo Web Full Stack",
            subtitle: "HTML, CSS, JavaScript, React",
            instructor: "Ana García",
            duration: "120 horas",
            level: "Principiante",
            description: "Aprende desarrollo web completo desde cero hasta crear aplicaciones modernas.",
            features: ["Certificado", "50+ videos", "Proyectos prácticos"],
            originalPrice: 799,
            currentPrice: 599,
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "programacion",
            popularity: 95
        },
        2: {
            id: 2,
            title: "Marketing Digital Avanzado",
            subtitle: "SEO, SEM, Redes Sociales",
            instructor: "Carlos Rodríguez",
            duration: "80 horas",
            level: "Intermedio",
            description: "Domina las estrategias de marketing digital para hacer crecer tu negocio.",
            features: ["Certificado", "35+ videos", "Casos de estudio"],
            originalPrice: 649,
            currentPrice: 499,
            image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "marketing",
            popularity: 88
        },
        3: {
            id: 3,
            title: "Diseño UX/UI Profesional",
            subtitle: "Figma, Adobe XD, Prototipado",
            instructor: "María López",
            duration: "100 horas",
            level: "Intermedio",
            description: "Crea experiencias de usuario excepcionales con las mejores herramientas de diseño.",
            features: ["Certificado", "40+ videos", "Kit de recursos"],
            originalPrice: 749,
            currentPrice: 549,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "diseno",
            popularity: 92
        },
        4: {
            id: 4,
            title: "Data Science con Python",
            subtitle: "Machine Learning, Análisis de Datos",
            instructor: "Dr. Roberto Silva",
            duration: "150 horas",
            level: "Avanzado",
            description: "Sumérgete en el mundo de la ciencia de datos y machine learning con Python.",
            features: ["Certificado", "60+ videos", "Datasets reales"],
            originalPrice: 899,
            currentPrice: 699,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "programacion",
            popularity: 90
        },
        5: {
            id: 5,
            title: "Fotografía Digital Profesional",
            subtitle: "Composición, Edición, Iluminación",
            instructor: "Sofia Martínez",
            duration: "90 horas",
            level: "Principiante",
            description: "Captura momentos increíbles y domina las técnicas de edición profesional.",
            features: ["Certificado", "45+ videos", "Presets gratuitos"],
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

    // Sistema de Checkout
    const checkout = {
        cart: [],
        subtotal: 0,
        taxes: 0,
        total: 0,
        taxRate: 0.16, // 16% IVA

        init: function() {
            this.loadCart();
            this.setupFormValidation();
            this.setupInputFormatting();
            this.updateOrderSummary();
            this.setupProcessOrder();
        },

        loadCart: function() {
            const savedCart = localStorage.getItem('shoppingCart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
                this.calculateTotals();
            } else {
                // Si no hay carrito, redirigir a la página de cursos
                window.location.href = 'cursos-venta.html';
            }
        },

        calculateTotals: function() {
            this.subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            this.taxes = this.subtotal * this.taxRate;
            this.total = this.subtotal + this.taxes;
        },

        updateOrderSummary: function() {
            const orderItemsContainer = document.getElementById('orderItems');
            const summarySubtotal = document.getElementById('summarySubtotal');
            const summaryTaxes = document.getElementById('summaryTaxes');
            const summaryTotal = document.getElementById('summaryTotal');

            // Limpiar contenedor
            orderItemsContainer.innerHTML = '';

            if (this.cart.length === 0) {
                orderItemsContainer.innerHTML = '<p class="text-muted text-center py-3">No hay items en el carrito</p>';
                return;
            }

            // Agregar items
            this.cart.forEach(item => {
                const courseData = coursesData[item.id];
                if (courseData) {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'summary-item';
                    itemElement.innerHTML = `
                        <img src="${item.image}" class="summary-item-img" alt="${courseData.title}">
                        <div class="summary-item-details">
                            <div class="summary-item-title">${courseData.title}</div>
                            <div class="summary-item-price">
                                $${item.price.toFixed(2)}
                                <span class="summary-item-quantity">x${item.quantity}</span>
                            </div>
                        </div>
                    `;
                    orderItemsContainer.appendChild(itemElement);
                }
            });

            // Actualizar totales
            summarySubtotal.textContent = `$${this.subtotal.toFixed(2)}`;
            summaryTaxes.textContent = `$${this.taxes.toFixed(2)}`;
            summaryTotal.textContent = `$${this.total.toFixed(2)}`;
        },

        setupFormValidation: function() {
            const form = document.querySelector('.checkout-form-container');
            const processBtn = document.getElementById('processOrderBtn');
            const requiredFields = form.querySelectorAll('[required]');

            // Función para verificar si todos los campos requeridos están completos
            const checkFormValidity = () => {
                const isValid = Array.from(requiredFields).every(field => {
                    if (field.type === 'checkbox') {
                        return field.checked;
                    }
                    return field.value.trim() !== '';
                });

                processBtn.disabled = !isValid;
                return isValid;
            };

            // Event listeners para validación en tiempo real
            requiredFields.forEach(field => {
                field.addEventListener('input', checkFormValidity);
                field.addEventListener('change', checkFormValidity);
                field.addEventListener('blur', () => this.validateField(field));
            });

            // Validación inicial
            checkFormValidity();
        },

        validateField: function(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';

            // Remover clases de validación previas
            field.classList.remove('is-valid', 'is-invalid');

            // Validaciones específicas por tipo de campo
            switch (field.id) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    isValid = emailRegex.test(value);
                    errorMessage = 'Por favor ingresa un email válido';
                    break;

                case 'cardNumber':
                    const cardNumber = value.replace(/\s/g, '');
                    isValid = /^\d{16}$/.test(cardNumber);
                    errorMessage = 'El número de tarjeta debe tener 16 dígitos';
                    break;

                case 'expiryDate':
                    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
                    isValid = expiryRegex.test(value);
                    if (isValid) {
                        const [month, year] = value.split('/');
                        const currentDate = new Date();
                        const currentYear = currentDate.getFullYear() % 100;
                        const currentMonth = currentDate.getMonth() + 1;
                        
                        if (parseInt(year) < currentYear || 
                            (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
                            isValid = false;
                            errorMessage = 'La fecha de vencimiento debe ser futura';
                        }
                    } else {
                        errorMessage = 'Formato: MM/AA';
                    }
                    break;

                case 'cvv':
                    isValid = /^\d{3,4}$/.test(value);
                    errorMessage = 'El CVV debe tener 3 o 4 dígitos';
                    break;

                case 'phone':
                    if (value) {
                        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                        isValid = phoneRegex.test(value);
                        errorMessage = 'Ingresa un número de teléfono válido';
                    }
                    break;

                case 'zipCode':
                    const zipRegex = /^\d{5}$/;
                    isValid = zipRegex.test(value);
                    errorMessage = 'El código postal debe tener 5 dígitos';
                    break;

                default:
                    if (field.required && !value) {
                        isValid = false;
                        errorMessage = 'Este campo es requerido';
                    }
            }

            // Aplicar clases de validación
            if (isValid && value) {
                field.classList.add('is-valid');
            } else if (!isValid && value) {
                field.classList.add('is-invalid');
            }

            // Mostrar/ocultar mensaje de error
            this.showFieldError(field, errorMessage, !isValid && value);
        },

        showFieldError: function(field, message, show) {
            // Remover mensaje de error previo
            const existingError = field.parentNode.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }

            if (show) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message text-danger mt-1';
                errorDiv.style.fontSize = '0.8rem';
                errorDiv.textContent = message;
                field.parentNode.appendChild(errorDiv);
            }
        },

        setupInputFormatting: function() {
            // Formatear número de tarjeta
            const cardNumberInput = document.getElementById('cardNumber');
            cardNumberInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '');
                value = value.replace(/\D/g, '');
                value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                e.target.value = value.substring(0, 19);
            });

            // Formatear fecha de vencimiento
            const expiryInput = document.getElementById('expiryDate');
            expiryInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });

            // Formatear CVV
            const cvvInput = document.getElementById('cvv');
            cvvInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });

            // Formatear código postal
            const zipInput = document.getElementById('zipCode');
            zipInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        },

        setupProcessOrder: function() {
            const processBtn = document.getElementById('processOrderBtn');
            
            processBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (this.validateForm()) {
                    this.processOrder();
                }
            });
        },

        validateForm: function() {
            const requiredFields = document.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                this.validateField(field);
                if (field.classList.contains('is-invalid')) {
                    isValid = false;
                }
            });

            return isValid;
        },

        processOrder: function() {
            const processBtn = document.getElementById('processOrderBtn');
            const originalText = processBtn.innerHTML;

            // Mostrar estado de procesamiento
            processBtn.classList.add('processing');
            processBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Procesando...';
            processBtn.disabled = true;

            // Simular procesamiento de pago
            setTimeout(() => {
                // Simular éxito (en un caso real, aquí iría la lógica de pago)
                this.showSuccessMessage();
                
                // Limpiar carrito
                localStorage.removeItem('shoppingCart');
                
                // Redirigir después de mostrar el mensaje
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 3000);
                
            }, 2000);
        },

        showSuccessMessage: function() {
            const toast = new bootstrap.Toast(document.getElementById('checkoutToast'));
            toast.show();
            
            // Actualizar mensaje del toast
            const toastBody = document.querySelector('#checkoutToast .toast-body');
            toastBody.textContent = `¡Pedido procesado exitosamente! Total: $${this.total.toFixed(2)}`;
            
            // Agregar animación de éxito
            document.querySelector('.order-summary').classList.add('success-animation');
        }
    };

    // Sistema de Carrito (para el navbar)
    const cart = {
        items: [],
        total: 0,

        init: function() {
            this.loadFromLocalStorage();
            this.updateUI();
        },

        loadFromLocalStorage: function() {
            const savedCart = localStorage.getItem('shoppingCart');
            if (savedCart) {
                this.items = JSON.parse(savedCart);
                this.calculateTotal();
            }
        },

        calculateTotal: function() {
            this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },

        removeItem: function(id) {
            // Convertir id a string para comparación consistente
            const itemId = String(id);
            this.items = this.items.filter(item => String(item.id) !== itemId);
            this.calculateTotal();
            this.updateUI();
            this.saveToLocalStorage();
        },

        updateUI: function() {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = totalItems;

            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';

            if (this.items.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-muted text-center py-2 mb-0">Tu carrito está vacío</p>';
            } else {
                this.items.forEach(item => {
                    const courseData = coursesData[item.id];
                    if (courseData) {
                        const itemElement = document.createElement('div');
                        itemElement.className = 'cart-item d-flex justify-content-between align-items-center py-2';
                        itemElement.innerHTML = `
                            <img src="${item.image}" class="cart-item-img rounded" width="40" height="40" alt="${courseData.title}">
                            <div class="flex-grow-1 mx-3">
                                <div class="cart-item-title">${courseData.title}</div>
                                <div class="d-flex align-items-center gap-2">
                                    <small class="text-muted">$${item.price.toFixed(2)}</small>
                                    <span class="badge bg-secondary">x${item.quantity}</span>
                                </div>
                            </div>
                            <span class="cart-item-price fw-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                            <button class="btn btn-sm btn-outline-danger remove-item ms-2" data-id="${item.id}" aria-label="Eliminar">
                                &times;
                            </button>
                        `;
                        cartItemsContainer.appendChild(itemElement);
                    }
                });
            }

            document.getElementById('cartSubtotal').textContent = `$${this.total.toFixed(2)}`;
        },

        saveToLocalStorage: function() {
            localStorage.setItem('shoppingCart', JSON.stringify(this.items));
        }
    };

    // Inicializar sistemas
    checkout.init();
    cart.init();

    // Delegación de eventos para los botones de eliminar del carrito
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            e.preventDefault();
            e.stopPropagation();
            const itemId = e.target.getAttribute('data-id');
            if (itemId) {
                cart.removeItem(itemId);
            }
        }
    });
});
