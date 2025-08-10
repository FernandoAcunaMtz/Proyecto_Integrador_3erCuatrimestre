function Schedule() {
    try {
        return `
            <div class="schedule-container" data-name="schedule" data-file="components/Schedule.js">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="table-primary">
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>08:00-09:30</td>
                                <td class="table-info">Matemáticas</td>
                                <td></td>
                                <td class="table-info">Matemáticas</td>
                                <td></td>
                                <td class="table-warning">Lab Math</td>
                            </tr>
                            <tr>
                                <td>09:30-11:00</td>
                                <td></td>
                                <td class="table-success">Programación</td>
                                <td></td>
                                <td class="table-success">Programación</td>
                                <td class="table-success">Programación</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Schedule component error:', error);
        return '<div class="alert alert-danger">Error al cargar horario</div>';
    }
}