# 🚀 Integración del Chatbot en Puerto 5501

## 📋 Archivos que necesitas copiar a tu proyecto del puerto 5501:

### 1. **Archivos del Backend (Servidor)**
```
routes/chatbot.js          # Lógica del chatbot (API)
```

### 2. **Archivos del Frontend**
```
js/chatbot.js              # JavaScript del chatbot
styles/chatbot.css         # Estilos del chatbot
```

### 3. **Dependencias**
```
package.json               # Añadir "axios": "^1.6.0" a las dependencias
```

## 🔧 Pasos para la Integración:

### Paso 1: Copiar archivos del chatbot
1. Copia `routes/chatbot.js` a tu carpeta `routes/` del proyecto 5501
2. Copia `js/chatbot.js` a tu carpeta `js/` del proyecto 5501  
3. Copia `styles/chatbot.css` a tu carpeta `styles/` del proyecto 5501

### Paso 2: Instalar dependencia
En tu proyecto del puerto 5501, ejecuta:
```bash
npm install axios
```

### Paso 3: Modificar tu server.js (puerto 5501)
Añade estas líneas a tu `server.js`:

```javascript
// Importar las rutas del chatbot
const chatbotRoutes = require('./routes/chatbot');

// Añadir las rutas del chatbot (después de las otras rutas)
app.use('/chatbot', chatbotRoutes);
```

### Paso 4: Integrar en tu HTML principal
En tu `index.html` del puerto 5501, añade estas líneas en el `<head>`:
```html
<link href="styles/chatbot.css" rel="stylesheet">
```

Y al final del `<body>`:
```html
<script src="js/chatbot.js"></script>
```

## ✅ Verificación

Después de la integración, el chatbot estará disponible en:
- **Frontend**: Tu página principal del puerto 5501
- **API**: `http://localhost:5501/chatbot/api`

## 🎯 Funcionalidades Disponibles

El chatbot incluye:
- ✅ Respuestas inteligentes sin dependencias externas
- ✅ Navegación contextual del sitio
- ✅ Respuestas específicas por rol de usuario
- ✅ Interfaz moderna con glassmorphism
- ✅ Botones de sugerencias rápidas
- ✅ Historial de chat persistente

## 🔍 Pruebas

Para probar que funciona:
1. Abre tu página en `http://localhost:5501`
2. Busca el botón flotante del chatbot (esquina inferior derecha)
3. Haz clic y prueba preguntas como:
   - "¿Dónde están los cursos?"
   - "¿Cómo me registro?"
   - "¿Dónde está mi perfil?"

## 📞 Soporte

Si tienes problemas con la integración, verifica:
1. Que todos los archivos estén en las carpetas correctas
2. Que la dependencia `axios` esté instalada
3. Que las rutas estén correctamente configuradas en `server.js`
4. Que los archivos CSS y JS estén incluidos en tu HTML principal
