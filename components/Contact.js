function Contact() {
    try {
        return `
            <div class="contact-container" data-name="contact" data-file="components/Contact.js">
                <div class="row g-4">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header">
                                <h5>Enviar Mensaje</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label class="form-label">Asunto</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Mensaje</label>
                                        <textarea class="form-control" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <h5>Información de Contacto</h5>
                            </div>
                            <div class="card-body">
                                <p><i class="fas fa-phone me-2"></i>+1 234 567 8900</p>
                                <p><i class="fas fa-envelope me-2"></i>info@universidad.edu</p>
                                <p><i class="fas fa-map-marker-alt me-2"></i>123 Universidad St, Ciudad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Contact component error:', error);
        return '<div class="alert alert-danger">Error al cargar contacto</div>';
    }
}