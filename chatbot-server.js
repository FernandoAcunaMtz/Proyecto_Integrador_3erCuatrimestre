const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5503; // Puerto diferente para evitar conflictos

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

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

// Sistema inteligente de respuestas predefinidas
function getIntelligentResponse(userMessage, currentPage, userRole) {
    const message = userMessage.toLowerCase();
    
    // Análisis de contexto y sentimiento
    const isQuestion = message.includes('?') || message.includes('qué') || message.includes('como') || message.includes('donde') || message.includes('cuando') || message.includes('por qué');
    const isGreeting = message.includes('hola') || message.includes('buenos') || message.includes('buenas') || message.includes('saludos');
    const isThankful = message.includes('gracias') || message.includes('thanks') || message.includes('genial') || message.includes('perfecto');
    const isUrgent = message.includes('urgente') || message.includes('problema') || message.includes('error') || message.includes('ayuda');
    
    // Respuestas a saludos
    if (isGreeting) {
        const greetings = {
            guest: `¡Hola! 👋 Soy el asistente virtual de Lumina Learning. Me alegra verte por aquí. ¿En qué puedo ayudarte hoy? Puedo guiarte con información sobre nuestros cursos, el proceso de registro, o cualquier duda que tengas sobre la plataforma.`,
            estudiante: `¡Hola! 👋 ¡Qué bueno verte de vuelta! Como estudiante, tienes acceso completo a todos nuestros recursos. ¿Necesitas ayuda con tus cursos, quieres explorar nuevas opciones de aprendizaje, o hay algo específico en lo que pueda asistirte?`,
            profesor: `¡Hola! 👋 ¡Bienvenido de vuelta, profesor! Como educador en nuestra plataforma, tienes acceso a herramientas especiales para gestionar tus cursos y contenido. ¿En qué puedo ayudarte hoy?`,
            admin: `¡Hola! 👋 ¡Bienvenido, administrador! Tienes acceso completo a todas las funcionalidades de la plataforma. ¿Necesitas ayuda con la gestión del sistema o hay algo específico que requiera tu atención?`
        };
        return greetings[userRole] || greetings.guest;
    }
    
    // Respuestas a agradecimientos
    if (isThankful) {
        return `¡De nada! 😊 Me alegra haber podido ayudarte. Si tienes más preguntas o necesitas asistencia adicional, no dudes en preguntarme. ¡Estoy aquí para ayudarte a aprovechar al máximo tu experiencia en Lumina Learning!`;
    }
    
    // Respuestas urgentes
    if (isUrgent) {
        return `Entiendo que necesitas ayuda urgente. 🚨 Te recomiendo contactar directamente con nuestro equipo de soporte en **Contacto** (${SITE_CONTEXT.navigation['Contacto']}) para una asistencia más rápida y especializada. También puedes revisar nuestra sección de FAQ para respuestas inmediatas.`;
    }
    
    // Patrones de reconocimiento más inteligentes y humanos
    const patterns = {
        // Navegación y estructura del sitio
        cursos: {
            patterns: ['cursos', 'curso', 'clases', 'materias', 'aprender', 'estudiar', 'disponibles', 'cuántos', 'populares', 'vendidos'],
            responses: {
                guest: `¡Excelente pregunta! 🎓 En Lumina Learning tenemos una amplia variedad de cursos diseñados para diferentes niveles y objetivos. Puedes explorar todos nuestros cursos en la página **Cursos** (${SITE_CONTEXT.navigation['Cursos']}), donde encontrarás información detallada sobre contenido, duración, precios y testimonios de otros estudiantes. 

Algunos de nuestros cursos más populares incluyen:
• **Mundo Spiral** - Marketing Digital Avanzado
• **Desarrollo Web Full Stack** - De principiante a experto
• **Inversiones Financieras** - Gestión de portafolios
• **Meta-finance®** - Estrategias avanzadas

¿Te interesa algún área específica? ¡Estaré encantado de recomendarte el curso perfecto para ti!`,
                estudiante: `¡Perfecto! 📚 Como estudiante, tienes acceso privilegiado a todos nuestros recursos. Puedes ver tus cursos matriculados en **Mis Cursos** desde el menú principal, donde también podrás hacer seguimiento de tu progreso y acceder a materiales adicionales.

Si quieres explorar nuevos cursos para expandir tus conocimientos, te recomiendo visitar **Cursos** (${SITE_CONTEXT.navigation['Cursos']}). Allí encontrarás opciones que complementen perfectamente lo que ya estás estudiando.

¿Hay algún tema específico que te gustaría aprender o algún curso en particular que te llame la atención?`,
                profesor: `¡Excelente! 👨‍🏫 Como profesor, tienes acceso a herramientas especiales para gestionar tus cursos. Puedes administrar tu contenido desde el **Panel Docente** (${SITE_CONTEXT.pages['/html/docente.html']}), donde podrás actualizar materiales, revisar el progreso de tus estudiantes y crear nuevos cursos.

También puedes explorar todos los cursos disponibles en **Cursos** (${SITE_CONTEXT.navigation['Cursos']}) para inspirarte o colaborar con otros educadores.

¿Necesitas ayuda con alguna funcionalidad específica del panel docente o quieres crear nuevo contenido?`,
                admin: `¡Por supuesto! ⚙️ Como administrador, tienes control total sobre todos los cursos de la plataforma. Puedes gestionar el catálogo completo desde el **Panel de Monitoreo** (${SITE_CONTEXT.pages['/html/monitoreo.html']}), donde podrás revisar estadísticas, aprobar nuevos cursos, y supervisar el rendimiento general.

También tienes acceso a todas las funcionalidades de la plataforma para optimizar la experiencia de aprendizaje.

¿Hay algún aspecto específico de la gestión de cursos que requiera tu atención?`
            }
        },
        
        registro: {
            patterns: ['registro', 'registrar', 'crear cuenta', 'nueva cuenta', 'sign up', 'registrarse', 'inscribirse', 'matricularse'],
            responses: {
                guest: `¡Te ayudo con el registro! 🚀 Crear tu cuenta en Lumina Learning es súper fácil y rápido. Simplemente ve a **Inicio de Sesión** (${SITE_CONTEXT.pages['/html/login.html']}) y tendrás varias opciones:

**Opciones de registro:**
• **Email tradicional** - Usa tu correo electrónico
• **Google** - Conecta tu cuenta de Google (más rápido)
• **GitHub** - Perfecto si eres desarrollador

**Beneficios de registrarte:**
✅ Acceso completo a todos los cursos
✅ Seguimiento de tu progreso
✅ Certificados al completar cursos
✅ Contenido exclusivo para miembros
✅ Soporte prioritario

¡El registro es completamente gratuito! Una vez que tengas tu cuenta, podrás explorar todos nuestros cursos y comenzar tu viaje de aprendizaje. ¿Te gustaría que te ayude con algún paso específico del proceso?`,
                estudiante: `¡Hola! 👋 Veo que ya tienes una cuenta de estudiante activa. Si necesitas actualizar tu información personal, cambiar tu contraseña, o modificar cualquier dato de tu perfil, puedes hacerlo desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).

¿Hay algo específico que quieras cambiar en tu cuenta o necesitas ayuda con alguna funcionalidad de la plataforma?`,
                profesor: `¡Hola! 👨‍🏫 Como profesor registrado, ya tienes acceso completo a todas las herramientas educativas. Si necesitas actualizar tu información profesional o cambiar algún dato de tu perfil, puedes hacerlo desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).

¿Necesitas ayuda con alguna funcionalidad del panel docente o quieres crear nuevo contenido educativo?`,
                admin: `¡Hola! ⚙️ Como administrador, ya tienes acceso completo a todas las funcionalidades de la plataforma. Si necesitas actualizar tu información administrativa, puedes hacerlo desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}).

¿Hay algún aspecto de la gestión del sistema que requiera tu atención o necesitas ayuda con alguna funcionalidad administrativa?`
            }
        },
        
        perfil: {
            patterns: ['perfil', 'mi cuenta', 'datos personales', 'información personal', 'configuración', 'mi información'],
            responses: {
                guest: `¡Claro! 👤 Tu perfil es tu centro de control personal en Lumina Learning. Para acceder a todas las funcionalidades de tu perfil, primero necesitas [registrarte](${SITE_CONTEXT.pages['/html/login.html']}). 

Una vez que tengas tu cuenta, podrás:
• **Ver y editar** tu información personal
• **Cambiar tu contraseña** de forma segura
• **Actualizar tu foto de perfil**
• **Gestionar tus preferencias** de notificaciones
• **Ver tu historial** de aprendizaje

¡Es súper fácil y te da control total sobre tu experiencia en la plataforma! ¿Te gustaría que te ayude con el proceso de registro?`,
                estudiante: `¡Perfecto! 👤 Tu perfil es tu centro de control personal. Puedes acceder a él desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}), donde encontrarás:

**Información Personal:**
• Editar tu nombre, email y datos de contacto
• Cambiar tu foto de perfil
• Actualizar tu biografía

**Configuración de Cuenta:**
• Cambiar contraseña de forma segura
• Gestionar preferencias de privacidad
• Configurar notificaciones

**Progreso Académico:**
• Ver tu historial de cursos completados
• Revisar certificados obtenidos
• Seguimiento de tu progreso actual

**Preferencias:**
• Configurar idioma preferido
• Gestionar suscripciones a newsletters
• Personalizar tu experiencia

¿Hay algo específico que quieras modificar en tu perfil?`,
                profesor: `¡Excelente! 👨‍🏫 Como profesor, tu perfil es tu identidad profesional en la plataforma. Accede a él desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}), donde podrás:

**Información Profesional:**
• Actualizar tu biografía académica
• Gestionar tus credenciales y experiencia
• Editar tu foto de perfil profesional

**Configuración de Cuenta:**
• Cambiar contraseña y configuraciones de seguridad
• Gestionar preferencias de notificaciones
• Configurar privacidad

**Estadísticas Docentes:**
• Ver métricas de tus cursos
• Revisar feedback de estudiantes
• Seguimiento de tu actividad educativa

¿Necesitas ayuda con alguna configuración específica o quieres actualizar tu información profesional?`,
                admin: `¡Por supuesto! ⚙️ Como administrador, tu perfil te da acceso a todas las configuraciones del sistema. Accede desde **Perfil** (${SITE_CONTEXT.navigation['Perfil']}), donde encontrarás:

**Configuración Administrativa:**
• Gestionar permisos y roles
• Configurar parámetros del sistema
• Acceso a herramientas de administración

**Información Personal:**
• Actualizar datos de contacto administrativo
• Gestionar credenciales de acceso
• Configurar notificaciones del sistema

**Panel de Control:**
• Estadísticas generales de la plataforma
• Métricas de usuarios y cursos
• Herramientas de gestión avanzada

¿Hay algún aspecto específico de la administración que requiera tu atención?`
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
    
    // Respuestas más inteligentes y contextuales
    if (message.includes('precio') || message.includes('costo') || message.includes('cuánto cuesta')) {
        return `¡Excelente pregunta! 💰 Los precios de nuestros cursos varían según el contenido y duración. Puedes ver todos los precios detallados en la página **Cursos** (${SITE_CONTEXT.navigation['Cursos']}).

**Rangos de precios:**
• Cursos básicos: $199 - $399
• Cursos intermedios: $399 - $599  
• Cursos avanzados: $599 - $799
• Programas especializados: $799+

**Opciones de pago:**
✅ Pago único
✅ Pago en cuotas (sin intereses)
✅ Tarjetas de crédito/débito
✅ PayPal
✅ Transferencia bancaria

¿Te interesa algún curso específico? ¡Puedo darte información detallada sobre precios y opciones de pago!`;
    }
    
    if (message.includes('certificado') || message.includes('diploma') || message.includes('acreditación')) {
        return `¡Por supuesto! 🎓 Todos nuestros cursos incluyen certificados digitales al completarlos exitosamente.

**Características de nuestros certificados:**
• **Certificados digitales** con verificación online
• **Acreditación internacional** reconocida
• **Código QR** para verificación instantánea
• **Descarga en PDF** de alta calidad
• **Compartible** en LinkedIn y redes profesionales

**Requisitos para obtener el certificado:**
✅ Completar al menos el 80% del curso
✅ Aprobar las evaluaciones finales
✅ Participar en las actividades prácticas

¿Te interesa saber más sobre algún curso específico y su certificación?`;
    }
    
    if (message.includes('tiempo') || message.includes('duración') || message.includes('cuánto dura')) {
        return `¡Buena pregunta! ⏱️ La duración de nuestros cursos varía según el contenido y tu ritmo de aprendizaje.

**Tipos de cursos por duración:**
• **Cursos Express** (2-4 semanas): Ideal para aprender conceptos básicos
• **Cursos Estándar** (1-3 meses): Contenido completo y equilibrado
• **Programas Extensos** (3-6 meses): Formación integral y especializada

**Flexibilidad de aprendizaje:**
✅ **A tu ritmo** - Sin fechas límite estrictas
✅ **Acceso 24/7** - Estudia cuando quieras
✅ **Contenido permanente** - Acceso de por vida
✅ **Actualizaciones gratuitas** - Contenido siempre actualizado

¿Te gustaría que te recomiende cursos según tu disponibilidad de tiempo?`;
    }
    
    if (message.includes('nivel') || message.includes('principiante') || message.includes('avanzado') || message.includes('experto')) {
        return `¡Perfecto! 📊 En Lumina Learning tenemos cursos para todos los niveles de experiencia.

**Niveles disponibles:**
• **Principiante** 🟢 - Sin conocimientos previos requeridos
• **Intermedio** 🟡 - Conocimientos básicos recomendados
• **Avanzado** 🔴 - Experiencia previa necesaria
• **Experto** ⚫ - Para profesionales consolidados

**Recomendaciones por nivel:**
**Si eres principiante:** Te recomiendo empezar con nuestros cursos básicos que incluyen fundamentos teóricos y prácticos.

**Si tienes experiencia:** Puedes saltar directamente a cursos intermedios o avanzados según tu área de interés.

**Si eres profesional:** Nuestros cursos expertos te ayudarán a especializarte y actualizar tus conocimientos.

¿En qué área te gustaría desarrollarte? ¡Te ayudo a encontrar el curso perfecto para tu nivel!`;
    }
    
    // Respuesta inteligente genérica mejorada
    const genericResponses = [
        `¡Hola! 🤔 Entiendo que preguntas sobre "${userMessage}". Me encantaría ayudarte de manera más específica. ¿Podrías contarme un poco más sobre lo que necesitas? Por ejemplo:
• ¿Estás buscando información sobre cursos específicos?
• ¿Necesitas ayuda con el proceso de registro?
• ¿Tienes dudas sobre precios o certificados?
• ¿Quieres saber más sobre alguna funcionalidad de la plataforma?

¡Estoy aquí para ayudarte a encontrar exactamente lo que necesitas!`,
        `¡Excelente pregunta! 💡 Para darte la mejor respuesta sobre "${userMessage}", ¿podrías ser un poco más específico? Puedo ayudarte con:
• **Cursos y contenido** - Información detallada sobre nuestros programas
• **Registro y cuenta** - Proceso de creación y gestión de tu cuenta
• **Perfil y configuración** - Personalización de tu experiencia
• **Pagos y certificados** - Información sobre precios y acreditaciones
• **Soporte técnico** - Ayuda con problemas o dudas

¿Cuál de estos temas te interesa más?`,
        `¡Me encanta tu curiosidad! 🔍 Sobre "${userMessage}", puedo ayudarte con mucha información. ¿Te refieres a:
• **Explorar cursos** - Ver qué opciones tenemos disponibles
• **Proceso de registro** - Cómo crear tu cuenta
• **Gestionar tu perfil** - Configurar tu información personal
• **Información de contacto** - Cómo comunicarte con nuestro equipo
• **Calendario y horarios** - Organizar tu tiempo de estudio

¡Cuéntame más sobre lo que necesitas y te daré información detallada y personalizada!`
    ];
    
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
}

// Endpoint principal del chatbot
app.post('/api/chatbot', (req, res) => {
    try {
        const { message, currentPage, userRole, chatHistory } = req.body;
        
        if (!message) {
            return res.status(400).json({ 
                error: 'Mensaje requerido' 
            });
        }

        console.log('Chatbot recibió mensaje:', message);
        const intelligentResponse = getIntelligentResponse(message, currentPage, userRole);
        
        res.json({ response: intelligentResponse });
        
    } catch (error) {
        console.error('Error en endpoint del chatbot:', error);
        res.status(500).json({ 
            response: 'Lo siento, tuve un problema al procesar tu pregunta. Por favor, intenta de nuevo.' 
        });
    }
});

// Endpoint para probar el sistema del chatbot
app.get('/api/chatbot/test', (req, res) => {
    try {
        const testResponse = getIntelligentResponse('test', '/', 'guest');
        
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

// Ruta para servir el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor del chatbot ejecutándose en http://localhost:${PORT}`);
    console.log(`🤖 Chatbot API disponible en http://localhost:${PORT}/api/chatbot`);
    console.log(`✅ Sistema inteligente local activo`);
});
