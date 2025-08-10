function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-16" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">EduPlatform</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Tu plataforma de confianza para el aprendizaje online. 
                Conectamos estudiantes con los mejores instructores del mundo.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors">
                  <div className="icon-facebook text-white"></div>
                </button>
                <button className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors">
                  <div className="icon-twitter text-white"></div>
                </button>
                <button className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors">
                  <div className="icon-instagram text-white"></div>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cursos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instructores</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Certificaciones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Empresas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 EduPlatform. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}