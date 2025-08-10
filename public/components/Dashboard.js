function Dashboard() {
    try {
        const dashboardContent = `
            <div class="notices-section mb-5" data-name="notices" data-file="components/Dashboard.js">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="card border-0 shadow-sm">
                                <div class="card-header bg-primary text-white">
                                    <h4 class="mb-0"><i class="fas fa-bullhorn me-2"></i>Avisos Importantes</h4>
                                </div>
                                <div class="card-body">
                                    <div class="alert alert-warning">
                                        <strong>Recordatorio:</strong> Fecha límite para entrega de proyectos finales: 15 de Diciembre
                                    </div>
                                    <div class="alert alert-info">
                                        <strong>Nuevo:</strong> Ya está disponible el calendario de exámenes finales
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-sections" data-name="info-sections" data-file="components/Dashboard.js">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-bullseye fa-3x text-primary mb-3"></i>
                                    <h5 class="card-title">Nuestra Misión</h5>
                                    <p class="card-text">Formar profesionales íntegros y competentes, comprometidos con el desarrollo sostenible.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-eye fa-3x text-success mb-3"></i>
                                    <h5 class="card-title">Nuestra Visión</h5>
                                    <p class="card-text">Ser una institución educativa líder en innovación académica y tecnológica.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-heart fa-3x text-danger mb-3"></i>
                                    <h5 class="card-title">Nuestros Valores</h5>
                                    <ul class="list-unstyled">
                                        <li><i class="fas fa-check text-success me-2"></i>Excelencia Académica</li>
                                        <li><i class="fas fa-check text-success me-2"></i>Integridad</li>
                                        <li><i class="fas fa-check text-success me-2"></i>Responsabilidad Social</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return dashboardContent;
    } catch (error) {
        console.error('Dashboard component error:', error);
        return '<div class="alert alert-danger">Error al cargar el dashboard</div>';
    }
}