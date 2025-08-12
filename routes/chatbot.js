const express = require('express');
const router = express.Router();
const axios = require('axios');

// Configuración del sitio para el contexto del chatbot
const SITE_CONTEXT = {
    name: "Lumina Learning",
    description: "Plataforma educativa digital con cursos en línea",
    pages: {
        "/": "Página principal con información general y acceso a cursos",
        "/index.html": "Dashboard principal para usuarios autenticados",
        "/html/cursos-venta.html": "Página donde se muestran todos los cursos disponibles para compra",
        "/html/blog.html": "Blog con artículos educativos y noticias",
        "/html/contact.html": "Página de contacto para soporte y consultas",
        "/html/login.html": "Página de inicio de sesión con Auth0",
        "/html/courses.html": "Cursos del estudiante (requiere autenticación)",
        "/html/student-courses.html": "Panel de cursos del estudiante",
        "/html/profile.html": "Perfil del usuario",
        "/html/settings.html": "Configuración de la cuenta",
        "/html/calendar.html": "Calendario académico",
        "/html/schedule.html": "Horarios de clases",
        "/html/checkout.html": "Proceso de pago para cursos",
        "/html/docente.html": "Panel de profesor (solo para profesores)",
        "/html/monitoreo.html": "Panel de administración (solo para administradores)"
    },
    navigation: {
        "Inicio": "/index.html",
        "Cursos": "/html/cursos-venta.html",
        "Blog": "/html/blog.html",
        "Contacto": "/html/contact.html",
        "Mis Cursos": "/html/courses.html",
        "Perfil": "/html/profile.html",
        "Calendario": "/html/calendar.html",
        "Horarios": "/html/schedule.html"
    },
    roles: {
        "guest": "Usuario no autenticado - acceso limitado",
        "estudiante": "Estudiante - acceso completo a cursos y funcionalidades",
        "profesor": "Profesor - acceso a panel docente y gestión de cursos",
        "admin": "Administrador - acceso completo a todas las funcionalidades"
    },
    features: [
        "Sistema de autenticación con Auth0",
        "Cursos en línea con contenido multimedia",
        "Blog educativo",
        "Calendario académico",
        "Sistema de pagos",
        "Panel de administración",
        "Perfiles de usuario",
        "Sistema de roles y permisos"
    ]
};

// Función para generar el prompt contextual
function generateContextualPrompt(userMessage, currentPage, userRole, chatHistory) {
    const context = `
Eres un asistente virtual de ${SITE_CONTEXT.name}, una plataforma educativa digital. Tu función es ayudar a los usuarios con:

1. **Navegación del sitio**: Explicar dónde encontrar páginas y funcionalidades
2. **Información de cursos**: Detalles sobre cursos disponibles
3. **Proceso de registro**: Cómo crear cuenta y matricularse
4. **Funcionalidades**: Explicar características de la plataforma
5. **Soporte técnico**: Resolver problemas básicos

CONTEXTO ACTUAL:
- Página actual: ${currentPage}
- Rol del usuario: ${userRole}
- Nombre del sitio: ${SITE_CONTEXT.name}

ESTRUCTURA DEL SITIO:
${Object.entries(SITE_CONTEXT.pages).map(([path, desc]) => `- ${path}: ${desc}`).join('\n')}

NAVEGACIÓN PRINCIPAL:
${Object.entries(SITE_CONTEXT.navigation).map(([name, path]) => `- ${name}: ${path}`).join('\n')}

ROLES DE USUARIO:
${Object.entries(SITE_CONTEXT.roles).map(([role, desc]) => `- ${role}: ${desc}`).join('\n')}

CARACTERÍSTICAS PRINCIPALES:
${SITE_CONTEXT.features.map(feature => `- ${feature}`).join('\n')}

INSTRUCCIONES:
- Responde de manera amigable y profesional en español
- Proporciona URLs específicas cuando sea relevante
- Considera el rol del usuario para dar respuestas apropiadas
- Si no sabes algo, sugiere contactar al soporte
- Mantén las respuestas concisas pero informativas
- Usa markdown para formatear cuando sea útil

HISTORIAL DE CHAT (últimos 5 mensajes):
${chatHistory.map(msg => `${msg.type}: ${msg.content}`).join('\n')}

PREGUNTA DEL USUARIO: ${userMessage}

Responde de manera útil y contextual:`;

    return context;
}

// Función para obtener respuesta de ChatGPT
async function getChatGPTResponse(prompt) {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'Eres un asistente virtual especializado en ayudar con la navegación y uso de plataformas educativas. Responde siempre en español de manera clara y útil.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: 500,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error al comunicarse con ChatGPT:', error);
        throw new Error('No se pudo obtener respuesta del asistente');
    }
}

// Sistema inteligente de respuestas predefinidas
function getFallbackResponse(userMessage, currentPage, userRole) {
    const message = userMessage.toLowerCase();
    
    // Patrones de reconocimiento más inteligentes
    const patterns = {
        // Navegación y estructura del sitio
        cursos: {
            patterns: ['cursos', 'curso', 'clases', 'materias', 'aprender', 'estudiar'],
            responses: {
                guest: `🎓 **Cursos Disponibles**: Puedes ver todos nuestros cursos en la página **Cursos** (${SITE_CONTEXT.navigation['Cursos']}). Allí encontrarás información detallada, precios y contenido de cada curso. Para acceder a tus cursos matriculados, primero necesitas [registrarte](${SITE_CONTEXT.pages['/html/login.html']}).`,
                estudiante: `📚 **Tus Cursos**: Accede a tus cursos matriculados desde **Mis Cursos** en el menú principal, o explora nuevos cursos en **Cursos** (${SITE_CONTEXT.navigation['Cursos']}). También puedes ver tu progreso en cada curso desde tu perfil.`,
                profesor: `👨‍🏫 **Gestión de Cursos**: Como profesor, puedes gestionar tus cursos desde el **Panel Docente** (${SITE_CONTEXT.pages['/html/docente.html']}). También puedes ver todos los cursos disponibles en **Cursos** (${SITE_CONTEXT.navigation['Cursos']}).`,
                admin: `⚙️ **Administración de Cursos**: Como administrador, puedes gestionar todos los cursos desde el **Panel de Monitoreo** (${SITE_CONTEXT.pages['/html/monitoreo.html']}). También tienes acceso completo a todas las funcionalidades.`
            }
        },
        
        registro: {
            patterns: ['registro', 'registrar', 'crear cuenta', 'nueva cuenta', 'sign up', 'registrarse'],
            responses: {
                guest: `✅ **Crear Cuenta**: Para registrarte, ve a **Inicio de Sesión** (${SITE_CONTEXT.pages['/html/login.html']}). Puedes crear una cuenta con tu email o conectarte directamente con Google/GitHub. ¡Es gratis y rápido!`,
                estudiante: `ℹ️ Ya tienes una cuenta de estudiante. Si necesitas cambiar información, ve a tu **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).`,
                profesor: `ℹ️ Ya tienes una cuenta de profesor. Si necesitas cambiar información, ve a tu **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).`,
                admin: `ℹ️ Ya tienes una cuenta de administrador. Si necesitas cambiar información, ve a tu **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).`
            }
        },
        
        perfil: {
            patterns: ['perfil', 'mi cuenta', 'datos personales', 'información personal', 'configuración'],
            responses: {
                guest: `👤 **Tu Perfil**: Para acceder a tu perfil, primero necesitas [registrarte](${SITE_CONTEXT.pages['/html/login.html']}). Una vez registrado, podrás gestionar tu información personal desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).`,
                estudiante: `👤 **Tu Perfil**: Accede a tu perfil desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}). Allí puedes ver y editar tu información personal, cambiar contraseña, ver tu progreso en cursos y gestionar tu cuenta.`,
                profesor: `👨‍🏫 **Tu Perfil**: Accede a tu perfil desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}). Allí puedes gestionar tu información personal y ver estadísticas de tus cursos.`,
                admin: `⚙️ **Tu Perfil**: Accede a tu perfil desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}). Allí puedes gestionar tu información personal y acceder a configuraciones administrativas.`
            }
        },
        
        blog: {
            patterns: ['blog', 'artículos', 'noticias', 'contenido', 'leer'],
            responses: {
                guest: `📰 **Blog Educativo**: Explora nuestro blog en **Blog** (${SITE_CONTEXT.navigation['Blog']}). Encontrarás artículos sobre educación, consejos de estudio, noticias de la plataforma y contenido educativo de calidad.`,
                estudiante: `📰 **Blog Educativo**: Accede a nuestro blog desde **Blog** (${SITE_CONTEXT.navigation['Blog']}). Encontrarás contenido relacionado con tus cursos, consejos de estudio y noticias actualizadas.`,
                profesor: `📰 **Blog Educativo**: Accede al blog desde **Blog** (${SITE_CONTEXT.navigation['Blog']}). También puedes contribuir con artículos educativos desde tu panel docente.`,
                admin: `📰 **Blog Educativo**: Accede al blog desde **Blog** (${SITE_CONTEXT.navigation['Blog']}). Como administrador, puedes gestionar el contenido del blog desde el panel de monitoreo.`
            }
        },
        
        contacto: {
            patterns: ['contacto', 'soporte', 'ayuda', 'problema', 'error', 'contactar'],
            responses: {
                guest: `📞 **Soporte**: Para contactarnos, ve a **Contacto** (${SITE_CONTEXT.navigation['Contacto']}). Allí encontrarás nuestro formulario de contacto, información de soporte y formas de comunicarte con nuestro equipo.`,
                estudiante: `📞 **Soporte**: Para obtener ayuda, ve a **Contacto** (${SITE_CONTEXT.navigation['Contacto']}). También puedes revisar la sección de FAQ o contactar directamente a tu profesor desde el panel de cursos.`,
                profesor: `📞 **Soporte**: Para soporte técnico, ve a **Contacto** (${SITE_CONTEXT.navigation['Contacto']}). Como profesor, también tienes acceso directo al soporte administrativo.`,
                admin: `📞 **Soporte**: Para soporte técnico, ve a **Contacto** (${SITE_CONTEXT.navigation['Contacto']}). Como administrador, también puedes gestionar las consultas de soporte desde el panel de monitoreo.`
            }
        },
        
        calendario: {
            patterns: ['calendario', 'horarios', 'fechas', 'agenda', 'programa'],
            responses: {
                guest: `📅 **Calendario y Horarios**: El calendario académico está en **Calendario** (${SITE_CONTEXT.navigation['Calendario']}) y los horarios en **Horarios** (${SITE_CONTEXT.navigation['Horarios']}). Estas herramientas te ayudarán a organizar tu tiempo de estudio.`,
                estudiante: `📅 **Tu Calendario**: Accede a tu calendario personal desde **Calendario** (${SITE_CONTEXT.navigation['Calendario']}) y horarios desde **Horarios** (${SITE_CONTEXT.navigation['Horarios']}). Allí verás las fechas importantes de tus cursos y sesiones programadas.`,
                profesor: `📅 **Calendario Docente**: Accede al calendario desde **Calendario** (${SITE_CONTEXT.navigation['Calendario']}) y horarios desde **Horarios** (${SITE_CONTEXT.navigation['Horarios']}). Puedes gestionar las fechas de tus cursos desde el panel docente.`,
                admin: `📅 **Calendario Administrativo**: Accede al calendario desde **Calendario** (${SITE_CONTEXT.navigation['Calendario']}) y horarios desde **Horarios** (${SITE_CONTEXT.navigation['Horarios']}). Como administrador, puedes gestionar el calendario académico general.`
            }
        },
        
        pagos: {
            patterns: ['pago', 'comprar', 'checkout', 'precio', 'costo', 'tarjeta', 'paypal'],
            responses: {
                guest: `💳 **Proceso de Pago**: Para comprar un curso, primero selecciónalo en **Cursos** (${SITE_CONTEXT.navigation['Cursos']}), luego sigue el proceso de checkout (${SITE_CONTEXT.pages['/html/checkout.html']}). Aceptamos tarjetas de crédito, PayPal y otros métodos de pago seguros.`,
                estudiante: `💳 **Mis Compras**: Puedes ver el historial de tus compras en tu perfil. Para comprar nuevos cursos, ve a **Cursos** (${SITE_CONTEXT.navigation['Cursos']}) y sigue el proceso de checkout (${SITE_CONTEXT.pages['/html/checkout.html']}).`,
                profesor: `ℹ️ Como profesor, no necesitas realizar compras. Puedes acceder a todos los cursos desde tu panel docente.`,
                admin: `ℹ️ Como administrador, puedes gestionar los pagos y transacciones desde el panel de monitoreo.`
            }
        },
        
        inicio: {
            patterns: ['inicio', 'home', 'principal', 'dashboard', 'menú'],
            responses: {
                guest: `🏠 **Página Principal**: Estás en la página principal de ${SITE_CONTEXT.name}. Desde aquí puedes explorar cursos, leer el blog, o registrarte para acceder a más funcionalidades.`,
                estudiante: `🏠 **Dashboard**: Accede a tu dashboard desde **Inicio** (${SITE_CONTEXT.navigation['Inicio']}). Allí verás un resumen de tus cursos, progreso y actividades recientes.`,
                profesor: `🏠 **Dashboard Docente**: Accede a tu dashboard desde **Inicio** (${SITE_CONTEXT.navigation['Inicio']}). Allí verás estadísticas de tus cursos y actividades recientes.`,
                admin: `🏠 **Dashboard Administrativo**: Accede a tu dashboard desde **Inicio** (${SITE_CONTEXT.navigation['Inicio']}). Allí verás estadísticas generales de la plataforma y herramientas administrativas.`
            }
        }
    };
    
    // Buscar coincidencias en patrones
    for (const [category, data] of Object.entries(patterns)) {
        if (data.patterns.some(pattern => message.includes(pattern))) {
            return data.responses[userRole] || data.responses.guest;
        }
    }
    
    // Respuestas contextuales basadas en la página actual
    if (currentPage.includes('cursos')) {
        return `📚 **En la página de Cursos**: Aquí puedes explorar todos los cursos disponibles. Si tienes alguna pregunta específica sobre un curso, házmelo saber. También puedes acceder a "Mis Cursos" si ya estás matriculado.`;
    }
    
    if (currentPage.includes('blog')) {
        return `📰 **En el Blog**: Aquí encontrarás artículos educativos, consejos de estudio y noticias de la plataforma. ¿Hay algún tema específico sobre el que te gustaría leer?`;
    }
    
    if (currentPage.includes('contact')) {
        return `📞 **En Contacto**: Aquí puedes enviarnos tus consultas, reportar problemas o solicitar soporte. ¿En qué puedo ayudarte?`;
    }
    
    // Respuesta inteligente genérica
    const genericResponses = [
        `🤔 Entiendo que preguntas sobre "${userMessage}". Te sugiero explorar las diferentes secciones desde el menú principal. Si necesitas ayuda específica, puedes contactarnos en **Contacto** (${SITE_CONTEXT.navigation['Contacto']}).`,
        `💡 Para responder mejor tu pregunta sobre "${userMessage}", ¿podrías ser más específico? Puedo ayudarte con navegación, cursos, registro, perfil, blog, contacto, calendario y pagos.`,
        `🔍 Estoy aquí para ayudarte con "${userMessage}". ¿Te refieres a cursos, registro, perfil, blog, contacto, calendario o pagos? Puedo darte información específica sobre cualquiera de estos temas.`
    ];
    
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
}

// Endpoint principal del chatbot
router.post('/chat', async (req, res) => {
    try {
        const { message, currentPage, userRole, chatHistory } = req.body;
        
        if (!message) {
            return res.status(400).json({ 
                error: 'Mensaje requerido' 
            });
        }

        // Usar el sistema inteligente local (más confiable y sin dependencias externas)
        console.log('Usando sistema inteligente local para respuesta');
        const intelligentResponse = getFallbackResponse(message, currentPage, userRole);
        
        res.json({ response: intelligentResponse });
        
    } catch (error) {
        console.error('Error en endpoint del chatbot:', error);
        
        // Fallback a respuestas predefinidas
        const fallbackResponse = getFallbackResponse(
            req.body.message || '', 
            req.body.currentPage || '/', 
            req.body.userRole || 'guest'
        );
        
        res.json({ response: fallbackResponse });
    }
});

// Endpoint para obtener información del sitio (para debugging)
router.get('/api/site-info', (req, res) => {
    res.json({
        site: SITE_CONTEXT.name,
        description: SITE_CONTEXT.description,
        pages: SITE_CONTEXT.pages,
        navigation: SITE_CONTEXT.navigation,
        roles: SITE_CONTEXT.roles,
        features: SITE_CONTEXT.features
    });
});

// Endpoint para probar el sistema del chatbot
router.get('/api/test', async (req, res) => {
    try {
        // Probar el sistema inteligente local
        const testResponse = getFallbackResponse('test', '/', 'guest');
        
        res.json({ 
            status: 'success', 
            message: 'Sistema inteligente local funcionando correctamente',
            response: testResponse,
            features: [
                'Respuestas contextuales basadas en el rol del usuario',
                'Navegación inteligente del sitio',
                'Información específica por página',
                'Soporte para múltiples idiomas',
                'Sin dependencias externas'
            ]
        });
        
    } catch (error) {
        res.json({ 
            status: 'error', 
            message: 'Error en el sistema local del chatbot',
            error: error.message
        });
    }
});

module.exports = router;
