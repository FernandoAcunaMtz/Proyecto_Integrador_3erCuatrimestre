const axios = require('axios');

// Configuración
const SERVER_URL = 'http://localhost:5501';
const CHATBOT_URL = 'http://localhost:5502';

// Función para verificar servidor
async function verificarServidor(url, nombre) {
    try {
        const response = await axios.get(url, { timeout: 5000 });
        return { success: true, status: response.status };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Función para probar diferentes tipos de mensajes
async function probarMensajes() {
    const tests = [
        {
            name: "Saludo básico",
            message: "Hola",
            expected: "saludo"
        },
        {
            name: "Consulta sobre cursos",
            message: "¿Qué cursos tienen disponibles?",
            expected: "cursos"
        },
        {
            name: "Consulta sobre registro",
            message: "¿Cómo me registro?",
            expected: "registro"
        },
        {
            name: "Consulta sobre contacto",
            message: "¿Dónde puedo contactarlos?",
            expected: "contacto"
        }
    ];

    console.log('\n🧪 Probando diferentes tipos de mensajes...\n');
    
    for (const test of tests) {
        try {
            const response = await axios.post(`${SERVER_URL}/chatbot/chat`, {
                message: test.message,
                currentPage: "/index.html",
                userRole: "guest",
                chatHistory: []
            }, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 5000
            });
            
            console.log(`✅ ${test.name}:`);
            console.log(`   Mensaje: "${test.message}"`);
            console.log(`   Respuesta: ${response.data.response.substring(0, 80)}...`);
            console.log('');
            
        } catch (error) {
            console.log(`❌ ${test.name}: Error - ${error.message}`);
        }
    }
}

// Función para probar diferentes roles de usuario
async function probarRoles() {
    const roles = ['guest', 'estudiante', 'profesor', 'admin'];
    
    console.log('\n👥 Probando diferentes roles de usuario...\n');
    
    for (const role of roles) {
        try {
            const response = await axios.post(`${SERVER_URL}/chatbot/chat`, {
                message: "Hola",
                currentPage: "/index.html",
                userRole: role,
                chatHistory: []
            }, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 5000
            });
            
            console.log(`✅ Rol ${role}:`);
            console.log(`   Respuesta: ${response.data.response.substring(0, 80)}...`);
            console.log('');
            
        } catch (error) {
            console.log(`❌ Rol ${role}: Error - ${error.message}`);
        }
    }
}

// Función para probar diferentes páginas
async function probarPaginas() {
    const paginas = [
        { path: "/index.html", name: "Página principal" },
        { path: "/html/cursos-venta.html", name: "Página de cursos" },
        { path: "/html/blog.html", name: "Blog" },
        { path: "/html/contact.html", name: "Contacto" }
    ];
    
    console.log('\n📄 Probando contexto por página...\n');
    
    for (const pagina of paginas) {
        try {
            const response = await axios.post(`${SERVER_URL}/chatbot/chat`, {
                message: "¿Qué puedo hacer aquí?",
                currentPage: pagina.path,
                userRole: "guest",
                chatHistory: []
            }, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 5000
            });
            
            console.log(`✅ ${pagina.name}:`);
            console.log(`   Página: ${pagina.path}`);
            console.log(`   Respuesta: ${response.data.response.substring(0, 80)}...`);
            console.log('');
            
        } catch (error) {
            console.log(`❌ ${pagina.name}: Error - ${error.message}`);
        }
    }
}

// Función principal
async function verificarChatbotCompleto() {
    console.log('🚀 VERIFICACIÓN COMPLETA DEL CHATBOT');
    console.log('=====================================\n');
    
    // Verificar servidores
    console.log('🔍 Verificando servidores...');
    const servidorPrincipal = await verificarServidor(SERVER_URL, 'Servidor Principal');
    const servidorChatbot = await verificarServidor(CHATBOT_URL, 'Servidor Chatbot');
    
    if (servidorPrincipal.success) {
        console.log(`✅ Servidor Principal (${SERVER_URL}): Funcionando (Status: ${servidorPrincipal.status})`);
    } else {
        console.log(`❌ Servidor Principal: ${servidorPrincipal.error}`);
    }
    
    if (servidorChatbot.success) {
        console.log(`✅ Servidor Chatbot (${CHATBOT_URL}): Funcionando (Status: ${servidorChatbot.status})`);
    } else {
        console.log(`❌ Servidor Chatbot: ${servidorChatbot.error}`);
    }
    
    // Probar funcionalidad básica
    if (servidorPrincipal.success) {
        await probarMensajes();
        await probarRoles();
        await probarPaginas();
    }
    
    // Resumen final
    console.log('📊 RESUMEN FINAL:');
    console.log('==================');
    console.log(`Servidor Principal: ${servidorPrincipal.success ? '✅ Funcionando' : '❌ No disponible'}`);
    console.log(`Servidor Chatbot: ${servidorChatbot.success ? '✅ Funcionando' : '❌ No disponible'}`);
    
    if (servidorPrincipal.success) {
        console.log('\n🎉 ¡El chatbot está completamente operativo!');
        console.log('   Puedes usarlo desde tu aplicación web.');
    } else {
        console.log('\n🚨 El chatbot no está funcionando correctamente.');
        console.log('   Verifica que los servidores estén ejecutándose.');
    }
}

// Ejecutar verificación
verificarChatbotCompleto().catch(console.error);
