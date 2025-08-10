const express = require('express');
const router = express.Router();

// Middleware para verificar autenticación
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ error: 'Acceso no autorizado' });
  }
};

// Aplicar middleware a todas las rutas
router.use(requireAuth);

// Obtener datos del dashboard
router.get('/dashboard', (req, res) => {
  res.json({
    notices: [
      {
        type: 'warning',
        title: 'Recordatorio',
        message: 'Fecha límite para entrega de proyectos finales: 15 de Diciembre'
      },
      {
        type: 'info',
        title: 'Nuevo',
        message: 'Ya está disponible el calendario de exámenes finales'
      }
    ],
    stats: {
      pendingTasks: 6,
      newAnnouncements: 6,
      upcomingExams: 2,
      availableResources: 15
    }
  });
});

// Obtener cursos del usuario
router.get('/courses', (req, res) => {
  const courses = [
    {
      id: 1,
      name: 'Matemáticas Avanzadas',
      professor: 'Dr. Ana García',
      progress: 75,
      pendingTasks: 3,
      announcements: 2,
      price: '$299',
      enrolled: true
    },
    {
      id: 2,
      name: 'Programación Web',
      professor: 'Ing. Carlos López',
      progress: 60,
      pendingTasks: 1,
      announcements: 1,
      price: '$399',
      enrolled: true
    }
  ];
  
  res.json(courses);
});

// Obtener calendario
router.get('/calendar', (req, res) => {
  const events = [
    { date: '2024-01-15', title: 'Inicio de Clases', type: 'academic' },
    { date: '2024-01-20', title: 'Examen Matemáticas', type: 'exam' },
    { date: '2024-01-25', title: 'Entrega Proyecto Web', type: 'assignment' }
  ];
  
  res.json(events);
});

// Obtener horario
router.get('/schedule', (req, res) => {
  const schedule = [
    { 
      time: '08:00-09:30', 
      monday: 'Matemáticas', 
      tuesday: '', 
      wednesday: 'Matemáticas', 
      thursday: '', 
      friday: 'Lab Math' 
    },
    { 
      time: '09:30-11:00', 
      monday: '', 
      tuesday: 'Programación', 
      wednesday: '', 
      thursday: 'Programación', 
      friday: 'Programación' 
    }
  ];
  
  res.json(schedule);
});

module.exports = router;