// Student Courses JavaScript
document.addEventListener('DOMContentLoaded', function() {
    try {
        loadStudentCourses();
    } catch (error) {
        console.error('Error al cargar cursos del estudiante:', error);
    }
});

function loadStudentCourses() {
    try {
        const coursesContainer = document.getElementById('coursesContainer');
        if (!coursesContainer) return;

        const courses = [
            {
                id: 'matematicas',
                name: 'Matemáticas Avanzadas',
                professor: 'Dr. Ana García',
                progress: 75,
                color: 'info',
                icon: 'calculator'
            },
            {
                id: 'programacion',
                name: 'Programación Web',
                professor: 'Ing. Carlos López',
                progress: 60,
                color: 'success',
                icon: 'code'
            },
            {
                id: 'quimica',
                name: 'Química Orgánica',
                professor: 'Dra. María Rodríguez',
                progress: 45,
                color: 'warning',
                icon: 'flask'
            }
        ];

        coursesContainer.innerHTML = courses.map(course => `
            <div class="col-lg-4">
                <div class="card h-100">
                    <div class="card-header bg-${course.color} text-white">
                        <h5 class="mb-0">
                            <i class="fas fa-${course.icon} me-2"></i>${course.name}
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <small class="text-muted">Profesor:</small>
                            <p class="mb-1"><strong>${course.professor}</strong></p>
                        </div>
                        <div class="progress mb-3">
                            <div class="progress-bar bg-${course.color}" style="width: ${course.progress}%"></div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Progreso: <strong>${course.progress}%</strong></span>
                            <span class="badge bg-${course.color}">En Progreso</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary btn-sm" onclick="showCourseDetails('${course.id}')">
                                <i class="fas fa-eye me-1"></i>Ver Detalles
                            </button>
                            <button class="btn btn-outline-secondary btn-sm">
                                <i class="fas fa-download me-1"></i>Materiales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error al cargar cursos:', error);
    }
}

function hideCourseDetails() {
    try {
        const container = document.getElementById('courseDetailsContainer');
        container.style.display = 'none';
    } catch (error) {
        console.error('Error al ocultar detalles del curso:', error);
    }
}

// Función para obtener datos de un curso específico
function getCourseData(courseId) {
    const courseData = {
        matematicas: {
            name: 'Matemáticas Avanzadas',
            icon: 'calculator',
            assignments: [
                { title: 'Ejercicios de Álgebra', dueDate: '15/12/2024', status: 'pending' },
                { title: 'Problemas de Geometría', dueDate: '20/12/2024', status: 'completed' },
                { title: 'Examen Parcial', dueDate: '25/12/2024', status: 'pending' }
            ],
            materials: [
                { title: 'Libro de Texto', type: 'PDF', icon: 'book', description: 'Matemáticas Avanzadas Vol. 1' },
                { title: 'Ejercicios Resueltos', type: 'PDF', icon: 'file-alt', description: 'Soluciones a problemas del capítulo 3' },
                { title: 'Video Tutorial', type: 'MP4', icon: 'video', description: 'Explicación de conceptos complejos' }
            ]
        },
        programacion: {
            name: 'Programación Web',
            icon: 'code',
            assignments: [
                { title: 'Proyecto Final', dueDate: '30/12/2024', status: 'pending' },
                { title: 'Ejercicios de JavaScript', dueDate: '18/12/2024', status: 'completed' },
                { title: 'Práctica de CSS', dueDate: '22/12/2024', status: 'pending' }
            ],
            materials: [
                { title: 'Manual de HTML5', type: 'PDF', icon: 'file-code', description: 'Guía completa de HTML5' },
                { title: 'Ejemplos de CSS', type: 'ZIP', icon: 'archive', description: 'Archivos de ejemplo para prácticas' },
                { title: 'Video de JavaScript', type: 'MP4', icon: 'video', description: 'Fundamentos de JavaScript ES6' }
            ]
        },
        quimica: {
            name: 'Química Orgánica',
            icon: 'flask',
            assignments: [
                { title: 'Reporte de Laboratorio', dueDate: '28/12/2024', status: 'pending' },
                { title: 'Análisis de Compuestos', dueDate: '16/12/2024', status: 'completed' },
                { title: 'Examen Teórico', dueDate: '23/12/2024', status: 'pending' }
            ],
            materials: [
                { title: 'Manual de Laboratorio', type: 'PDF', icon: 'flask', description: 'Procedimientos de laboratorio' },
                { title: 'Tabla Periódica', type: 'PDF', icon: 'table', description: 'Tabla periódica interactiva' },
                { title: 'Simulador de Reacciones', type: 'EXE', icon: 'desktop', description: 'Software de simulación química' }
            ]
        }
    };
    
    return courseData[courseId] || courseData.matematicas;
}