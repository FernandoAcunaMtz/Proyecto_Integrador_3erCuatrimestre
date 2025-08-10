function CoursesEst() {
    try {
        return `
            <div class="courses-est-container" data-name="courses-est" data-file="components/CoursesEst.js">
                <div class="row g-4 mb-4">
                    <div class="col-12">
                        <div class="card bg-primary text-white">
                            <div class="card-body">
                                <h4><i class="fas fa-graduation-cap me-2"></i>Panel de Estudiante</h4>
                                <p class="mb-0">Accede a tus cursos, tareas y materiales de estudio</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4">
                    <div class="col-lg-4">
                        <div class="card h-100">
                            <div class="card-header bg-info text-white">
                                <h5 class="mb-0"><i class="fas fa-calculator me-2"></i>Matemáticas Avanzadas</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <small class="text-muted">Profesor:</small>
                                    <p class="mb-1"><strong>Dr. Ana García</strong></p>
                                </div>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-info" style="width: 75%"></div>
                                </div>
                                <p class="small">Progreso: 75% completado</p>
                                <button class="btn btn-info btn-sm w-100" onclick="showCourseDetails('matematicas')">
                                    <i class="fas fa-eye me-1"></i>Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card h-100">
                            <div class="card-header bg-success text-white">
                                <h5 class="mb-0"><i class="fas fa-code me-2"></i>Programación Web</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <small class="text-muted">Profesor:</small>
                                    <p class="mb-1"><strong>Ing. Carlos López</strong></p>
                                </div>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-success" style="width: 60%"></div>
                                </div>
                                <p class="small">Progreso: 60% completado</p>
                                <button class="btn btn-success btn-sm w-100" onclick="showCourseDetails('programacion')">
                                    <i class="fas fa-eye me-1"></i>Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card h-100">
                            <div class="card-header bg-warning text-dark">
                                <h5 class="mb-0"><i class="fas fa-flask me-2"></i>Química Orgánica</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <small class="text-muted">Profesor:</small>
                                    <p class="mb-1"><strong>Dra. María Rodríguez</strong></p>
                                </div>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-warning" style="width: 45%"></div>
                                </div>
                                <p class="small">Progreso: 45% completado</p>
                                <button class="btn btn-warning btn-sm w-100" onclick="showCourseDetails('quimica')">
                                    <i class="fas fa-eye me-1"></i>Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="courseDetailsContainer" class="mt-4" style="display: none;">
                    <div class="card">
                        <div class="card-header">
                            <h5 id="courseTitle" class="mb-0"></h5>
                            <button type="button" class="btn-close float-end" onclick="hideCourseDetails()"></button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6><i class="fas fa-tasks me-2"></i>Tareas Pendientes</h6>
                                    <div id="assignmentsList" class="list-group list-group-flush">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h6><i class="fas fa-book-open me-2"></i>Materiales de Estudio</h6>
                                    <div id="materialsList" class="list-group list-group-flush">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('CoursesEst component error:', error);
        return '<div class="alert alert-danger">Error al cargar los cursos del estudiante</div>';
    }
}

function showCourseDetails(courseType) {
    try {
        const container = document.getElementById('courseDetailsContainer');
        const title = document.getElementById('courseTitle');
        const assignmentsList = document.getElementById('assignmentsList');
        const materialsList = document.getElementById('materialsList');

        const courseData = getCourseData(courseType);
        
        title.innerHTML = `<i class="${courseData.icon} me-2"></i>${courseData.name}`;
        
        assignmentsList.innerHTML = courseData.assignments.map(assignment => `
            <div class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="mb-1">${assignment.title}</h6>
                    <small class="text-muted">Fecha límite: ${assignment.dueDate}</small>
                </div>
                <span class="badge bg-${assignment.status === 'pending' ? 'danger' : 'success'} rounded-pill">
                    ${assignment.status === 'pending' ? 'Pendiente' : 'Completada'}
                </span>
            </div>
        `).join('');

        materialsList.innerHTML = courseData.materials.map(material => `
            <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1"><i class="${material.icon} me-2"></i>${material.title}</h6>
                    <small>${material.type}</small>
                </div>
                <p class="mb-1">${material.description}</p>
                <button class="btn btn-outline-primary btn-sm">
                    <i class="fas fa-download me-1"></i>Descargar
                </button>
            </div>
        `).join('');

        container.style.display = 'block';
        container.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Show course details error:', error);
    }
}

function hideCourseDetails() {
    try {
        const container = document.getElementById('courseDetailsContainer');
        container.style.display = 'none';
    } catch (error) {
        console.error('Hide course details error:', error);
    }
}

function getCourseData(courseType) {
    const courses = {
        matematicas: {
            name: 'Matemáticas Avanzadas',
            icon: 'fas fa-calculator',
            assignments: [
                { title: 'Ejercicios de Cálculo Diferencial', dueDate: '25 Enero 2024', status: 'pending' },
                { title: 'Proyecto de Integrales', dueDate: '30 Enero 2024', status: 'pending' },
                { title: 'Examen Parcial', dueDate: '15 Enero 2024', status: 'completed' }
            ],
            materials: [
                { title: 'Manual de Cálculo', type: 'PDF', description: 'Guía completa de cálculo diferencial e integral', icon: 'fas fa-file-pdf' },
                { title: 'Ejercicios Resueltos', type: 'PDF', description: 'Problemas resueltos paso a paso', icon: 'fas fa-file-pdf' },
                { title: 'Video Conferencia 1', type: 'Video', description: 'Introducción al cálculo diferencial', icon: 'fas fa-play-circle' }
            ]
        },
        programacion: {
            name: 'Programación Web',
            icon: 'fas fa-code',
            assignments: [
                { title: 'Sitio Web con HTML/CSS', dueDate: '28 Enero 2024', status: 'pending' },
                { title: 'Aplicación JavaScript', dueDate: '5 Febrero 2024', status: 'pending' },
                { title: 'Quiz de HTML', dueDate: '20 Enero 2024', status: 'completed' }
            ],
            materials: [
                { title: 'Guía de HTML5', type: 'PDF', description: 'Referencia completa de HTML5', icon: 'fas fa-file-pdf' },
                { title: 'Tutorial de CSS3', type: 'Video', description: 'Curso completo de CSS3', icon: 'fas fa-play-circle' },
                { title: 'Ejercicios de JavaScript', type: 'ZIP', description: 'Archivos de práctica', icon: 'fas fa-file-archive' }
            ]
        },
        quimica: {
            name: 'Química Orgánica',
            icon: 'fas fa-flask',
            assignments: [
                { title: 'Reporte de Laboratorio 1', dueDate: '2 Febrero 2024', status: 'pending' },
                { title: 'Síntesis de Compuestos', dueDate: '10 Febrero 2024', status: 'pending' },
                { title: 'Examen de Nomenclatura', dueDate: '22 Enero 2024', status: 'completed' }
            ],
            materials: [
                { title: 'Manual de Laboratorio', type: 'PDF', description: 'Procedimientos de seguridad y experimentos', icon: 'fas fa-file-pdf' },
                { title: 'Tabla de Compuestos', type: 'PDF', description: 'Referencia de compuestos orgánicos', icon: 'fas fa-file-pdf' },
                { title: 'Videos de Experimentos', type: 'Video', description: 'Demostraciones de laboratorio', icon: 'fas fa-play-circle' }
            ]
        }
    };
    
    return courses[courseType] || courses.matematicas;
}