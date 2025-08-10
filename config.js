// Configuración del proyecto Lumina Learning
module.exports = {
    // Configuración del servidor del chatbot
    chatbot: {
        port: process.env.CHATBOT_PORT || 5503,
        host: process.env.CHATBOT_HOST || 'localhost'
    },
    
    // Configuración de la aplicación principal
    app: {
        port: process.env.APP_PORT || 5501,
        host: process.env.APP_HOST || 'localhost'
    },
    
    // Configuración de CORS
    cors: {
        origin: ['http://localhost:5501', 'http://127.0.0.1:5501'],
        credentials: true
    },
    
    // Configuración del sitio
    site: {
        name: "Lumina Learning",
        description: "Plataforma educativa digital con cursos en línea",
        version: "1.0.0"
    },
    
    // Configuración de desarrollo
    development: {
        debug: process.env.NODE_ENV !== 'production',
        logLevel: process.env.LOG_LEVEL || 'info'
    }
};
