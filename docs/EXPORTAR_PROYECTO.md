# 📦 Exportar Proyecto Lumina Learning

## 🎯 Resumen
Tu proyecto **SÍ funcionará** en otra computadora, pero necesita algunos pasos de configuración.

## 📋 Requisitos en la nueva computadora

### **Obligatorio:**
- **Node.js** (versión 14.x o superior)
- **Navegador web** moderno

### **Opcional:**
- **VS Code** (para editar el código)
- **Live Server** (extensión de VS Code)

## 🚀 Pasos para exportar

### **1. Crear el ZIP del proyecto**
```
📦 Incluir TODOS estos archivos:
├── 📄 index.html
├── 📁 js/
│   └── 📄 chatbot.js
├── 📁 styles/
│   └── 📄 chatbot.css
├── 📄 chatbot-server.js
├── 📄 package.json
├── 📄 start-chatbot.bat
├── 📄 start-chatbot.sh
├── 📄 check-system.js
├── 📄 config.js
├── 📄 INSTALACION_CHATBOT.md
├── 📄 EXPORTAR_PROYECTO.md
└── 📄 .gitignore
```

### **2. En la nueva computadora**

#### **Opción A: Instalación Automática (Recomendada)**
- **Windows**: Doble clic en `start-chatbot.bat`
- **macOS/Linux**: Ejecutar `./start-chatbot.sh`

#### **Opción B: Instalación Manual**
```bash
# 1. Instalar dependencias
npm install

# 2. Verificar sistema
node check-system.js

# 3. Iniciar chatbot
node chatbot-server.js

# 4. Abrir página principal
# (Usar Live Server o abrir index.html directamente)
```

## 🔧 Configuración específica por sistema

### **Windows:**
- Node.js desde: https://nodejs.org/
- El script `start-chatbot.bat` maneja todo automáticamente

### **macOS:**
- Node.js desde: https://nodejs.org/
- Terminal: `chmod +x start-chatbot.sh && ./start-chatbot.sh`

### **Linux:**
- `sudo apt install nodejs npm` (Ubuntu/Debian)
- `sudo dnf install nodejs npm` (Fedora)
- Terminal: `chmod +x start-chatbot.sh && ./start-chatbot.sh`

## 🌐 Puertos utilizados

- **5501**: Página principal (VS Code Live Server)
- **5503**: Servidor del chatbot

## ✅ Verificación de funcionamiento

### **1. Verificar sistema:**
```bash
node check-system.js
```

### **2. Verificar chatbot:**
- Servidor muestra: "🚀 Servidor del chatbot ejecutándose en http://localhost:5503"
- Chatbot aparece en la esquina inferior derecha de la página
- Puedes hacer preguntas y recibir respuestas

### **3. Probar preguntas:**
- "Hola"
- "¿Cuánto cuestan los cursos?"
- "¿Cómo me registro?"
- "¿Dónde está mi perfil?"

## 🔧 Solución de problemas comunes

### **Error: "Node.js no está instalado"**
```bash
# Descargar desde: https://nodejs.org/
# Reiniciar terminal después de la instalación
```

### **Error: "Puerto 5503 en uso"**
```bash
# Opción 1: Cambiar puerto en chatbot-server.js línea 6
# Opción 2: Cerrar otros programas que usen el puerto
```

### **Error: "No se pudieron instalar las dependencias"**
```bash
npm cache clean --force
npm install
```

### **El chatbot no aparece**
1. Verificar que el servidor esté ejecutándose
2. Revisar consola del navegador (F12)
3. Verificar que `chatbot.js` y `chatbot.css` estén en `index.html`

## 📁 Estructura final del proyecto

```
📦 Lumina Learning (Portable)
├── 📄 index.html              # Página principal
├── 📁 js/
│   └── 📄 chatbot.js          # Frontend del chatbot
├── 📁 styles/
│   └── 📄 chatbot.css         # Estilos del chatbot
├── 📄 chatbot-server.js       # Servidor del chatbot
├── 📄 package.json            # Dependencias
├── 📄 config.js               # Configuración
├── 📄 check-system.js         # Verificación de sistema
├── 📄 start-chatbot.bat       # Script Windows
├── 📄 start-chatbot.sh        # Script macOS/Linux
├── 📄 INSTALACION_CHATBOT.md  # Instrucciones de instalación
├── 📄 EXPORTAR_PROYECTO.md    # Este archivo
└── 📄 .gitignore              # Archivos a ignorar
```

## 🎉 Resultado final

Una vez completados los pasos, tendrás:
- ✅ Chatbot completamente funcional
- ✅ Respuestas inteligentes y humanas
- ✅ Integración perfecta con tu LMS
- ✅ Sistema portable y reutilizable

## 📞 Soporte

Si tienes problemas:
1. Ejecuta `node check-system.js` para diagnóstico
2. Revisa la consola del navegador (F12)
3. Verifica que todos los archivos estén presentes
4. Asegúrate de que Node.js esté instalado correctamente

¡Tu proyecto está listo para ser exportado y funcionará perfectamente en cualquier computadora! 🚀✨
