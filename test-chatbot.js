const axios = require('axios');

async function testChatbot() {
    console.log('🤖 Probando el chatbot...\n');
    
    try {
        // Probar el endpoint del chatbot
        const response = await axios.post('http://localhost:5501/chatbot/chat', {
            message: "Hola, ¿cómo estás?",
            currentPage: "/index.html",
            userRole: "guest",
            chatHistory: []
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        });
        
        console.log('✅ Chatbot conectado y funcionando correctamente!');
        console.log(`📝 Respuesta: ${response.data.response}`);
        console.log('\n🎉 El chatbot está listo para usar!');
        
    } catch (error) {
        console.log('❌ Error al conectar con el chatbot:');
        if (error.response) {
            console.log(`   Status: ${error.response.status}`);
            console.log(`   Error: ${error.response.data.error || error.response.statusText}`);
        } else if (error.code === 'ECONNREFUSED') {
            console.log('   Error: No se puede conectar al servidor');
            console.log('   Asegúrate de que el servidor esté ejecutándose en el puerto 5501');
        } else {
            console.log(`   Error: ${error.message}`);
        }
    }
}

testChatbot();
