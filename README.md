# 🎓 Lumina Learning - Campus Virtual LMS

**Sistema de Gestión de Aprendizaje (LMS) Universitario Avanzado**

Un campus virtual completo desarrollado con tecnologías web modernas que proporciona una experiencia educativa integral para estudiantes, docentes y administradores universitarios.

## 🌟 Descripción del Proyecto

Lumina Learning es una plataforma LMS (Learning Management System) diseñada específicamente para instituciones educativas universitarias. El sistema integra múltiples funcionalidades que facilitan la gestión académica, el aprendizaje en línea y la administración educativa.

### 🎯 Objetivos Principales
- **Digitalización educativa**: Transformar la experiencia de aprendizaje tradicional en un entorno digital interactivo
- **Gestión académica integral**: Centralizar todas las operaciones académicas en una sola plataforma
- **Experiencia de usuario optimizada**: Interfaz intuitiva y responsive para todos los dispositivos
- **Escalabilidad**: Arquitectura que permite el crecimiento y adaptación a diferentes necesidades educativas

## 🚀 Características Principales

### 👨‍🎓 **Para Estudiantes**
- **Dashboard personalizado** con progreso académico
- **Catálogo de cursos** con filtros avanzados y búsqueda
- **Reproductor de cursos** con contenido multimedia
- **Sistema de pagos** integrado para compra de cursos
- **Perfil personalizable** con información académica
- **Calendario académico** interactivo
- **Chatbot de soporte** para consultas 24/7

### 👨‍🏫 **Para Docentes**
- **Panel docente** con gestión de cursos
- **Herramientas de evaluación** y seguimiento
- **Gestión de contenido** multimedia
- **Analytics de rendimiento** estudiantil
- **Comunicación directa** con estudiantes

### 👨‍💼 **Para Administradores**
- **Panel de administración** completo
- **Gestión de usuarios** y roles
- **Monitoreo del sistema** en tiempo real
- **Reportes y analytics** detallados
- **Configuración del sistema** centralizada

## 🏗️ Arquitectura del Sistema

### **📐 Arquitectura General**
Lumina Learning LMS está construido siguiendo una **arquitectura de tres capas** moderna y escalable:

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   HTML5     │ │    CSS3     │ │ JavaScript  │           │
│  │  Semántico  │ │   Moderno   │ │    ES6+     │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS LOGIC LAYER                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Node.js   │ │  Express.js │ │   React     │           │
│  │   Runtime   │ │  Framework  │ │ Components  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    DATA & SERVICES LAYER                    │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Auth0     │ │   OpenAI    │ │   APIs      │           │
│  │  Auth API   │ │  Chatbot    │ │  External   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

### **🎯 Beneficios de la Arquitectura de Tres Capas**

#### **🏗️ Ventajas Arquitectónicas**

##### **1. Separación de Responsabilidades (Separation of Concerns)**
```
✅ PRESENTATION LAYER: Solo se preocupa por mostrar información
✅ BUSINESS LOGIC LAYER: Solo maneja la lógica de negocio
✅ DATA & SERVICES LAYER: Solo gestiona datos y servicios externos
```

**Beneficios:**
- **Código más limpio** y fácil de entender
- **Mantenimiento simplificado** - cada capa tiene una función específica
- **Menos errores** - cambios en una capa no afectan las otras
- **Mejor organización** del código

##### **2. Escalabilidad Horizontal y Vertical**
```
🔄 ESCALABILIDAD HORIZONTAL: Puedes agregar más servidores
🔄 ESCALABILIDAD VERTICAL: Puedes mejorar cada capa independientemente
```

**Beneficios:**
- **Crecimiento sin límites** - tu aplicación puede manejar más usuarios
- **Optimización selectiva** - mejoras solo las partes que necesitan mejoras
- **Distribución de carga** - balancea el trabajo entre múltiples servidores
- **Adaptación a la demanda** - escala según las necesidades

##### **3. Reutilización de Código**
```
🔄 BUSINESS LOGIC: La misma lógica puede servir a múltiples interfaces
🔄 DATA SERVICES: Los mismos servicios pueden ser usados por diferentes aplicaciones
```

**Beneficios:**
- **Desarrollo más rápido** - no repites código
- **Consistencia** - misma lógica en todas partes
- **Menos bugs** - menos código duplicado = menos errores
- **Facilita testing** - pruebas más simples y efectivas

#### **🔧 Beneficios Técnicos**

##### **4. Mantenibilidad Mejorada**
```
🔧 CAMBIOS AISLADOS: Modificar una capa no afecta las otras
🔧 DEBUGGING FÁCIL: Problemas localizados en capas específicas
🔧 ACTUALIZACIONES SEGURAS: Puedes actualizar componentes sin romper todo
```

**Ejemplo práctico:**
- Si quieres cambiar el diseño (Presentation Layer), no tocas la lógica de negocio
- Si actualizas Auth0 (Data Layer), no afectas la interfaz de usuario
- Si modificas la lógica de cursos (Business Layer), no cambias la presentación

##### **5. Flexibilidad Tecnológica**
```
🔄 PRESENTATION: Puedes cambiar de HTML/CSS a React Native para móviles
🔄 BUSINESS LOGIC: Puedes migrar de Node.js a Python sin cambiar la presentación
🔄 DATA SERVICES: Puedes cambiar de Auth0 a Firebase sin afectar la lógica
```

**Beneficios:**
- **Adaptación tecnológica** - puedes usar las mejores herramientas para cada capa
- **Migración gradual** - puedes cambiar tecnologías paso a paso
- **Experimentos seguros** - pruebas nuevas tecnologías sin riesgo
- **Ventaja competitiva** - siempre usas las tecnologías más actuales

##### **6. Seguridad Mejorada**
```
🔒 PRESENTATION: No tiene acceso directo a datos sensibles
🔒 BUSINESS LOGIC: Valida y sanitiza todos los datos
🔒 DATA SERVICES: Maneja autenticación y autorización
```

**Beneficios:**
- **Protección de datos** - cada capa tiene su nivel de seguridad
- **Validación múltiple** - datos verificados en varias capas
- **Control de acceso** - permisos manejados de forma centralizada
- **Auditoría** - fácil rastrear dónde ocurren los problemas

#### **💼 Beneficios de Negocio**

##### **7. Desarrollo en Equipo**
```
👥 FRONTEND TEAM: Trabaja en Presentation Layer
👥 BACKEND TEAM: Trabaja en Business Logic Layer
👥 DEVOPS TEAM: Trabaja en Data & Services Layer
```

**Beneficios:**
- **Trabajo paralelo** - equipos pueden trabajar simultáneamente
- **Especialización** - cada equipo se enfoca en su área de expertise
- **Menos conflictos** - menos interferencia entre equipos
- **Mejor productividad** - desarrollo más eficiente

##### **8. Testing y Calidad**
```
🧪 UNIT TESTS: Pruebas específicas para cada capa
🧪 INTEGRATION TESTS: Pruebas de comunicación entre capas
🧪 END-TO-END TESTS: Pruebas del flujo completo
```

**Beneficios:**
- **Detección temprana** de errores
- **Cobertura completa** de pruebas
- **Confianza** en el código
- **Despliegues seguros**

##### **9. Performance Optimizada**
```
⚡ PRESENTATION: Carga rápida con lazy loading
⚡ BUSINESS LOGIC: Caching inteligente de datos
⚡ DATA SERVICES: Conexiones optimizadas a APIs
```

**Beneficios:**
- **Mejor experiencia de usuario** - páginas más rápidas
- **Menor uso de recursos** - servidores más eficientes
- **Escalabilidad** - maneja más usuarios con menos recursos
- **Competitividad** - tu aplicación es más rápida que la competencia

#### **🚀 Beneficios para el Futuro**

##### **10. Adaptabilidad a Nuevas Tecnologías**
```
🔮 AI/ML: Fácil integración en Business Logic Layer
🔮 IoT: Nuevas interfaces en Presentation Layer
🔮 Blockchain: Nuevos servicios en Data Layer
```

**Beneficios:**
- **Preparado para el futuro** - tu aplicación evoluciona con la tecnología
- **Innovación constante** - puedes agregar nuevas funcionalidades fácilmente
- **Ventaja competitiva** - siempre a la vanguardia tecnológica
- **Inversión protegida** - tu código no se vuelve obsoleto

##### **11. Monitoreo y Analytics**
```
📊 PRESENTATION: Métricas de experiencia de usuario
📊 BUSINESS LOGIC: Métricas de rendimiento de la aplicación
📊 DATA SERVICES: Métricas de uso de APIs externas
```

**Beneficios:**
- **Visibilidad completa** del sistema
- **Optimización basada en datos** - mejoras dirigidas
- **Detección proactiva** de problemas
- **Toma de decisiones informada**

#### **🎯 Resumen de Beneficios para tu Exposición**

**Para tu presentación, puedes destacar:**

1. **"Mi arquitectura de tres capas me permite escalar sin límites"**
2. **"Cada capa tiene una responsabilidad específica, lo que hace el código más mantenible"**
3. **"Puedo cambiar tecnologías sin afectar el resto del sistema"**
4. **"La seguridad está implementada en múltiples niveles"**
5. **"Mi equipo puede trabajar en paralelo sin interferencias"**
6. **"El sistema está preparado para futuras tecnologías como IA y blockchain"**
7. **"La performance está optimizada en cada capa"**
8. **"El testing es más efectivo y completo"**

**Frases impactantes:**
- *"Esta arquitectura es la misma que usan empresas como Netflix, Amazon y Google"*
- *"Mi aplicación puede crecer de 100 a 1 millón de usuarios sin cambiar la estructura"*
- *"Puedo agregar nuevas funcionalidades sin tocar el código existente"*
- *"La seguridad está implementada como en aplicaciones bancarias"*

### **🛠️ Stack Tecnológico Detallado**

#### **🌐 Frontend Technologies**
- **HTML5** - Estructura semántica y accesible con elementos modernos
- **CSS3** - Estilos avanzados con Flexbox, Grid, animaciones y variables CSS
- **JavaScript ES6+** - Programación funcional, async/await, módulos ES6
- **Bootstrap 5** - Framework CSS responsive con componentes predefinidos
- **Font Awesome 6** - Biblioteca de iconos vectoriales profesionales

#### **⚙️ Backend Technologies**
- **Node.js** - Runtime de JavaScript del lado del servidor (v14+)
- **Express.js** - Framework web minimalista y flexible
- **Express Session** - Gestión de sesiones de usuario con almacenamiento
- **JWT (JSON Web Tokens)** - Autenticación stateless y segura
- **bcryptjs** - Encriptación de contraseñas con salt
- **Helmet** - Middleware de seguridad HTTP
- **CORS** - Cross-Origin Resource Sharing
- **Rate Limiting** - Protección contra ataques de fuerza bruta

#### **🔧 Componentes y Librerías**
- **React Components** - Componentes reutilizables para la interfaz
- **Axios** - Cliente HTTP para peticiones a APIs
- **dotenv** - Gestión de variables de entorno
- **express-rate-limit** - Limitación de velocidad de requests
- **nodemon** - Auto-reload para desarrollo

### **🔌 Integración con APIs Externas**

#### **🔐 Auth0 - Autenticación y Autorización**
```javascript
// Configuración Auth0
const auth0Config = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  audience: process.env.AUTH0_AUDIENCE,
  scope: 'openid profile email'
};
```

**Características de Auth0:**
- **Single Sign-On (SSO)** - Acceso unificado a múltiples aplicaciones
- **Social Login** - Integración con Google, Facebook, GitHub, etc.
- **Multi-Factor Authentication (MFA)** - Seguridad adicional
- **Role-Based Access Control (RBAC)** - Control granular de permisos
- **Universal Login** - Página de login personalizable

#### **🤖 OpenAI Chatbot - Inteligencia Artificial**
```javascript
// Integración con OpenAI API
const openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-3.5-turbo',
  maxTokens: 150,
  temperature: 0.7
};
```

**Funcionalidades del Chatbot:**
- **Soporte 24/7** - Asistencia automática para estudiantes
- **Respuestas Contextuales** - Basadas en el contenido del curso
- **Integración con LMS** - Acceso a información académica
- **Análisis de Sentimientos** - Detección de emociones del usuario
- **Recomendaciones Personalizadas** - Sugerencias de cursos

### **🏛️ Patrones de Arquitectura**

#### **MVC (Model-View-Controller)**
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    VIEW     │◄──►│ CONTROLLER  │◄──►│    MODEL    │
│  (HTML/CSS) │    │ (Express.js)│    │ (Business   │
│             │    │             │    │   Logic)    │
└─────────────┘    └─────────────┘    └─────────────┘
```

#### **RESTful API Design**
```javascript
// Endpoints principales
GET    /api/courses          // Obtener todos los cursos
GET    /api/courses/:id      // Obtener curso específico
POST   /api/courses          // Crear nuevo curso
PUT    /api/courses/:id      // Actualizar curso
DELETE /api/courses/:id      // Eliminar curso
```

### **🔒 Seguridad y Autenticación**

#### **Capa de Seguridad**
- **Helmet.js** - Headers de seguridad HTTP
- **CORS** - Control de acceso entre dominios
- **Rate Limiting** - Protección contra ataques DDoS
- **Input Validation** - Validación de datos de entrada
- **SQL Injection Protection** - Prevención de inyecciones
- **XSS Protection** - Protección contra Cross-Site Scripting

#### **Flujo de Autenticación**
```
1. Usuario accede → 2. Redirect a Auth0 → 3. Login/Signup
4. Callback con token → 5. Validación JWT → 6. Sesión creada
7. Acceso a recursos protegidos
```

### **📊 Estructura de Datos**

#### **Modelos de Usuario**
```javascript
// Estructura de usuario
{
  id: String,
  email: String,
  name: String,
  role: ['student', 'teacher', 'admin'],
  profile: {
    avatar: String,
    bio: String,
    preferences: Object
  },
  academic: {
    courses: Array,
    progress: Object,
    certificates: Array
  }
}
```

#### **Modelos de Curso**
```javascript
// Estructura de curso
{
  id: String,
  title: String,
  description: String,
  instructor: String,
  modules: Array,
  price: Number,
  duration: String,
  level: String,
  tags: Array,
  multimedia: {
    videos: Array,
    documents: Array,
    images: Array
  }
}
```

### **🚀 Optimización y Rendimiento**

#### **Frontend Optimization**
- **Lazy Loading** - Carga diferida de componentes
- **Code Splitting** - División de código por rutas
- **Image Optimization** - Compresión y formatos modernos (WebP)
- **CSS Minification** - Reducción de tamaño de archivos
- **CDN Integration** - Distribución de contenido

#### **Backend Optimization**
- **Caching** - Almacenamiento en caché de respuestas
- **Database Indexing** - Optimización de consultas
- **Connection Pooling** - Gestión eficiente de conexiones
- **Compression** - Compresión gzip/brotli
- **Load Balancing** - Distribución de carga

### **🔧 Herramientas de Desarrollo**

#### **Development Tools**
- **Nodemon** - Auto-reload para desarrollo
- **ESLint** - Linting de código JavaScript
- **Prettier** - Formateo automático de código
- **Git** - Control de versiones
- **GitHub Pages** - Hosting y despliegue

#### **Testing & Quality**
- **Jest** - Framework de testing (preparado)
- **Supertest** - Testing de APIs
- **Cypress** - Testing end-to-end (futuro)
- **Code Coverage** - Cobertura de código

### **📱 Responsive Design**

#### **Breakpoints**
```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small devices */ }
@media (min-width: 768px) { /* Medium devices */ }
@media (min-width: 992px) { /* Large devices */ }
@media (min-width: 1200px) { /* Extra large devices */ }
```

#### **Componentes Responsive**
- **Navbar** - Adaptable a móviles con menú hamburguesa
- **Grid System** - Sistema de rejilla flexible
- **Images** - Imágenes responsivas con srcset
- **Typography** - Tipografía escalable
- **Touch Interactions** - Optimizado para dispositivos táctiles

## 📁 Estructura del Proyecto

```
📦 Lumina Learning LMS
├── 🏠 Páginas Principales
│   ├── 📄 index.html              # Página principal del campus
│   ├── 📄 login.html              # Sistema de autenticación
│   └── 📄 callback.html           # Callback de Auth0
│
├── 🎓 Área Académica
│   ├── 📄 courses.html            # Catálogo completo de cursos
│   ├── 📄 student-courses.html    # Cursos inscritos del estudiante
│   ├── 📄 cursos-venta.html       # Página de venta de cursos
│   └── 📁 cursos/                 # Páginas específicas de cursos
│   │   ├── 📄 html-css-avanzado.html
│   │   ├── 📄 javascript-desde-cero.html
│   │   └── 📄 react-para-principiantes.html
│
├── 👤 Gestión de Usuarios
│   ├── 📄 profile.html            # Perfil de usuario
│   ├── 📄 settings.html           # Configuraciones del usuario
│   └── 📄 admin.html              # Panel de administración
│
├── 💰 Sistema de Pagos
│   ├── 📄 checkout.html           # Proceso de pago
│   └── 📄 cursos-venta.html       # Catálogo de venta
│
├── 📚 Recursos Educativos
│   ├── 📄 blog.html               # Blog universitario
│   ├── 📄 calendar.html           # Calendario académico
│   └── 📄 schedule.html           # Horarios de clases
│
├── 📞 Comunicación y Soporte
│   ├── 📄 contact.html            # Página de contacto
│   ├── 📄 monitoreo.html          # Sistema de monitoreo
│   └── 📄 docente.html            # Panel docente
│
├── ⚙️ Backend y Servicios
│   ├── 📄 server.js               # Servidor principal Express
│   ├── 📄 app.js                  # Configuración de la aplicación
│   ├── 📄 config.js               # Configuración general
│   ├── 📄 chatbot-server.js       # Servidor del chatbot
│   └── 📄 check-system.js         # Verificación del sistema
│
├── 🎨 Frontend y Estilos
│   ├── 📁 js/                     # JavaScript del cliente
│   ├── 📁 styles/                 # Estilos CSS
│   ├── 📁 components/             # Componentes React/JS
│   └── 📁 public/                 # Archivos estáticos
│
├── 🔐 Autenticación y Seguridad
│   ├── 📁 routes/                 # Rutas del servidor
│   └── 📁 js/auth*.js             # Archivos de autenticación
│
├── 📖 Documentación
│   ├── 📁 docs/                   # Documentación técnica
│   └── 📁 dev-files/              # Archivos de desarrollo
│
└── 🎬 Recursos Multimedia
    ├── 📁 img/                    # Imágenes del proyecto
    ├── 📁 video/                  # Videos de fondo
    └── 📁 trickle/                # Recursos adicionales
```

## 🚀 Instalación y Configuración

### **Requisitos Previos**
- Node.js >= 14.0.0
- npm o yarn
- Cuenta de Auth0 (para autenticación)
- Acceso a API de chatbot (opcional)

### **Pasos de Instalación**

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd "POO HTML"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
cp .env.example .env
# Editar .env con tus credenciales
```

4. **Configurar Auth0**
   - Crear aplicación en Auth0
   - Configurar URLs de callback
   - Revisar `docs/AUTH0_SETUP.md`

5. **Iniciar el servidor**
```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start
```

### **Configuración del Chatbot (Opcional)**
```bash
# Revisar documentación
docs/CHATBOT_SETUP.md
docs/INSTALACION_CHATBOT.md
```

## 📋 Funcionalidades por Área

### **🎓 Gestión Académica**
- **Catálogo de Cursos**: Búsqueda, filtros y categorización
- **Inscripción**: Proceso de matrícula simplificado
- **Progreso**: Seguimiento del avance académico
- **Evaluaciones**: Sistema de calificaciones
- **Certificados**: Generación automática de certificados

### **💰 Sistema de Pagos**
- **Carrito de Compras**: Gestión de productos educativos
- **Checkout Seguro**: Proceso de pago protegido
- **Facturación**: Generación de facturas
- **Historial**: Registro de transacciones

### **👥 Gestión de Usuarios**
- **Perfiles**: Información personal y académica
- **Roles**: Estudiante, Docente, Administrador
- **Permisos**: Control de acceso granular
- **Configuraciones**: Preferencias personalizadas

### **📚 Contenido Educativo**
- **Blog**: Artículos y recursos educativos
- **Multimedia**: Videos, imágenes y documentos
- **Calendario**: Eventos académicos
- **Horarios**: Programación de clases

### **🤖 Inteligencia Artificial**
- **Chatbot**: Soporte estudiantil 24/7
- **Recomendaciones**: Cursos sugeridos
- **Analytics**: Análisis de comportamiento

## 🎯 Guía de Exposición del Proyecto

### **📋 Explicación de la Arquitectura para Presentaciones**

#### **🏗️ ¿Qué es la Arquitectura de Tres Capas?**

Tu proyecto **Lumina Learning LMS** está construido siguiendo una **arquitectura de tres capas**, que es un patrón de diseño muy profesional y escalable. Es como construir un edificio con tres pisos, donde cada piso tiene una función específica:

##### **🏠 Piso 1: PRESENTATION LAYER (Capa de Presentación)**
- **¿Qué hace?** Es lo que ve y toca el usuario final
- **Tecnologías:**
  - **HTML5 Semántico**: La estructura de tu sitio web (como los cimientos)
  - **CSS3 Moderno**: Los estilos y el diseño visual (como la decoración)
  - **JavaScript ES6+**: La interactividad y animaciones (como los interruptores y luces)

##### **🏢 Piso 2: BUSINESS LOGIC LAYER (Capa de Lógica de Negocio)**
- **¿Qué hace?** Contiene toda la lógica de tu aplicación educativa
- **Tecnologías:**
  - **Node.js Runtime**: El motor que ejecuta tu aplicación
  - **Express.js Framework**: El sistema que maneja las peticiones web
  - **React Components**: Componentes reutilizables para la interfaz

##### **🏭 Piso 3: DATA & SERVICES LAYER (Capa de Datos y Servicios)**
- **¿Qué hace?** Se conecta con servicios externos y maneja datos
- **Tecnologías:**
  - **Auth0 Auth API**: Sistema de autenticación profesional
  - **OpenAI Chatbot**: Inteligencia artificial para soporte
  - **APIs External**: Conexiones con otros servicios

#### **🔌 ¿Por qué son importantes las APIs Externas?**

##### **🔐 Auth0 - Tu Sistema de Seguridad**
```javascript
// Esto es como tener un portero muy inteligente
const auth0Config = {
  domain: process.env.AUTH0_DOMAIN,        // Tu dominio de Auth0
  clientId: process.env.AUTH0_CLIENT_ID,   // Tu ID de aplicación
  audience: process.env.AUTH0_AUDIENCE,    // Quién puede acceder
  scope: 'openid profile email'            // Qué información puede ver
};
```

**¿Qué hace Auth0 por ti?**
- **Single Sign-On (SSO)**: Los usuarios pueden acceder con Google, Facebook, etc.
- **Multi-Factor Authentication (MFA)**: Seguridad extra con códigos SMS
- **Role-Based Access Control (RBAC)**: Diferentes permisos para estudiantes, docentes y administradores

##### **🤖 OpenAI Chatbot - Tu Asistente Virtual**
```javascript
// Tu chatbot inteligente que ayuda a los estudiantes
const openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY,  // Tu clave de OpenAI
  model: 'gpt-3.5-turbo',              // El modelo de IA que usa
  maxTokens: 150,                      // Longitud máxima de respuesta
  temperature: 0.7                     // Qué tan creativas son las respuestas
};
```

**¿Qué hace el Chatbot?**
- **Soporte 24/7**: Responde preguntas de estudiantes a cualquier hora
- **Respuestas Contextuales**: Entiende el contexto del curso
- **Recomendaciones**: Sugiere cursos basándose en el perfil del estudiante

#### **🏛️ ¿Cómo está organizado tu código?**

##### **MVC (Model-View-Controller)**
Es como organizar una cocina profesional:
- **VIEW (Vista)**: Lo que ve el cliente (HTML/CSS) - como el comedor
- **CONTROLLER (Controlador)**: El chef que coordina todo (Express.js) - como el chef principal
- **MODEL (Modelo)**: Los ingredientes y recetas (Business Logic) - como la despensa

##### **RESTful API Design**
Tu aplicación se comunica como un restaurante:
```javascript
GET    /api/courses          // "Muéstrame todos los cursos disponibles"
GET    /api/courses/:id      // "Muéstrame el curso específico número X"
POST   /api/courses          // "Crea un nuevo curso"
PUT    /api/courses/:id      // "Actualiza el curso número X"
DELETE /api/courses/:id      // "Elimina el curso número X"
```

#### **🔒 ¿Cómo proteges tu aplicación?**

##### **Capa de Seguridad (Como un castillo medieval)**
- **Helmet.js**: Escudo que protege contra ataques web
- **CORS**: Controla quién puede acceder desde otros sitios
- **Rate Limiting**: Evita que alguien haga demasiadas peticiones
- **Input Validation**: Verifica que los datos que llegan sean correctos

##### **Flujo de Autenticación (Como un proceso de identificación)**
```
1. Usuario llega → 2. Lo rediriges a Auth0 → 3. Se registra/inicia sesión
4. Auth0 te devuelve un token → 5. Validas el token → 6. Creas una sesión
7. El usuario puede acceder a recursos protegidos
```

#### **📊 ¿Cómo organizas la información?**

##### **Modelos de Usuario (Como una ficha de estudiante)**
```javascript
{
  id: "12345",                    // Número de identificación
  email: "estudiante@email.com",  // Correo electrónico
  name: "Juan Pérez",             // Nombre completo
  role: "student",                // Tipo de usuario
  profile: {                      // Información personal
    avatar: "foto.jpg",
    bio: "Estudiante de programación"
  },
  academic: {                     // Información académica
    courses: ["curso1", "curso2"],
    progress: { curso1: "80%" },
    certificates: ["cert1", "cert2"]
  }
}
```

##### **Modelos de Curso (Como un catálogo de productos)**
```javascript
{
  id: "curso-001",
  title: "JavaScript desde Cero",
  description: "Aprende JavaScript desde lo básico",
  instructor: "Prof. García",
  price: 99.99,
  duration: "40 horas",
  level: "Principiante",
  multimedia: {
    videos: ["video1.mp4", "video2.mp4"],
    documents: ["apuntes.pdf"],
    images: ["imagen1.jpg"]
  }
}
```

### **💡 Puntos Clave para tu Exposición**

#### **🎯 Aspectos Destacados**
1. **Arquitectura Profesional**: Tu proyecto usa patrones de diseño empresarial
2. **Tecnologías Modernas**: Node.js, React, Express.js son tecnologías muy demandadas
3. **Seguridad Robusta**: Auth0 es usado por empresas como Microsoft y Adobe
4. **Inteligencia Artificial**: OpenAI te da un chatbot de nivel empresarial
5. **Escalabilidad**: Tu arquitectura puede crecer con tu proyecto
6. **Experiencia de Usuario**: Responsive design para todos los dispositivos

#### **🗣️ Frases Clave para tu Presentación**

##### **Apertura**
- *"Mi proyecto implementa una arquitectura de tres capas que separa claramente las responsabilidades"*
- *"Lumina Learning es un sistema LMS completo que integra las mejores tecnologías del mercado"*

##### **Tecnologías**
- *"Utilizo Node.js y Express.js para crear un backend robusto y escalable"*
- *"El frontend está construido con HTML5, CSS3 y JavaScript moderno"*
- *"Integro React Components para una interfaz de usuario dinámica"*

##### **Seguridad**
- *"Implemento Auth0 para una autenticación profesional y segura"*
- *"El sistema incluye múltiples capas de seguridad para proteger los datos"*
- *"Utilizo JWT tokens para mantener sesiones seguras"*

##### **Inteligencia Artificial**
- *"Integro OpenAI para proporcionar soporte inteligente 24/7"*
- *"El chatbot puede responder preguntas contextuales sobre los cursos"*
- *"La IA sugiere cursos personalizados basándose en el perfil del estudiante"*

##### **Experiencia de Usuario**
- *"El diseño responsive asegura que funcione perfectamente en cualquier dispositivo"*
- *"La interfaz es intuitiva y fácil de usar para todos los tipos de usuarios"*
- *"Implemento animaciones y transiciones suaves para una mejor experiencia"*

##### **Escalabilidad**
- *"La arquitectura es escalable y puede crecer con las necesidades de la institución"*
- *"El código está modularizado para facilitar el mantenimiento"*
- *"Puedo agregar nuevas funcionalidades sin afectar el sistema existente"*

#### **📝 Estructura Sugerida para tu Exposición**

##### **1. Introducción (2-3 minutos)**
- Presenta el problema que resuelve tu proyecto
- Menciona el objetivo principal
- Habla sobre el público objetivo

##### **2. Demostración del Sistema (5-7 minutos)**
- Muestra la página principal
- Navega por las diferentes secciones
- Demuestra el login y diferentes roles
- Muestra el chatbot en acción

##### **3. Arquitectura Técnica (3-4 minutos)**
- Explica la arquitectura de tres capas
- Menciona las tecnologías principales
- Habla sobre las APIs externas

##### **4. Características Destacadas (2-3 minutos)**
- Sistema de autenticación
- Chatbot inteligente
- Diseño responsive
- Sistema de pagos

##### **5. Conclusión (1-2 minutos)**
- Beneficios del proyecto
- Posibilidades de expansión
- Impacto en la educación

#### **🎤 Consejos para la Presentación**

##### **Antes de la Exposición**
- **Practica** tu presentación varias veces
- **Prepara** tu entorno de desarrollo
- **Ten listos** ejemplos de uso
- **Anticipa** posibles preguntas

##### **Durante la Exposición**
- **Mantén contacto visual** con tu audiencia
- **Habla con confianza** sobre tu trabajo
- **Usa ejemplos concretos** para explicar conceptos técnicos
- **Demuestra** las funcionalidades en vivo

##### **Para Preguntas Técnicas**
- **Explica** los conceptos de manera simple
- **Usa analogías** para conceptos complejos
- **Menciona** las mejores prácticas que sigues
- **Destaca** la escalabilidad de tu solución

#### **🔧 Preparación Técnica**

##### **Antes de la Demostración**
```bash
# Asegúrate de que todo funcione
npm install
npm run dev
# Verifica que el servidor esté corriendo en http://localhost:5502
```

##### **Puntos de Verificación**
- ✅ Servidor funcionando correctamente
- ✅ Base de datos conectada
- ✅ APIs externas configuradas
- ✅ Chatbot respondiendo
- ✅ Todas las páginas cargando
- ✅ Responsive design funcionando

##### **Plan de Contingencia**
- Ten una versión de respaldo del proyecto
- Prepara capturas de pantalla por si algo falla
- Ten documentación adicional lista
- Conoce los comandos básicos de troubleshooting

## 🌐 Despliegue

### **Desarrollo Local**
```bash
npm run dev
# Servidor en http://localhost:5502
```

### **Producción**
```bash
npm start
# Configurar variables de entorno de producción
```

### **GitHub Pages**
```bash
npm run deploy
# Despliegue automático a GitHub Pages
```

## 📚 Documentación Adicional

- **Auth0 Setup**: `docs/AUTH0_SETUP.md`
- **Roles y Permisos**: `docs/AUTH0_ROLES_PERMISSIONS.md`
- **Chatbot Setup**: `docs/CHATBOT_SETUP.md`
- **URLs de Acceso**: `docs/URLS_ACCESO.md`
- **Exportar Proyecto**: `docs/EXPORTAR_PROYECTO.md`
- **GitHub Pages**: `docs/GITHUB_PAGES_SETUP.md`

## 🤝 Contribución

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/NuevaFuncionalidad`)
5. **Abre** un Pull Request

### **Estándares de Código**
- Usar ES6+ para JavaScript
- Seguir convenciones de Bootstrap 5
- Documentar funciones complejas
- Mantener responsividad en todos los dispositivos

## 🐛 Reporte de Errores

Para reportar errores o solicitar nuevas funcionalidades:
1. Revisar issues existentes
2. Crear un nuevo issue con descripción detallada
3. Incluir pasos para reproducir el problema
4. Especificar versión del navegador y sistema operativo

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo de Desarrollo

**Lumina Learning Team**
- Desarrolladores full-stack
- Diseñadores UX/UI
- Especialistas en educación
- Expertos en seguridad

## 📞 Soporte y Contacto

- **Documentación**: Revisar carpeta `docs/`
- **Issues**: GitHub Issues
- **Email**: [tu-email@dominio.com]
- **Sitio Web**: [https://tu-sitio.com]

---

**⭐ ¡Si este proyecto te ha sido útil, considera darle una estrella en GitHub!**

*Desarrollado con ❤️ para la comunidad educativa*