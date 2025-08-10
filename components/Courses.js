function Courses() {
    try {
        return `
            <div class="courses-container" data-name="courses" data-file="components/Courses.js">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">Matemáticas Avanzadas</h5>
                                <p class="card-text">Prof. Dr. Ana García</p>
                                <div class="progress mb-3">
                                    <div class="progress-bar" style="width: 75%"></div>
                                </div>
                                <small class="text-muted">Progreso: 75%</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title text-success">Programación Web</h5>
                                <p class="card-text">Ing. Carlos López</p>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-success" style="width: 60%"></div>
                                </div>
                                <small class="text-muted">Progreso: 60%</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Courses component error:', error);
        return '<div class="alert alert-danger">Error al cargar cursos</div>';
    }
}