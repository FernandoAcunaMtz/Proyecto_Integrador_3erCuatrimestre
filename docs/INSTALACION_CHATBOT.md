# 🚀 Instalación del Chatbot - Lumina Learning

## 📋 Requisitos Previos

### 1. **Node.js** (Obligatorio)
- Descarga e instala Node.js desde: https://nodejs.org/
- Versión recomendada: 18.x o superior
- Para verificar la instalación: `node --version`

### 2. **Navegador Web**
- Chrome, Firefox, Safari, Edge (cualquiera moderno)

## 🛠️ Instalación Automática

### **Windows:**
1. Haz doble clic en `start-chatbot.bat`
2. El script verificará Node.js e instalará dependencias automáticamente
3. El chatbot se iniciará en http://localhost:5503

### **macOS/Linux:**
1. Abre Terminal
2. Navega a la carpeta del proyecto: `cd ruta/al/proyecto`
3. Ejecuta: `chmod +x start-chatbot.sh`
4. Ejecuta: `./start-chatbot.sh`

## 🛠️ Instalación Manual

### **Paso 1: Instalar dependencias**
```bash
npm install
```

### **Paso 2: Iniciar el chatbot**
```bash
node chatbot-server.js
```

### **Paso 3: Abrir la aplicación**
- Abre tu página principal en el navegador
- El chatbot estará disponible en la esquina inferior derecha

## 📁 Estructura del Proyecto

```
📦 Lumina Learning
├── 📄 index.html              # Página principal
├── 📁 js/
│   └── 📄 chatbot.js          # Frontend del chatbot
├── 📁 styles/
│   └── 📄 chatbot.css         # Estilos del chatbot
├── 📄 chatbot-server.js       # Servidor del chatbot
├── 📄 package.json            # Dependencias
├── 📄 start-chatbot.bat       # Script Windows
├── 📄 start-chatbot.sh        # Script macOS/Linux
└── 📄 INSTALACION_CHATBOT.md  # Este archivo
```

## 🌐 Puertos Utilizados

- **5501**: Página principal (VS Code Live Server)
- **5503**: Servidor del chatbot

## 🔧 Solución de Problemas

### **Error: "Node.js no está instalado"**
- Descarga Node.js desde https://nodejs.org/
- Reinicia la terminal después de la instalación

### **Error: "Puerto 5503 en uso"**
- Cierra otros programas que usen el puerto 5503
- O cambia el puerto en `chatbot-server.js` línea 6

### **Error: "No se pudieron instalar las dependencias"**
- Verifica tu conexión a internet
- Ejecuta: `npm cache clean --force`
- Intenta nuevamente: `npm install`

### **El chatbot no aparece en la página**
- Verifica que el servidor esté ejecutándose en http://localhost:5503
- Abre las herramientas de desarrollador (F12) y revisa la consola
- Asegúrate de que `chatbot.js` y `chatbot.css` estén incluidos en `index.html`

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén presentes
3. Asegúrate de que Node.js esté instalado correctamente

## ✅ Verificación

Para verificar que todo funciona:
1. El servidor muestra: "🚀 Servidor del chatbot ejecutándose en http://localhost:5503"
2. El chatbot aparece en la esquina inferior derecha de la página
3. Puedes hacer preguntas y recibir respuestas inteligentes

¡Listo! Tu chatbot debería funcionar perfectamente. 🤖✨
