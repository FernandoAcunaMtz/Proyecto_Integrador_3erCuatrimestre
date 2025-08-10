# 🌐 URLs de Acceso - Lumina Learning

## 🚀 **Servidor Local**
- **Puerto:** 5500
- **URL Base:** `http://localhost:5500` o `http://127.0.0.1:5500`

## 📱 **Páginas Principales**

### **🏠 Página de Inicio**
```
http://localhost:5500/index.html
http://127.0.0.1:5500/index.html
```

### **🛒 Página de Cursos (Venta)**
```
http://localhost:5500/html/cursos-venta.html
http://127.0.0.1:5500/html/cursos-venta.html
```

### **📝 Página de Blog**
```
http://localhost:5500/html/blog.html
http://127.0.0.1:5500/html/blog.html
```

### **📞 Página de Contacto**
```
http://localhost:5500/html/contact.html
http://127.0.0.1:5500/html/contact.html
```

### **💳 Página de Checkout**
```
http://localhost:5500/html/checkout.html
http://127.0.0.1:5500/html/checkout.html
```

## 🔐 **Páginas de Autenticación**

### **🔑 Página de Login**
```
http://localhost:5500/html/login.html
http://127.0.0.1:5500/html/login.html
```

### **🔄 Página de Callback (Auth0)**
```
http://localhost:5500/html/callback.html
http://127.0.0.1:5500/html/callback.html
```

## 👥 **Páginas por Rol de Usuario**

### **👨‍💼 Panel de Administrador**
```
http://localhost:5500/html/monitoreo.html
http://127.0.0.1:5500/html/monitoreo.html
```

### **👨‍🏫 Panel de Profesor**
```
http://localhost:5500/html/docente.html
http://127.0.0.1:5500/html/docente.html
```

### **👤 Páginas de Usuario**
- **Perfil:** `http://localhost:5500/html/profile.html`
- **Configuración:** `http://localhost:5500/html/settings.html`
- **Mis Cursos:** `http://localhost:5500/html/student-courses.html`

## 📅 **Páginas Académicas**

### **📆 Calendario**
```
http://localhost:5500/html/calendar.html
http://127.0.0.1:5500/html/calendar.html
```

### **⏰ Horarios**
```
http://localhost:5500/html/schedule.html
http://127.0.0.1:5500/html/schedule.html
```

## 🎯 **Flujo de Navegación Recomendado**

### **1. Acceso Inicial**
1. Iniciar servidor: `python -m http.server 5500`
2. Abrir: `http://localhost:5500/index.html`

### **2. Explorar Cursos**
- Desde el navbar: "Cursos" → `cursos-venta.html`
- Desde botones: "Explorar Cursos" → `cursos-venta.html`

### **3. Acceder a Blog y Contacto**
- Desde el navbar: "Blog" → `blog.html`
- Desde el navbar: "Contacto" → `contact.html`

### **4. Proceso de Compra**
1. `cursos-venta.html` → Añadir al carrito
2. `checkout.html` → Finalizar compra

### **5. Autenticación**
- `login.html` → Iniciar sesión
- Redirección automática según rol:
  - **Admin:** `monitoreo.html`
  - **Profesor:** `docente.html`
  - **Estudiante:** `index.html`

## 🔧 **Configuración del Servidor**

### **Iniciar Servidor:**
```bash
cd "C:\Users\Fernando Acuña\OneDrive\Escritorio\POO HTML"
python -m http.server 5500
```

### **Verificar Servidor:**
```bash
netstat -ano | findstr :5500
```

## ✅ **Enlaces Corregidos**

### **Archivos Modificados:**
- ✅ `index.html` - Enlaces del navbar y footer corregidos
- ✅ `AUTH0_SETUP.md` - URLs actualizadas al puerto 5500
- ✅ `AUTH0_ROLES_PERMISSIONS.md` - URLs actualizadas al puerto 5500

### **Enlaces Corregidos en index.html:**
- **Blog:** `href="./html/blog.html"`
- **Contacto:** `href="./html/contact.html"`
- **Botones hero:** `href="./html/contact.html"`
- **Footer:** `href="./html/blog.html"` y `href="./html/contact.html"`

## 🎉 **¡Listo para Usar!**

Todas las páginas ahora son accesibles desde el navbar y los enlaces del sitio. El cambio es **permanente** y funcionará cada vez que inicies el servidor en el puerto 5500.

### **Credenciales de Prueba:**
- **Admin:** `admin@gmail.com` / `Temporal#123`
- **Profesor:** `profesor@gmail.com` / `Temporal#123`
- **Estudiante:** `estudiante@gmail.com` / `Temporal#123`
