# 🤖 Chatbot Lumina Learning - Guía de Configuración

## 📋 Descripción

El chatbot de Lumina Learning es un asistente virtual inteligente que ayuda a los usuarios con:

- **Navegación del sitio** - Encontrar páginas y funcionalidades
- **Información de cursos** - Detalles sobre cursos disponibles
- **Proceso de registro** - Cómo crear cuenta y matricularse
- **Funcionalidades** - Explicar características de la plataforma
- **Soporte técnico** - Resolver problemas básicos

## 🚀 Características Implementadas

### ✅ **Funcionalidades del Chatbot:**
- Interfaz moderna con diseño glassmorphism
- Integración con ChatGPT API (OpenAI)
- Respuestas predefinidas como fallback
- Historial de conversación persistente
- Botones de sugerencias rápidas
- Indicador de escritura animado
- Diseño responsive para móviles
- Soporte para roles de usuario
- Contexto de página actual

### ✅ **Características Técnicas:**
- API REST para comunicación
- Manejo de errores robusto
- Rate limiting para protección
- CORS configurado
- Variables de entorno seguras
- Logging de errores

## 🔧 Configuración

### 1. **Variables de Entorno**

Crear un archivo `.env` en la raíz del proyecto:

```env
# Configuración del Servidor
PORT=5500
NODE_ENV=development

# Configuración de Sesiones
SESSION_SECRET=tu-session-secret-aqui

# Configuración de OpenAI (para el chatbot)
OPENAI_API_KEY=tu-openai-api-key-aqui

# Configuración de Auth0 (si usas autenticación)
AUTH0_DOMAIN=dev-t817winxdvcgqv2e.us.auth0.com
AUTH0_CLIENT_ID=zMmhbQWa6CGsTiW4zDen7clOLcMdEhYN
AUTH0_CLIENT_SECRET=tu-auth0-client-secret-aqui
```

### 2. **Obtener API Key de OpenAI**

1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" en el dashboard
4. Crea una nueva API key
5. Copia la key y agrégala a tu archivo `.env`

### 3. **Instalar Dependencias**

```bash
npm install
```

### 4. **Iniciar el Servidor**

```bash
npm start
```

## 📁 Estructura de Archivos

```
├── js/
│   └── chatbot.js              # Lógica del chatbot (frontend)
├── routes/
│   └── chatbot.js              # API del chatbot (backend)
├── styles/
│   └── chatbot.css             # Estilos del chatbot
├── server.js                   # Servidor principal (actualizado)
└── package.json                # Dependencias (actualizado)
```

## 🎯 Uso del Chatbot

### **Para Usuarios:**
1. El chatbot aparece como un botón flotante en la esquina inferior derecha
2. Haz clic para abrir la interfaz de chat
3. Escribe tu pregunta o usa los botones de sugerencias
4. El chatbot responderá con información contextual

### **Preguntas Ejemplo:**
- "¿Dónde puedo encontrar los cursos?"
- "¿Cómo me registro en la plataforma?"
- "¿Dónde está mi perfil?"
- "¿Cómo funciona el sistema de pagos?"
- "¿Dónde puedo ver el calendario?"

## 🔌 Integración en Páginas

### **Agregar a una página HTML:**

```html
<!-- En el <head> -->
<link href="styles/chatbot.css" rel="stylesheet">

<!-- Al final del <body> -->
<script src="js/chatbot.js"></script>
```

### **Páginas donde ya está integrado:**
- ✅ `index.html` - Página principal
- ⏳ Otras páginas (se pueden agregar según necesidad)

## 🛠️ API Endpoints

### **POST /api/chatbot**
Envía un mensaje al chatbot y recibe una respuesta.

**Request:**
```json
{
  "message": "¿Dónde están los cursos?",
  "currentPage": "/index.html",
  "userRole": "estudiante",
  "chatHistory": [
    {"type": "user", "content": "Hola"},
    {"type": "bot", "content": "¡Hola! ¿En qué puedo ayudarte?"}
  ]
}
```

**Response:**
```json
{
  "response": "Los cursos se encuentran en la página **Cursos** (/html/cursos-venta.html)..."
}
```

### **GET /api/chatbot/site-info**
Obtiene información sobre la estructura del sitio.

### **GET /api/chatbot/test**
Prueba la conexión con OpenAI.

## 🎨 Personalización

### **Cambiar Colores:**
Edita las variables CSS en `styles/chatbot.css`:

```css
:root {
    --chatbot-primary: #3498db;    /* Color principal */
    --chatbot-secondary: #2980b9;  /* Color secundario */
    --chatbot-accent: #e74c3c;     /* Color de acento */
    /* ... más variables */
}
```

### **Modificar Respuestas Predefinidas:**
Edita la función `getFallbackResponse()` en `routes/chatbot.js`.

### **Agregar Nuevas Páginas:**
Actualiza el objeto `SITE_CONTEXT.pages` en `routes/chatbot.js`.

## 🔒 Seguridad

### **Implementado:**
- Rate limiting (100 requests por 15 minutos)
- Validación de entrada
- Manejo seguro de errores
- Variables de entorno
- CORS configurado

### **Recomendaciones:**
- Usar HTTPS en producción
- Implementar autenticación para endpoints sensibles
- Monitorear uso de la API de OpenAI
- Configurar logs de auditoría

## 💰 Costos

### **OpenAI API:**
- **Modelo:** GPT-3.5-turbo
- **Costo:** ~$0.002 por 1K tokens
- **Estimación:** ~$5-20 por mes para uso moderado

### **Alternativas Gratuitas:**
- Usar solo respuestas predefinidas (sin OpenAI)
- Implementar un modelo local
- Usar servicios gratuitos como Hugging Face

## 🐛 Troubleshooting

### **El chatbot no aparece:**
1. Verifica que `chatbot.js` esté incluido en la página
2. Revisa la consola del navegador para errores
3. Asegúrate de que `chatbot.css` esté cargado

### **No recibe respuestas:**
1. Verifica que el servidor esté ejecutándose
2. Revisa los logs del servidor
3. Comprueba la configuración de OpenAI API key

### **Errores de CORS:**
1. Verifica la configuración de CORS en `server.js`
2. Asegúrate de que las rutas estén correctamente configuradas

### **Problemas de estilo:**
1. Verifica que `chatbot.css` esté cargado
2. Revisa conflictos con otros estilos CSS
3. Comprueba la compatibilidad del navegador

## 📊 Monitoreo

### **Logs del Servidor:**
```bash
# Ver logs en tiempo real
npm run dev

# Ver logs específicos del chatbot
grep "chatbot" logs/server.log
```

### **Métricas Recomendadas:**
- Número de mensajes por día
- Tiempo de respuesta promedio
- Tasa de satisfacción del usuario
- Uso de la API de OpenAI

## 🔄 Actualizaciones Futuras

### **Funcionalidades Planificadas:**
- [ ] Integración con base de datos para historial persistente
- [ ] Análisis de sentimientos de las conversaciones
- [ ] Respuestas multilingües
- [ ] Integración con sistema de tickets
- [ ] Chatbot con voz
- [ ] Integración con calendario personal

### **Mejoras Técnicas:**
- [ ] Caché de respuestas frecuentes
- [ ] Optimización de prompts
- [ ] Sistema de feedback del usuario
- [ ] Métricas avanzadas

## 📞 Soporte

### **Archivos de Configuración:**
- `js/chatbot.js` - Lógica del frontend
- `routes/chatbot.js` - API del backend
- `styles/chatbot.css` - Estilos
- `server.js` - Configuración del servidor

### **Debugging:**
1. Revisa la consola del navegador
2. Verifica los logs del servidor
3. Prueba los endpoints con Postman
4. Usa el endpoint `/api/chatbot/test`

### **Contacto:**
Para soporte técnico, contacta al equipo de desarrollo o revisa la documentación de la API.

---

## 🎉 ¡Listo para Usar!

El chatbot está completamente configurado y listo para ayudar a los usuarios de Lumina Learning. Solo asegúrate de configurar la API key de OpenAI para obtener respuestas más inteligentes y contextuales.
