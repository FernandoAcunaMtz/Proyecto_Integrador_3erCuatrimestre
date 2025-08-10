function Navbar() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState(2);

    const handleLogin = () => {
      window.location.href = 'login.html';
    };

    return (
      <nav className="bg-white shadow-lg sticky top-0 z-50" data-name="navbar" data-file="components/Navbar.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[var(--primary-color)]">EduPlatform</h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#cursos" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors">
                  Cursos
                </a>
                <a href="#horarios" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors">
                  Horarios
                </a>
                <a href="#blog" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors">
                  Blog
                </a>
                <a href="#contacto" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 text-sm font-medium transition-colors">
                  Contacto
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  <div className="icon-shopping-cart text-xl"></div>
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
              <button 
                onClick={handleLogin}
                className="btn-primary"
              >
                Iniciar Sesión
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[var(--text-secondary)]"
              >
                <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#cursos" className="block px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Cursos</a>
              <a href="#horarios" className="block px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Horarios</a>
              <a href="#blog" className="block px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Blog</a>
              <a href="#contacto" className="block px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Contacto</a>
              <button onClick={handleLogin} className="w-full text-left px-3 py-2 btn-primary mt-4">
                Iniciar Sesión
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}