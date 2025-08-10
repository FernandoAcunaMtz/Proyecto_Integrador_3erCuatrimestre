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
                                    <p class="card-text">Formar profesionales íntegros y competentes, comprometidos con el desarrollo sostenible y la transformación social.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-eye fa-3x text-success mb-3"></i>
                                    <h5 class="card-title">Nuestra Visión</h5>
                                    <p class="card-text">Ser una institución educativa líder en innovación académica y tecnológica a nivel nacional e internacional.</p>
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
                                        <li><i class="fas fa-check text-success me-2"></i>Innovación</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-section mt-5" data-name="blog" data-file="components/Dashboard.js">
                <div class="container">
                    <h3 class="section-title">Blog Académico</h3>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop" class="card-img-top" alt="Blog 1">
                                <div class="card-body">
                                    <h6 class="card-title">Nuevas Metodologías de Enseñanza</h6>
                                    <p class="card-text small">Descubre las últimas tendencias en educación digital...</p>
                                    <small class="text-muted">Publicado hace 2 días</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop" class="card-img-top" alt="Blog 2">
                                <div class="card-body">
                                    <h6 class="card-title">Tecnología en el Aula</h6>
                                    <p class="card-text small">Cómo la inteligencia artificial está transformando la educación...</p>
                                    <small class="text-muted">Publicado hace 1 semana</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop" class="card-img-top" alt="Blog 3">
                                <div class="card-body">
                                    <h6 class="card-title">Éxito Estudiantil</h6>
                                    <p class="card-text small">Estrategias para maximizar tu rendimiento académico...</p>
                                    <small class="text-muted">Publicado hace 2 semanas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="location-contact mt-5" data-name="location-contact" data-file="components/Dashboard.js">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header bg-info text-white">
                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>Nuestra Ubicación</h5>
                                </div>
                                <div class="card-body">
                                    <p><strong>Campus Principal:</strong><br>
                                    Av. Universidad 123, Colonia Educativa<br>
                                    Ciudad Universitaria, CP 12345</p>
                                    <div class="bg-light p-3 rounded">
                                        <i class="fas fa-map fa-2x text-muted"></i>
                                        <p class="mt-2 mb-0 small">Mapa interactivo disponible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header bg-warning text-dark">
                                    <h5 class="mb-0"><i class="fas fa-envelope me-2"></i>Contacto Administrativo</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <small class="text-muted">Admisiones:</small><br>
                                            <a href="mailto:admisiones@universidad.edu" class="text-decoration-none">admisiones@universidad.edu</a>
                                        </div>
                                        <div class="col-12">
                                            <small class="text-muted">Soporte Técnico:</small><br>
                                            <a href="mailto:soporte@universidad.edu" class="text-decoration-none">soporte@universidad.edu</a>
                                        </div>
                                        <div class="col-12">
                                            <small class="text-muted">Administración:</small><br>
                                            <a href="mailto:admin@universidad.edu" class="text-decoration-none">admin@universidad.edu</a>
                                        </div>
                                    </div>
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
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar el dashboard</div>';
    }
}
