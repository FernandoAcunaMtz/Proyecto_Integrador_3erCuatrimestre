# Lumina Learning - Campus Virtual LMS

Sistema de gestión de aprendizaje (LMS) universitario desarrollado con Node.js, Express y tecnologías web modernas.

## 🚀 Características Principales

- **Sistema de autenticación avanzado** con Auth0 y sesiones
- **Dashboard interactivo** para estudiantes y docentes
- **Gestión completa de cursos** con contenido multimedia
- **Sistema de pagos integrado** con checkout
- **Chatbot inteligente** para soporte estudiantil
- **Blog universitario** con gestión de contenido
- **Calendario académico** interactivo
- **Interfaz responsive** con Bootstrap 5 y CSS moderno
- **Sistema de monitoreo** y analytics

## 📁 Estructura del Proyecto

```
├── 📄 index.html              # Página principal
├── 📄 server.js               # Servidor principal Express
├── 📄 app.js                  # Configuración de la aplicación
├── 📄 config.js               # Configuración general
├── 📄 check-system.js         # Verificación del sistema
├── 📄 chatbot-server.js       # Servidor del chatbot
├── 📄 package.json            # Dependencias y scripts
├── 📄 .gitignore              # Archivos ignorados por Git
│
├── 📁 html/                   # Páginas HTML
│   ├── 📄 admin.html          # Panel de administración
│   ├── 📄 login.html          # Página de login
│   ├── 📄 courses.html        # Catálogo de cursos
│   ├── 📄 checkout.html       # Proceso de pago
│   ├── 📄 profile.html        # Perfil de usuario
│   ├── 📄 blog.html           # Blog universitario
│   ├── 📄 contact.html        # Página de contacto
│   ├── 📄 calendar.html       # Calendario académico
│   ├── 📄 schedule.html       # Horarios
│   ├── 📄 settings.html       # Configuraciones
│   ├── 📄 student-courses.html # Cursos del estudiante
│   ├── 📄 docente.html        # Panel docente
│   ├── 📄 monitoreo.html      # Sistema de monitoreo
│   ├── 📄 cursos-venta.html   # Página de venta de cursos
│   ├── 📄 callback.html       # Callback de autenticación
│   └── 📁 cursos/             # Páginas específicas de cursos
│
├── 📁 js/                     # JavaScript del cliente
│   ├── 📄 main.js             # JavaScript principal
│   ├── 📄 auth.js             # Autenticación
│   ├── 📄 auth0-config.js     # Configuración Auth0
│   ├── 📄 auth-guard.js       # Protección de rutas
│   ├── 📄 login.js            # Lógica de login
│   ├── 📄 logout.js           # Lógica de logout
│   ├── 📄 courses.js          # Gestión de cursos
│   ├── 📄 checkout.js         # Proceso de pago
│   ├── 📄 chatbot.js          # Funcionalidad del chatbot
│   ├── 📄 navigation.js       # Navegación
│   ├── 📄 animations.js       # Animaciones
│   ├── 📄 parallax-effect.js  # Efectos parallax
│   ├── 📄 footer-utils.js     # Utilidades del footer
│   ├── 📄 student-courses.js  # Cursos del estudiante
│   └── 📄 cursos-venta.js     # Lógica de venta
│
├── 📁 styles/                 # Estilos CSS
│   ├── 📄 main.css            # Estilos principales
│   ├── 📄 unified-styles.css  # Estilos unificados
│   ├── 📄 login.css           # Estilos de login
│   ├── 📄 courses.css         # Estilos de cursos
│   ├── 📄 checkout.css        # Estilos de checkout
│   ├── 📄 profile.css         # Estilos de perfil
│   ├── 📄 blog.css            # Estilos del blog
│   ├── 📄 contact.css         # Estilos de contacto
│   ├── 📄 settings.css        # Estilos de configuración
│   ├── 📄 course-player.css   # Reproductor de cursos
│   ├── 📄 analytics-modal.css # Modal de analytics
│   ├── 📄 chatbot.css         # Estilos del chatbot
│   └── 📄 cursos-venta.css    # Estilos de venta
│
├── 📁 components/             # Componentes React/JS
│   ├── 📄 Dashboard.js        # Componente dashboard
│   ├── 📄 Navbar.js           # Barra de navegación
│   ├── 📄 Footer.js           # Pie de página
│   ├── 📄 Hero.js             # Sección hero
│   ├── 📄 Courses.js          # Componente de cursos
│   ├── 📄 FeaturedCourses.js  # Cursos destacados
│   ├── 📄 Blog.js             # Componente del blog
│   ├── 📄 Contact.js          # Componente de contacto
│   ├── 📄 Calendar.js         # Componente de calendario
│   ├── 📄 Schedule.js         # Componente de horarios
│   ├── 📄 Stats.js            # Estadísticas
│   ├── 📄 Administration.js   # Administración
│   ├── 📄 Modals.js           # Modales
│   └── 📄 CoursesEst.js       # Cursos del estudiante
│
├── 📁 routes/                 # Rutas del servidor
│   ├── 📄 auth.js             # Rutas de autenticación
│   ├── 📄 api.js              # API endpoints
│   └── 📄 chatbot.js          # Rutas del chatbot
│
├── 📁 public/                 # Archivos estáticos públicos
│   ├── 📁 components/         # Componentes públicos
│   ├── 📁 js/                 # JavaScript público
│   └── 📁 styles/             # Estilos públicos
│
├── 📁 img/                    # Imágenes
│   ├── 📄 LuminaLogoNoText.webp
│   ├── 📄 LuminaLogoNoTextBlanco.webp
│   ├── 📄 default-avatar.png
│   └── 📄 fondo-body.jpg
│
├── 📁 video/                  # Videos
│   └── 📄 BackgroundTechFinal.mp4
│
├── 📁 docs/                   # Documentación
│   ├── 📄 AUTH0_SETUP.md      # Configuración Auth0
│   ├── 📄 AUTH0_ROLES_PERMISSIONS.md
│   ├── 📄 CHATBOT_SETUP.md    # Configuración del chatbot
│   ├── 📄 INSTALACION_CHATBOT.md
│   ├── 📄 INTEGRACION_CHATBOT_5501.md
│   ├── 📄 URLS_ACCESO.md      # URLs de acceso
│   └── 📄 EXPORTAR_PROYECTO.md
│
├── 📁 dev-files/              # Archivos de desarrollo
│   ├── 📄 test-chatbot.html   # Pruebas del chatbot
│   ├── 📄 lumina-learning-portable.zip
│   ├── 📄 crear-zip.bat       # Script para crear ZIP
│   ├── 📄 start-chatbot.bat   # Iniciar chatbot (Windows)
│   └── 📄 start-chatbot.sh    # Iniciar chatbot (Linux/Mac)
│
└── 📁 trickle/                # Recursos adicionales
    ├── 📁 assets/             # Assets del trickle
    ├── 📁 notes/              # Notas
    └── 📁 rules/              # Reglas
```

## 🛠️ Instalación

1. **Clona el repositorio**
```bash
git clone <url-del-repositorio>
cd "POO HTML"
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
   - Crea un archivo `.env` basado en la configuración de Auth0
   - Configura las credenciales del chatbot
   - Revisa la documentación en `docs/`

4. **Inicia el servidor**
```bash
npm start
```

Para desarrollo con auto-reload:
```bash
npm run dev
```

## 🔧 Configuración

### Auth0 Setup
Revisa `docs/AUTH0_SETUP.md` para configurar la autenticación.

### Chatbot Setup
Revisa `docs/CHATBOT_SETUP.md` para configurar el chatbot.

### URLs de Acceso
Consulta `docs/URLS_ACCESO.md` para las URLs del sistema.

## 🚀 Scripts Disponibles

- `npm start` - Inicia el servidor de producción
- `npm run dev` - Inicia el servidor de desarrollo con nodemon
- `npm test` - Ejecuta las pruebas (pendiente de implementar)

## 📚 Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Express Session** - Gestión de sesiones
- **JWT** - Tokens de autenticación
- **bcryptjs** - Encriptación de contraseñas
- **Helmet** - Seguridad HTTP
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos y responsive
- **JavaScript ES6+** - Funcionalidad del cliente
- **Bootstrap 5** - Framework CSS
- **Font Awesome** - Iconografía

### Servicios Externos
- **Auth0** - Autenticación y autorización
- **Chatbot API** - Soporte estudiantil inteligente

## 👥 Roles y Permisos

Consulta `docs/AUTH0_ROLES_PERMISSIONS.md` para información detallada sobre roles y permisos del sistema.

## 📝 Notas de Desarrollo

- El proyecto mantiene compatibilidad con rutas existentes
- Los archivos de desarrollo están organizados en `dev-files/`
- La documentación está centralizada en `docs/`
- Se eliminaron archivos vacíos innecesarios

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, consulta la documentación en la carpeta `docs/` o contacta al equipo de desarrollo.