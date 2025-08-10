function Blog() {
    try {
        return `
            <div class="blog-container" data-name="blog" data-file="components/Blog.js">
                <div class="row g-4">
                    <div class="col-lg-8">
                        <article class="card mb-4">
                            <div class="card-body">
                                <h3 class="card-title">Nuevas Tecnologías en Educación</h3>
                                <p class="text-muted">Publicado el 10 de Enero, 2024</p>
                                <p class="card-text">La integración de inteligencia artificial y realidad virtual está transformando la experiencia educativa universitaria...</p>
                                <a href="#" class="btn btn-primary">Leer más</a>
                            </div>
                        </article>
                        <article class="card">
                            <div class="card-body">
                                <h3 class="card-title">Resultados de Investigación 2023</h3>
                                <p class="text-muted">Publicado el 5 de Enero, 2024</p>
                                <p class="card-text">Nuestros estudiantes y profesores han logrado importantes avances en investigación científica durante el año pasado...</p>
                                <a href="#" class="btn btn-outline-primary">Leer más</a>
                            </div>
                        </article>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h5>Categorías</h5>
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action">Tecnología</a>
                                <a href="#" class="list-group-item list-group-item-action">Investigación</a>
                                <a href="#" class="list-group-item list-group-item-action">Eventos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Blog component error:', error);
        return '<div class="alert alert-danger">Error al cargar blog</div>';
    }
}