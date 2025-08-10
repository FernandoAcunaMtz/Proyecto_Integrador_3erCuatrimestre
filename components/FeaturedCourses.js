function FeaturedCourses() {
  try {
    const courses = [
      {
        id: 1,
        title: "Desarrollo Web Full Stack",
        instructor: "María García",
        rating: 4.8,
        students: 12500,
        price: "$99",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        title: "Data Science con Python",
        instructor: "Carlos López",
        rating: 4.9,
        students: 8900,
        price: "$129",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 3,
        title: "Diseño UX/UI Profesional",
        instructor: "Ana Rodríguez",
        rating: 4.7,
        students: 6700,
        price: "$89",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ];

    return (
      <section className="py-20 bg-[var(--secondary-color)]" data-name="featured-courses" data-file="components/FeaturedCourses.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Cursos Destacados
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Descubre los cursos más populares elegidos por miles de estudiantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <div key={course.id} className="card group cursor-pointer">
                <div className="relative mb-4">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                      <div className="icon-heart text-lg text-gray-600"></div>
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-3">
                  Por {course.instructor}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <div className="icon-star text-yellow-400 text-sm"></div>
                    <span className="text-sm font-medium ml-1">{course.rating}</span>
                  </div>
                  <span className="text-[var(--text-secondary)] text-sm">
                    ({course.students.toLocaleString()} estudiantes)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--primary-color)]">
                    {course.price}
                  </span>
                  <button className="btn-primary">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('FeaturedCourses component error:', error);
    return null;
  }
}