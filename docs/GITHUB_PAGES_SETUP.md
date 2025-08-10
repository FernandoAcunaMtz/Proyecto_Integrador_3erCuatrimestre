# Configuración de GitHub Pages para Lumina Learning

## 🚀 Pasos para Desplegar en GitHub Pages

### 1. Preparar el Repositorio

#### Crear el repositorio en GitHub:
1. Ve a [GitHub](https://github.com)
2. Haz clic en "New repository"
3. Nombra tu repositorio (ej: `lumina-learning-lms`)
4. Selecciona "Public" o "Private"
5. **NO** inicialices con README, .gitignore o licencia
6. Haz clic en "Create repository"

### 2. Configurar el Repositorio Local

#### Actualizar package.json:
Reemplaza en `package.json`:
```json
"homepage": "https://[tu-usuario].github.io/[nombre-del-repositorio]",
"repository": {
  "type": "git",
  "url": "git+https://github.com/[tu-usuario]/[nombre-del-repositorio].git"
}
```

**Ejemplo:**
```json
"homepage": "https://fernandoacuna.github.io/lumina-learning-lms",
"repository": {
  "type": "git",
  "url": "git+https://github.com/fernandoacuna/lumina-learning-lms.git"
}
```

### 3. Subir el Código a GitHub

```bash
# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Lumina Learning LMS"

# Agregar el repositorio remoto
git remote add origin https://github.com/[tu-usuario]/[nombre-del-repositorio].git

# Subir a la rama main
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages

#### Opción A: GitHub Pages Automático
1. Ve a tu repositorio en GitHub
2. Ve a "Settings" → "Pages"
3. En "Source", selecciona "Deploy from a branch"
4. En "Branch", selecciona "main" y "/ (root)"
5. Haz clic en "Save"

#### Opción B: GitHub Actions (Recomendado)
1. Los archivos `.github/workflows/` ya están configurados
2. Ve a "Settings" → "Pages"
3. En "Source", selecciona "GitHub Actions"
4. El workflow se ejecutará automáticamente

### 5. Configurar Variables de Entorno

#### Para GitHub Pages (Variables de Entorno):
1. Ve a "Settings" → "Secrets and variables" → "Actions"
2. Agrega las siguientes variables:
   - `AUTH0_DOMAIN`
   - `AUTH0_CLIENT_ID`
   - `AUTH0_CLIENT_SECRET`
   - `CHATBOT_API_KEY`

### 6. Verificar el Despliegue

#### URL del Sitio:
- Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-del-repositorio]`
- Ejemplo: `https://fernandoacuna.github.io/lumina-learning-lms`

#### Verificar Estado:
1. Ve a la pestaña "Actions" en tu repositorio
2. Verifica que el workflow se ejecute correctamente
3. Ve a "Settings" → "Pages" para ver el estado del despliegue

## 🔧 Configuraciones Adicionales

### Personalizar el Dominio (Opcional)
1. Ve a "Settings" → "Pages"
2. En "Custom domain", agrega tu dominio
3. Configura los registros DNS correspondientes

### Configurar HTTPS
- GitHub Pages proporciona HTTPS automáticamente
- No se requiere configuración adicional

## 🐛 Solución de Problemas

### Error: "Page not found"
- Verifica que el archivo `index.html` esté en la raíz
- Asegúrate de que las rutas en el código sean relativas

### Error: "Build failed"
- Revisa los logs en "Actions"
- Verifica que todas las dependencias estén en `package.json`

### Error: "Assets not loading"
- Verifica que las rutas de imágenes y CSS sean correctas
- Asegúrate de que los archivos estén incluidos en el repositorio

## 📝 Notas Importantes

### Limitaciones de GitHub Pages:
- **Solo archivos estáticos**: No ejecuta Node.js en el servidor
- **Sin base de datos**: Usa localStorage o APIs externas
- **Sin variables de entorno**: Usa configuración en el cliente

### Alternativas para Funcionalidad Completa:
1. **Vercel**: Para aplicaciones Node.js completas
2. **Netlify**: Para sitios estáticos con funciones
3. **Heroku**: Para aplicaciones completas con base de datos

## 🔄 Actualizaciones

### Para actualizar el sitio:
```bash
# Hacer cambios en el código
git add .
git commit -m "Update: [descripción de cambios]"
git push origin main
```

### El sitio se actualizará automáticamente en 1-5 minutos

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en "Actions"
2. Verifica la configuración en "Settings" → "Pages"
3. Consulta la documentación de GitHub Pages
4. Revisa los archivos de configuración en `.github/workflows/`

---

**Última actualización**: [Fecha actual]
**Versión**: 1.0
