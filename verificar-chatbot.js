const axios = require('axios');

// Configuración de URLs
const SERVER_URL = 'http://localhost:5501';
const CHATBOT_URL = 'http://localhost:5502';
const CHATBOT_ENDPOINT = `${SERVER_URL}/chatbot/chat`;

// Función para verificar si un servidor está respondiendo
async function verificarServidor(url, nombre) {
    try {
        console.log(`🔍 Verificando ${nombre} en ${url}...`);
        const response = await axios.get(url, { timeout: 5000 });
        console.log(`✅ ${nombre} está funcionando correctamente`);
        console.log(`   Status: ${response.status}`);
        return true;
    } catch (error) {
        console.log(`❌ ${nombre} no está respondiendo`);
        if (error.code === 'ECONNREFUSED') {
            console.log(`   Error: Conexión rechazada - El servidor no está ejecutándose`);
        } else if (error.code === 'ENOTFOUND') {
            console.log(`   Error: No se puede encontrar el host`);
        } else {
            console.log(`   Error: ${error.message}`);
        }
        return false;
    }
}

// Función para probar el endpoint del chatbot
async function probarChatbot() {
    try {
        console.log(`\n🤖 Probando endpoint del chatbot...`);
        
        const testMessage = {
            message: "Hola, ¿cómo estás?",
            currentPage: "/index.html",
            userRole: "guest",
            chatHistory: []
        };

        const response = await axios.post(CHATBOT_ENDPOINT, testMessage, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000
        });

        console.log(`✅ Chatbot responde correctamente`);
        console.log(`   Status: ${response.status}`);
        console.log(`   Respuesta: ${response.data.response.substring(0, 100)}...`);
        
        return true;
    } catch (error) {
        console.log(`❌ Error al probar el chatbot`);
        if (error.response) {
            console.log(`   Status: ${error.response.status}`);
            console.log(`   Error: ${error.response.data.error || error.response.statusText}`);
        } else {
            console.log(`   Error: ${error.message}`);
        }
        return false;
    }
}

// Función principal
async function verificarChatbot() {
    console.log('🚀 Iniciando verificación del chatbot...\n');
    
    // Verificar servidor principal
    const servidorPrincipal = await verificarServidor(SERVER_URL, 'Servidor Principal');
    
    // Verificar servidor del chatbot (si está separado)
    const servidorChatbot = await verificarServidor(CHATBOT_URL, 'Servidor del Chatbot');
    
    // Probar endpoint del chatbot
    const chatbotFunciona = await probarChatbot();
    
    // Resumen
    console.log('\n📊 RESUMEN DE VERIFICACIÓN:');
    console.log('========================');
    console.log(`Servidor Principal (5501): ${servidorPrincipal ? '✅ Funcionando' : '❌ No disponible'}`);
    console.log(`Servidor Chatbot (5502): ${servidorChatbot ? '✅ Funcionando' : '❌ No disponible'}`);
    console.log(`Endpoint Chatbot: ${chatbotFunciona ? '✅ Funcionando' : '❌ No disponible'}`);
    
    if (servidorPrincipal && chatbotFunciona) {
        console.log('\n🎉 ¡El chatbot está completamente conectado y funcionando!');
    } else if (servidorPrincipal && !chatbotFunciona) {
        console.log('\n⚠️  El servidor principal funciona pero el chatbot tiene problemas');
        console.log('   Recomendación: Verificar la configuración del chatbot');
    } else {
        console.log('\n🚨 El chatbot no está funcionando correctamente');
        console.log('   Recomendación: Iniciar los servidores necesarios');
    }
}

// Ejecutar verificación
verificarChatbot().catch(console.error);
