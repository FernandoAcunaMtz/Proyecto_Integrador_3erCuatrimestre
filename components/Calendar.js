function Calendar() {
    try {
        return `
            <div class="calendar-container" data-name="calendar" data-file="components/Calendar.js">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">Eventos Próximos</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item">
                                <strong>15 Enero 2024</strong> - Inicio de Clases
                            </div>
                            <div class="list-group-item">
                                <strong>20 Enero 2024</strong> - Examen Matemáticas
                            </div>
                            <div class="list-group-item">
                                <strong>25 Enero 2024</strong> - Entrega Proyecto Web
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Calendar component error:', error);
        return '<div class="alert alert-danger">Error al cargar calendario</div>';
    }
}