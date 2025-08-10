function Administration() {
    try {
        return `
            <div class="admin-container" data-name="administration" data-file="components/Administration.js">
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5><i class="fas fa-users me-2"></i>Gestión de Usuarios</h5>
                            </div>
                            <div class="card-body">
                                <p>Administrar estudiantes y profesores</p>
                                <button class="btn btn-primary">Acceder</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5><i class="fas fa-book me-2"></i>Gestión de Cursos</h5>
                            </div>
                            <div class="card-body">
                                <p>Crear y administrar cursos</p>
                                <button class="btn btn-success">Acceder</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5><i class="fas fa-chart-bar me-2"></i>Reportes</h5>
                            </div>
                            <div class="card-body">
                                <p>Generar reportes académicos</p>
                                <button class="btn btn-info">Acceder</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h5><i class="fas fa-cog me-2"></i>Configuración</h5>
                            </div>
                            <div class="card-body">
                                <p>Configurar el sistema</p>
                                <button class="btn btn-warning">Acceder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Administration component error:', error);
        return '<div class="alert alert-danger">Error al cargar administración</div>';
    }
}