# 📋 Instrucciones de Instalación - Lumina Learning

## 🎯 Resumen Rápido

**Para que alguien más ejecute tu proyecto en el puerto 5501:**

### 1. Instalar Node.js
```bash
# Descargar desde: https://nodejs.org/
# Versión recomendada: 18.x o superior
```

### 2. Instalar Dependencias
```bash
# Extraer el .zip
# Abrir terminal en la carpeta del proyecto
npm install
```

### 3. Ejecutar el Proyecto
```bash
# Opción A: Solo servidor principal (puerto 5501)
npm start

# Opción B: Ambos servidores (principal + chatbot)
npm run start-all

# Opción C: Modo desarrollo
npm run dev-all
```

### 4. Acceder al Sitio
```
http://localhost:5501
```

---

## 🔧 Configuración Detallada

### **Puertos Configurados:**
- **5501**: Servidor principal (aplicación web)
- **5502**: Servidor del chatbot (opcional)

### **Scripts Disponibles:**
- `npm start` → Puerto 5501 (servidor principal)
- `npm run chatbot` → Puerto 5502 (solo chatbot)
- `npm run start-all` → Ambos puertos simultáneamente
- `npm run dev-all` → Modo desarrollo con ambos

### **Dependencias Principales:**
- Express.js (servidor web)
- Socket.io (comunicación en tiempo real)
- Bootstrap (via CDN - no requiere instalación)
- Font Awesome (via CDN - no requiere instalación)

---

## ⚠️ Notas Importantes

1. **No necesita instalar Bootstrap ni Font Awesome** - ya están incluidos via CDN
2. **El proyecto funciona como aplicación web estática** - puede abrir `index.html` directamente
3. **El servidor es opcional** - para funcionalidades avanzadas como el chatbot
4. **Si el puerto 5501 está ocupado**, puede cambiar el puerto en `server.js`

---

## 🚨 Solución de Problemas Comunes

### **Error: Puerto ya en uso**
```bash
# Windows
netstat -ano | findstr :5501
taskkill /PID [número] /F

# Mac/Linux
lsof -i :5501
kill -9 [número]
```

### **Error: Módulos no encontrados**
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### **Error: Node.js no encontrado**
```bash
# Verificar instalación
node --version
npm --version

# Si no está instalado, descargar desde nodejs.org
```

---

## 📞 Soporte

Si tienes problemas:
1. Verificar que Node.js esté instalado correctamente
2. Verificar que todas las dependencias se instalaron
3. Verificar que el puerto 5501 esté libre
4. Revisar la consola del navegador para errores

---

**¡Listo! Tu proyecto estará funcionando en http://localhost:5501** 🚀
