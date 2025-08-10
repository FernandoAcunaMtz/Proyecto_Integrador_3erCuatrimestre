/**
 * Chatbot para Lumina Learning
 * Integración con ChatGPT API para asistencia de navegación
 */

class LuminaChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isLoading = false;
        this.apiKey = null; // Se configurará desde el servidor
        this.init();
    }

    init() {
        this.createChatbotUI();
        this.loadChatHistory();
        this.setupEventListeners();
        this.addWelcomeMessage();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <div id="lumina-chatbot" class="lumina-chatbot">
                <!-- Chatbot Toggle Button -->
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Abrir chat de ayuda">
                    <i class="fas fa-comments"></i>
                    <span class="notification-badge" id="notification-badge" style="display: none;">1</span>
                </button>

                <!-- Chatbot Container -->
                <div id="chatbot-container" class="chatbot-container">
                    <!-- Header -->
                    <div class="chatbot-header">
                        <div class="chatbot-title">
                            <i class="fas fa-robot"></i>
                            <span>Asistente Lumina</span>
                        </div>
                        <button id="chatbot-close" class="chatbot-close" aria-label="Cerrar chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <!-- Messages Area -->
                    <div id="chatbot-messages" class="chatbot-messages">
                        <!-- Messages will be inserted here -->
                    </div>

                    <!-- Input Area -->
                    <div class="chatbot-input-area">
                        <div class="chatbot-input-container">
                            <input 
                                type="text" 
                                id="chatbot-input" 
                                class="chatbot-input" 
                                placeholder="Escribe tu pregunta sobre navegación..."
                                maxlength="500"
                            >
                            <button id="chatbot-send" class="chatbot-send" aria-label="Enviar mensaje">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <div class="chatbot-suggestions">
                            <button class="suggestion-btn" data-question="¿Dónde puedo encontrar los cursos?">
                                <i class="fas fa-book"></i> Cursos
                            </button>
                            <button class="suggestion-btn" data-question="¿Cómo me registro en un curso?">
                                <i class="fas fa-user-plus"></i> Registro
                            </button>
                            <button class="suggestion-btn" data-question="¿Dónde está mi perfil?">
                                <i class="fas fa-user"></i> Perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    setupEventListeners() {
        // Toggle chatbot
        document.getElementById('chatbot-toggle').addEventListener('click', () => {
            this.toggleChatbot();
        });

        // Close chatbot
        document.getElementById('chatbot-close').addEventListener('click', () => {
            this.closeChatbot();
        });

        // Send message
        document.getElementById('chatbot-send').addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Suggestion buttons
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.currentTarget.dataset.question;
                document.getElementById('chatbot-input').value = question;
                this.sendMessage();
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            const chatbot = document.getElementById('lumina-chatbot');
            const toggle = document.getElementById('chatbot-toggle');
            
            if (!chatbot.contains(e.target) && this.isOpen) {
                this.closeChatbot();
            }
        });
    }

    toggleChatbot() {
        if (this.isOpen) {
            this.closeChatbot();
        } else {
            this.openChatbot();
        }
    }

    openChatbot() {
        this.isOpen = true;
        document.getElementById('chatbot-container').classList.add('open');
        document.getElementById('chatbot-input').focus();
        this.hideNotification();
    }

    closeChatbot() {
        this.isOpen = false;
        document.getElementById('chatbot-container').classList.remove('open');
    }

    addWelcomeMessage() {
        const welcomeMessage = {
            type: 'bot',
            content: `¡Hola! Soy el asistente virtual de Lumina Learning. Puedo ayudarte con:

• **Navegación del sitio** - Encontrar páginas y secciones
• **Información de cursos** - Detalles, precios, contenido
• **Proceso de registro** - Cómo crear cuenta y matricularse
• **Funcionalidades** - Características de la plataforma
• **Soporte técnico** - Resolver problemas básicos

¿En qué puedo ayudarte hoy?`,
            timestamp: new Date()
        };

        this.addMessage(welcomeMessage);
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (!message || this.isLoading) return;

        // Add user message
        this.addMessage({
            type: 'user',
            content: message,
            timestamp: new Date()
        });

        input.value = '';
        this.setLoading(true);

        try {
            const response = await this.getChatbotResponse(message);
            
            this.addMessage({
                type: 'bot',
                content: response,
                timestamp: new Date()
            });

        } catch (error) {
            console.error('Error en chatbot:', error);
            
            this.addMessage({
                type: 'bot',
                content: `Lo siento, tuve un problema al procesar tu pregunta. Por favor, intenta de nuevo o contacta al soporte técnico si el problema persiste.`,
                timestamp: new Date()
            });
        } finally {
            this.setLoading(false);
        }
    }

    async getChatbotResponse(userMessage) {
        try {
            const response = await fetch('http://localhost:5503/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    currentPage: window.location.pathname,
                    userRole: this.getUserRole(),
                    chatHistory: this.messages.slice(-5) // Últimos 5 mensajes para contexto
                })
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

            const data = await response.json();
            return data.response;

        } catch (error) {
            console.error('Error al obtener respuesta del chatbot:', error);
            throw error;
        }
    }

    addMessage(message) {
        this.messages.push(message);
        
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageElement = this.createMessageElement(message);
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.saveChatHistory();
    }

    createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${message.type}-message`;
        
        const icon = message.type === 'user' ? 'fas fa-user' : 'fas fa-robot';
        const time = message.timestamp.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-header">
                    <i class="${icon}"></i>
                    <span class="message-time">${time}</span>
                </div>
                <div class="message-text">${this.formatMessage(message.content)}</div>
            </div>
        `;

        return messageDiv;
    }

    formatMessage(content) {
        // Convertir markdown básico a HTML
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/•/g, '•');
    }

    setLoading(loading) {
        this.isLoading = loading;
        const sendButton = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        
        if (loading) {
            sendButton.disabled = true;
            input.disabled = true;
            sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Add typing indicator
            this.addTypingIndicator();
        } else {
            sendButton.disabled = false;
            input.disabled = false;
            sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
            
            // Remove typing indicator
            this.removeTypingIndicator();
        }
    }

    addTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="message-header">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    getUserRole() {
        // Obtener rol del usuario desde Auth0 o localStorage
        try {
            const user = JSON.parse(localStorage.getItem('auth0_user'));
            return user?.role || 'guest';
        } catch (error) {
            return 'guest';
        }
    }

    showNotification() {
        const badge = document.getElementById('notification-badge');
        badge.style.display = 'block';
    }

    hideNotification() {
        const badge = document.getElementById('notification-badge');
        badge.style.display = 'none';
    }

    saveChatHistory() {
        try {
            localStorage.setItem('lumina_chat_history', JSON.stringify(this.messages));
        } catch (error) {
            console.error('Error al guardar historial del chat:', error);
        }
    }

    loadChatHistory() {
        try {
            const saved = localStorage.getItem('lumina_chat_history');
            if (saved) {
                const messages = JSON.parse(saved);
                // Solo cargar mensajes de la sesión actual (últimas 2 horas)
                const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
                this.messages = messages.filter(msg => 
                    new Date(msg.timestamp) > twoHoursAgo
                );
                
                // Renderizar mensajes guardados
                this.messages.forEach(msg => {
                    const messageElement = this.createMessageElement(msg);
                    document.getElementById('chatbot-messages').appendChild(messageElement);
                });
            }
        } catch (error) {
            console.error('Error al cargar historial del chat:', error);
        }
    }

    // Método para limpiar historial
    clearHistory() {
        this.messages = [];
        document.getElementById('chatbot-messages').innerHTML = '';
        localStorage.removeItem('lumina_chat_history');
        this.addWelcomeMessage();
    }
}

// Inicializar chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.luminaChatbot = new LuminaChatbot();
});

// Exportar para uso global
window.LuminaChatbot = LuminaChatbot;
