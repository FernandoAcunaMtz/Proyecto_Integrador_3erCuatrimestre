function Stats() {
  try {
    const stats = [
      { number: "50,000+", label: "Estudiantes activos", icon: "users" },
      { number: "1,200+", label: "Cursos disponibles", icon: "book-open" },
      { number: "500+", label: "Instructores expertos", icon: "graduation-cap" },
      { number: "98%", label: "Satisfacción del cliente", icon: "star" }
    ];

    return (
      <section className="py-20 bg-white" data-name="stats" data-file="components/Stats.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Confían en nosotros
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Números que respaldan nuestra excelencia educativa
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${stat.icon} text-2xl text-white`}></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--text-secondary)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Stats component error:', error);
    return null;
  }
}