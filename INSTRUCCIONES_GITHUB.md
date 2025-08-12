# 🚀 Instrucciones para Subir a GitHub y Activar GitHub Pages

## ✅ Tu proyecto está listo para GitHub Pages

He preparado todo tu proyecto para que puedas subirlo a GitHub y activar GitHub Pages. Aquí están los pasos finales:

## 📋 Pasos para Subir a GitHub

### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en el botón verde "New" o "New repository"
3. **Nombre del repositorio**: `lumina-learning-lms` (o el nombre que prefieras)
4. **Descripción**: `Sistema LMS universitario con Node.js, Express y tecnologías web modernas`
5. **Visibilidad**: Selecciona "Public" o "Private"
6. **IMPORTANTE**: **NO** marques "Add a README file", "Add .gitignore", o "Choose a license"
7. Haz clic en "Create repository"

### 2. Actualizar la Configuración Local

**IMPORTANTE**: Antes de subir, necesitas actualizar el `package.json` con tu información:

1. Abre el archivo `package.json`
2. Busca estas líneas y reemplázalas con tu información:

```json
"homepage": "https://[TU-USUARIO].github.io/[NOMBRE-DEL-REPOSITORIO]",
"repository": {
  "type": "git",
  "url": "git+https://github.com/[TU-USUARIO]/[NOMBRE-DEL-REPOSITORIO].git"
}
```

**Ejemplo con tu usuario:**
```json
"homepage": "https://fernandoacuna.github.io/lumina-learning-lms",
"repository": {
  "type": "git",
  "url": "git+https://github.com/fernandoacuna/lumina-learning-lms.git"
}
```

### 3. Subir el Código a GitHub

Ejecuta estos comandos en tu terminal (ya estás en la carpeta correcta):

```bash
# Agregar el repositorio remoto (reemplaza con tu información)
git remote add origin https://github.com/[TU-USUARIO]/[NOMBRE-DEL-REPOSITORIO].git

# Cambiar a la rama main
git branch -M main

# Subir el código
git push -u origin main
```

### 4. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** (pestaña superior)
3. En el menú lateral izquierdo, busca **Pages**
4. En **Source**, selecciona **"Deploy from a branch"**
5. En **Branch**, selecciona **"main"** y **"/ (root)"**
6. Haz clic en **Save**

### 5. Configurar GitHub Actions (Opcional pero Recomendado)

1. En la misma página de Settings → Pages
2. Cambia **Source** a **"GitHub Actions"**
3. Esto usará los workflows que ya están configurados

## 🌐 Tu Sitio Web

Una vez configurado, tu sitio estará disponible en:
```
https://[TU-USUARIO].github.io/[NOMBRE-DEL-REPOSITORIO]
```

**Ejemplo:**
```
https://fernandoacuna.github.io/lumina-learning-lms
```

## ⏱️ Tiempo de Despliegue

- **Primera vez**: 5-10 minutos
- **Actualizaciones**: 1-3 minutos

## 🔧 Configuraciones Adicionales

### Variables de Entorno (Si las necesitas)
1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Agrega las variables que necesites:
   - `AUTH0_DOMAIN`
   - `AUTH0_CLIENT_ID`
   - `AUTH0_CLIENT_SECRET`
   - `CHATBOT_API_KEY`

### Dominio Personalizado (Opcional)
1. En **Settings** → **Pages**
2. En **Custom domain**, agrega tu dominio
3. Configura los registros DNS

## 📝 Para Futuras Actualizaciones

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Update: [descripción de los cambios]"
git push origin main
```

El sitio se actualizará automáticamente.

## 🐛 Si Algo No Funciona

### Error: "Repository not found"
- Verifica que el nombre del repositorio sea correcto
- Asegúrate de que el repositorio exista en GitHub

### Error: "Page not found"
- Verifica que GitHub Pages esté activado
- Revisa que el archivo `index.html` esté en la raíz

### Error: "Build failed"
- Ve a la pestaña **Actions** en tu repositorio
- Revisa los logs para ver el error específico

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación en la carpeta `docs/`
2. Consulta `docs/GITHUB_PAGES_SETUP.md`
3. Verifica los logs en la pestaña **Actions**

## 🎉 ¡Listo!

Una vez que completes estos pasos, tu proyecto **Lumina Learning LMS** estará disponible en línea y podrás compartir el enlace con cualquier persona.

---

**Proyecto preparado por**: Asistente de IA
**Fecha**: [Fecha actual]
**Versión**: 1.0
