// ==================== */
// UTILIDADES DEL FOOTER
// ==================== */

// Actualizar el año en el copyright
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
});
