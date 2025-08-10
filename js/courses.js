// ==================== //
// VARIABLES GLOBALES
// ==================== //
let selectedCourse = null;

// ==================== //
// DATOS DE CURSOS MEJORADOS
// ==================== //
const courses = [
    {
        id: 1,
        title: 'JavaScript desde Cero',
        description: 'Aprende los fundamentos de JavaScript desde lo básico hasta conceptos avanzados. Domina el lenguaje más popular del mundo web.',
        contents: [
            'Variables y Tipos de Datos',
            'Funciones y Scope',
            'Manipulación del DOM',
            'Eventos y Listeners',
            'Async/Await y Promises',
            'ES6+ Features',
            'Módulos y Bundlers'
        ],
        tasks: [
            'Quiz: Fundamentos JS',
            'Proyecto: Calculadora Interactiva',
            'Ejercicios: DOM Manipulation',
            'Proyecto Final: Todo App'
        ],
        progress: 25,
        duration: '8 horas',
        difficulty: 'Principiante',
        instructor: 'Ana García',
        rating: 4.8,
        students: 1250,
        category: 'programming',
        tags: ['javascript', 'web', 'frontend'],
        lastAccessed: '2024-01-15',
        estimatedTime: '2h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
        certificate: true
    },
    {
        id: 2,
        title: 'HTML y CSS Avanzado',
        description: 'Domina las técnicas avanzadas de maquetación y diseño web moderno. Crea interfaces hermosas y responsivas.',
        contents: [
            'Flexbox Avanzado',
            'CSS Grid Layout',
            'Media Queries Responsive',
            'Animaciones CSS',
            'Metodologías CSS',
            'Sass/SCSS',
            'CSS-in-JS'
        ],
        tasks: [
            'Proyecto: Landing Page Responsive',
            'Quiz: Flexbox y Grid',
            'Ejercicio: Animaciones',
            'Proyecto Final: Portfolio'
        ],
        progress: 60,
        duration: '12 horas',
        difficulty: 'Intermedio',
        instructor: 'Carlos Ruiz',
        rating: 4.9,
        students: 980,
        category: 'design',
        tags: ['html', 'css', 'frontend', 'design'],
        lastAccessed: '2024-01-10',
        estimatedTime: '4h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop',
        certificate: true
    },
    {
        id: 3,
        title: 'React para Principiantes',
        description: 'Construye aplicaciones web interactivas con la biblioteca más popular. Aprende React desde cero hasta proyectos reales.',
        contents: [
            'Introducción a JSX',
            'Componentes Funcionales',
            'Hooks (useState, useEffect)',
            'Props y State',
            'Context API',
            'React Router',
            'Testing con Jest'
        ],
        tasks: [
            'Proyecto: Todo App',
            'Quiz: Hooks de React',
            'Ejercicio: Componentes Reutilizables',
            'Proyecto Final: E-commerce'
        ],
        progress: 45,
        duration: '15 horas',
        difficulty: 'Intermedio',
        instructor: 'María López',
        rating: 4.7,
        students: 2100,
        category: 'programming',
        tags: ['react', 'javascript', 'frontend'],
        lastAccessed: '2024-01-12',
        estimatedTime: '8h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
        certificate: true
    },
    {
        id: 4,
        title: 'Node.js Backend Development',
        description: 'Construye APIs robustas y servidores escalables con Node.js. Aprende Express, MongoDB y autenticación.',
        contents: [
            'Fundamentos de Node.js',
            'Express.js Framework',
            'Bases de Datos NoSQL',
            'APIs RESTful',
            'Autenticación JWT',
            'Testing y Debugging',
            'Deployment y CI/CD'
        ],
        tasks: [
            'API: Sistema de Usuarios',
            'Quiz: Express y Middleware',
            'Proyecto: Blog API',
            'Proyecto Final: E-commerce Backend'
        ],
        progress: 80,
        duration: '20 horas',
        difficulty: 'Avanzado',
        instructor: 'David Martínez',
        rating: 4.6,
        students: 850,
        category: 'programming',
        tags: ['nodejs', 'backend', 'api', 'javascript'],
        lastAccessed: '2024-01-14',
        estimatedTime: '4h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
        certificate: true
    },
    {
        id: 5,
        title: 'Python para Data Science',
        description: 'Aprende Python para análisis de datos, machine learning y visualización. Domina pandas, numpy y matplotlib.',
        contents: [
            'Python Básico',
            'Pandas para Análisis',
            'NumPy para Cálculos',
            'Matplotlib y Seaborn',
            'Machine Learning Básico',
            'Jupyter Notebooks',
            'Proyectos de Data Science'
        ],
        tasks: [
            'Análisis: Dataset de Ventas',
            'Quiz: Pandas y NumPy',
            'Proyecto: Dashboard de Datos',
            'Proyecto Final: Predicción de Precios'
        ],
        progress: 100,
        duration: '18 horas',
        difficulty: 'Intermedio',
        instructor: 'Laura Fernández',
        rating: 4.9,
        students: 1650,
        category: 'data-science',
        tags: ['python', 'data-science', 'machine-learning', 'analytics'],
        lastAccessed: '2024-01-08',
        estimatedTime: 'Completado',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
        certificate: true
    },
    {
        id: 6,
        title: 'UX/UI Design Fundamentals',
        description: 'Aprende los principios fundamentales del diseño de experiencia de usuario y interfaces modernas.',
        contents: [
            'Principios de UX',
            'Research y User Testing',
            'Wireframing y Prototyping',
            'Design Systems',
            'Figma y Herramientas',
            'Accesibilidad',
            'Portfolio de Proyectos'
        ],
        tasks: [
            'Research: Análisis de Competencia',
            'Proyecto: App de Fitness',
            'Prototipo: E-commerce',
            'Proyecto Final: Portfolio UX'
        ],
        progress: 30,
        duration: '16 horas',
        difficulty: 'Principiante',
        instructor: 'Sofia Rodríguez',
        rating: 4.5,
        students: 720,
        category: 'design',
        tags: ['ux', 'ui', 'design', 'prototyping'],
        lastAccessed: '2024-01-13',
        estimatedTime: '11h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop',
        certificate: false
    },
    {
        id: 7,
        title: 'DevOps y CI/CD',
        description: 'Aprende prácticas de DevOps, automatización de deployment y integración continua para proyectos modernos.',
        contents: [
            'Fundamentos de DevOps',
            'Docker y Contenedores',
            'Kubernetes Básico',
            'GitHub Actions',
            'AWS/Azure Básico',
            'Monitoring y Logs',
            'Security en DevOps'
        ],
        tasks: [
            'Proyecto: Pipeline CI/CD',
            'Quiz: Docker y Kubernetes',
            'Lab: AWS Deployment',
            'Proyecto Final: Infraestructura como Código'
        ],
        progress: 15,
        duration: '22 horas',
        difficulty: 'Avanzado',
        instructor: 'Roberto Silva',
        rating: 4.4,
        students: 480,
        category: 'devops',
        tags: ['devops', 'docker', 'kubernetes', 'aws', 'ci-cd'],
        lastAccessed: '2024-01-11',
        estimatedTime: '19h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
        certificate: false
    },
    {
        id: 8,
        title: 'Mobile App Development',
        description: 'Desarrolla aplicaciones móviles nativas para iOS y Android usando React Native y Flutter.',
        contents: [
            'React Native Básico',
            'Flutter Fundamentals',
            'State Management',
            'APIs y Backend',
            'Testing Mobile Apps',
            'App Store Deployment',
            'Performance Optimization'
        ],
        tasks: [
            'App: Todo List',
            'Proyecto: Weather App',
            'Quiz: React Native',
            'Proyecto Final: Social Media App'
        ],
        progress: 70,
        duration: '25 horas',
        difficulty: 'Intermedio',
        instructor: 'Carmen Vega',
        rating: 4.8,
        students: 920,
        category: 'mobile',
        tags: ['react-native', 'flutter', 'mobile', 'ios', 'android'],
        lastAccessed: '2024-01-09',
        estimatedTime: '8h restantes',
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
        certificate: true
    }
];

// ==================== //
// DATOS DE INSTRUCTORES
// ==================== //
const instructors = {
    'Ana García': {
        name: 'Ana García',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        title: 'Senior JavaScript Developer',
        experience: '8+ años',
        specialization: 'Frontend Development, React, Vue.js',
        description: 'Desarrolladora senior con amplia experiencia en JavaScript moderno y frameworks frontend. Ha trabajado en empresas como Google y Meta, y ha contribuido a proyectos open source populares. Apasionada por enseñar y compartir conocimiento.',
        skills: ['JavaScript', 'React', 'Vue.js', 'TypeScript', 'Node.js'],
        certifications: ['Google Developer Expert', 'Microsoft MVP'],
        students: 15000,
        courses: 12,
        rating: 4.9
    },
    'Carlos Ruiz': {
        name: 'Carlos Ruiz',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        title: 'UI/UX Design Specialist',
        experience: '10+ años',
        specialization: 'Web Design, CSS, Design Systems',
        description: 'Diseñador especializado en interfaces de usuario y experiencia de usuario. Ha diseñado productos para startups y empresas Fortune 500. Experto en CSS moderno, diseño responsive y sistemas de diseño.',
        skills: ['UI/UX Design', 'CSS', 'Figma', 'Adobe Creative Suite', 'Design Systems'],
        certifications: ['Adobe Certified Expert', 'Figma Design Leader'],
        students: 12000,
        courses: 8,
        rating: 4.8
    },
    'María López': {
        name: 'María López',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        title: 'Full Stack Developer',
        experience: '6+ años',
        specialization: 'React, Node.js, Full Stack Development',
        description: 'Desarrolladora full stack con experiencia en React y Node.js. Ha construido aplicaciones escalables para startups y empresas. Apasionada por las mejores prácticas y arquitectura de software.',
        skills: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
        certifications: ['AWS Certified Developer', 'MongoDB Developer'],
        students: 18000,
        courses: 15,
        rating: 4.7
    },
    'David Martínez': {
        name: 'David Martínez',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        title: 'Database Architect',
        experience: '12+ años',
        specialization: 'PostgreSQL, Database Design, Performance',
        description: 'Arquitecto de bases de datos con más de 12 años de experiencia. Ha diseñado y optimizado bases de datos para empresas de alto tráfico. Experto en PostgreSQL, MySQL y NoSQL.',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Database Design'],
        certifications: ['PostgreSQL Certified Professional', 'Oracle Certified Expert'],
        students: 8000,
        courses: 6,
        rating: 4.6
    },
    'Laura Sánchez': {
        name: 'Laura Sánchez',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
        title: 'Data Scientist',
        experience: '7+ años',
        specialization: 'Python, Machine Learning, Data Analysis',
        description: 'Científica de datos con experiencia en machine learning y análisis de datos. Ha trabajado en proyectos de IA para empresas de tecnología. Experta en Python, pandas, numpy y scikit-learn.',
        skills: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
        certifications: ['Google Data Analytics', 'IBM Data Science'],
        students: 20000,
        courses: 10,
        rating: 4.9
    },
    'Roberto Fernández': {
        name: 'Roberto Fernández',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
        title: 'Backend Engineer',
        experience: '9+ años',
        specialization: 'Node.js, APIs, Microservices',
        description: 'Ingeniero backend especializado en Node.js y arquitectura de microservicios. Ha construido APIs escalables para empresas de e-commerce y fintech. Experto en performance y seguridad.',
        skills: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes'],
        certifications: ['Node.js Certified Developer', 'Docker Certified Associate'],
        students: 14000,
        courses: 9,
        rating: 4.8
    }
};

// Variables globales
let filteredCourses = [...courses];
let currentFilter = 'all';
let currentView = 'grid';

// ==================== //
// INICIALIZACIÓN
// ==================== //
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando aplicación...');
    
    // Declarar elementos del DOM después de que esté cargado
    const coursesContainer = document.getElementById('coursesContainer');
    const courseDetailsModal = document.getElementById('courseDetailsModal');
    const quickStartModal = document.getElementById('quickStartModal');
    const courseSearch = document.getElementById('courseSearch');
    const emptyState = document.getElementById('emptyState');
    
    // Verificar que los elementos existan
    if (!coursesContainer) {
        console.error('No se encontró el contenedor de cursos');
        return;
    }
    
    if (!courseSearch) {
        console.error('No se encontró el campo de búsqueda');
    }
    
    if (!emptyState) {
        console.error('No se encontró el estado vacío');
    }
    
    // Hacer las variables accesibles globalmente
    window.coursesContainer = coursesContainer;
    window.courseDetailsModal = courseDetailsModal;
    window.quickStartModal = quickStartModal;
    window.courseSearch = courseSearch;
    window.emptyState = emptyState;
    
    initializeApp();
    setupEventListeners();
    renderCourses();
    updateStats();
    animateHeroSection();
    
    console.log('Aplicación inicializada correctamente');
});

function initializeApp() {
    // Inicializar estadísticas
    updateOverallProgress();
    updateCourseStats();
    
    // Configurar animaciones
    setupAnimations();
    
    // Cargar estado guardado
    loadSavedState();
    
    // Eliminamos la detección de desbordamiento ya que ahora usamos scroll
}

// ==================== //
// EVENT LISTENERS
// ==================== //
function setupEventListeners() {
    // Búsqueda
    if (courseSearch) {
        courseSearch.addEventListener('input', debounce(handleSearch, 300));
    }

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.currentTarget.dataset.filter;
            setFilter(filter);
        });
    });

    // Vista
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = e.currentTarget.dataset.view;
            setView(view);
        });
    });

    // Modales
    document.addEventListener('click', (e) => {
                if (e.target.classList.contains('course-details-modal')) {
            closeModal(e.target);
        }
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Scroll para animaciones
    window.addEventListener('scroll', debounce(handleScroll, 100));
}

// ==================== //
// RENDERIZADO DE CURSOS
// ==================== //
function renderCourses() {
    console.log('Renderizando cursos...', filteredCourses.length);
    
    if (filteredCourses.length === 0) {
        showEmptyState();
        return;
    }

    hideEmptyState();
    coursesContainer.innerHTML = '';

    filteredCourses.forEach((course, index) => {
        const card = createCourseCard(course, index);
        coursesContainer.appendChild(card);
        console.log('Tarjeta creada:', course.title);
    });

    // Animar cards
    animateCards();
    
    // Eliminamos la detección de desbordamiento ya que ahora usamos scroll
}

function createCourseCard(course, index) {
    console.log('Creando tarjeta para:', course.title);
    
    const card = document.createElement('div');
    card.className = 'course-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const difficultyColor = getDifficultyColor(course.difficulty);
    const progressPercentage = course.progress;
    const isCompleted = course.progress === 100;
    const instructor = instructors[course.instructor] || {
        name: course.instructor,
        photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop&crop=face',
        title: 'Instructor',
        experience: '5+ años',
        specialization: 'Desarrollo Web',
        description: 'Instructor experimentado con amplia experiencia en desarrollo web y tecnologías modernas.',
        skills: ['Web Development', 'JavaScript', 'HTML', 'CSS'],
        certifications: ['Web Development Certified'],
        students: 5000,
        courses: 5,
        rating: 4.5
    };

    card.innerHTML = `
        <div class="card-inner">
            <!-- Frente de la tarjeta -->
            <div class="card-front">
                <div class="course-image">
                    <img src="${course.thumbnail}" alt="${course.title}" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'">
                    <div class="course-overlay">
                        <button class="continue-btn" onclick="event.stopPropagation(); continueCourse(${course.id})">
                            Continuar
                        </button>
                    </div>
                </div>
                
                <div class="course-content">
                    <div class="course-header">
                        <div class="course-difficulty" style="color: ${difficultyColor}">
                            <i class="fas fa-signal"></i>
                            ${course.difficulty}
                        </div>
                    </div>
                    
                    <div class="course-title">${course.title}</div>
                    <p class="course-description">${course.description}</p>
                    
                    <div class="course-meta">
                        <span class="meta-item">
                            <i class="fas fa-clock"></i>
                            ${course.duration}
                        </span>
                        <span class="meta-item instructor-item" onclick="event.stopPropagation(); flipCard(this)">
                            <i class="fas fa-user-tie"></i>
                            ${course.instructor}
                            <i class="fas fa-info-circle ms-1"></i>
                        </span>
                    </div>

                    <div class="course-progress">
                        <div class="progress-label">Progreso del curso</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                        </div>
                        <span class="progress-percentage">${progressPercentage}%</span>
                    </div>

                    <div class="course-stats">
                        <div class="stat-item">
                            <i class="fas fa-star"></i>
                            <span>${course.rating}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-users"></i>
                            <span>${course.students.toLocaleString()}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-certificate"></i>
                            <span>${course.certificate ? 'Sí' : 'No'}</span>
                        </div>
                    </div>

                    <div class="course-footer">
                        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); continueCourse(${course.id})">
                            <i class="fas fa-play me-1"></i>Continuar
                        </button>
                        <button class="btn btn-outline-primary btn-sm" onclick="event.stopPropagation(); toggleFavorite(${course.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Reverso de la tarjeta (Perfil del instructor) -->
            <div class="card-back">
                <div class="instructor-profile">
                    <div class="instructor-header">
                        <div class="instructor-photo">
                            <img src="${instructor.photo}" alt="${instructor.name}" onerror="this.src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop&crop=face'">
                        </div>
                        <div class="instructor-info">
                            <h3 class="instructor-name">${instructor.name}</h3>
                            <p class="instructor-title">${instructor.title}</p>
                            <div class="instructor-rating">
                                <i class="fas fa-star"></i>
                                <span>${instructor.rating}</span>
                                <span class="instructor-experience">${instructor.experience}</span>
                            </div>
                        </div>
                    </div>

                    <div class="instructor-description">
                        <p>${instructor.description.length > 120 ? instructor.description.substring(0, 120) + '...' : instructor.description}</p>
                    </div>

                    <div class="instructor-specialization">
                        <h4>Especialización</h4>
                        <p>${instructor.specialization}</p>
                    </div>

                    <div class="instructor-skills">
                        <h4>Habilidades Principales</h4>
                        <div class="skills-tags">
                            ${instructor.skills.slice(0, 4).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            ${instructor.skills.length > 4 ? `<span class="skill-tag">+${instructor.skills.length - 4} más</span>` : ''}
                        </div>
                    </div>

                    <div class="instructor-stats">
                        <div class="instructor-stat">
                            <i class="fas fa-users"></i>
                            <span>${instructor.students.toLocaleString()} estudiantes</span>
                        </div>
                        <div class="instructor-stat">
                            <i class="fas fa-book"></i>
                            <span>${instructor.courses} cursos</span>
                        </div>
                    </div>

                    <div class="instructor-certifications">
                        <h4>Certificaciones Destacadas</h4>
                        <div class="certifications-list">
                            ${instructor.certifications.slice(0, 2).map(cert => `<span class="certification-tag">${cert}</span>`).join('')}
                            ${instructor.certifications.length > 2 ? `<span class="certification-tag">+${instructor.certifications.length - 2} más</span>` : ''}
                        </div>
                    </div>

                    <button class="btn btn-outline-primary btn-sm flip-back-btn" onclick="event.stopPropagation(); flipCardBack(this)">
                        <i class="fas fa-arrow-left me-1"></i>Volver al curso
                    </button>
                </div>
            </div>
        </div>
    `;

    // Agregar evento para abrir modal al hacer clic en la tarjeta
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.instructor-item') && !e.target.closest('.flip-back-btn')) {
            openCourseModal(course);
        }
    });

    console.log('Tarjeta creada exitosamente para:', course.title);
    return card;
}

// ==================== //
// FUNCIONES DE FILTRADO Y BÚSQUEDA
// ==================== //
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    applyFilters();
}

function setFilter(filter) {
    currentFilter = filter;
    
    // Actualizar botones
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    applyFilters();
}

function applyFilters() {
    filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(currentSearch) ||
                            course.description.toLowerCase().includes(currentSearch) ||
                            course.tags.some(tag => tag.toLowerCase().includes(currentSearch));
        
        const matchesFilter = currentFilter === 'all' ||
                            (currentFilter === 'in-progress' && course.progress > 0 && course.progress < 100) ||
                            (currentFilter === 'completed' && course.progress === 100) ||
                            (currentFilter === 'favorites' && course.favorite);
        
        return matchesSearch && matchesFilter;
    });
    
    renderCourses();
}

// ==================== //
// FUNCIONES DE VISTA
// ==================== //
function setView(view) {
    currentView = view;
    
    // Actualizar botones
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Actualizar grid
    coursesContainer.classList.toggle('list-view', view === 'list');
    
    // Re-animar cards
    setTimeout(animateCards, 100);
}

// ==================== //
// MODALES
// ==================== //
function openCourseModal(course) {
    selectedCourse = course;
    
    // Actualizar contenido del modal
    updateModalContent(course);
    
    // Mostrar modal
    courseDetailsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animar entrada
    setTimeout(() => {
        courseDetailsModal.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}

function updateModalContent(course) {
    // Actualizar información básica
    document.getElementById('modalCourseTitle').textContent = course.title;
    document.getElementById('modalCourseDescription').textContent = course.description;
    document.getElementById('modalCourseDuration').textContent = course.duration;
    document.getElementById('modalCourseDifficulty').textContent = course.difficulty;
    document.getElementById('modalCourseInstructor').textContent = course.instructor;
    
    // Actualizar imagen
    const courseImage = document.getElementById('modalCourseImage');
    if (courseImage) {
        courseImage.src = course.thumbnail;
        courseImage.alt = course.title;
    }
    
    // Actualizar progreso
    updateModalProgress(course);
    
    // Actualizar contenido
    updateModalContentList(course);
    
    // Actualizar notas
    loadCourseNotes(course.id);
}

function updateModalProgress(course) {
    const progressBar = document.getElementById('overallProgressBar');
    const progressText = document.getElementById('overallProgress');
    
    if (progressBar && progressText) {
        progressBar.style.width = `${course.progress}%`;
        progressText.textContent = `${course.progress}%`;
    }
}

function updateModalContentList(course) {
    const contentList = document.getElementById('modalContentList');
    if (!contentList) return;
    
    contentList.innerHTML = '';
    
    course.contents.forEach((content, index) => {
        const li = document.createElement('li');
        li.className = 'content-item';
        li.innerHTML = `
            <div class="content-info">
                <span class="content-number">${index + 1}</span>
                <span class="content-title">${content}</span>
            </div>
            <div class="content-status">
                <i class="fas fa-check-circle completed"></i>
            </div>
        `;
        contentList.appendChild(li);
    });
}

// ==================== //
// FUNCIONES DE PROGRESO
// ==================== //
function continueCourse(courseId) {
    // Si no se proporciona courseId, usar selectedCourse
    if (!courseId && selectedCourse) {
        courseId = selectedCourse.id;
    }
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    // Navegar a la página del curso correspondiente
    switch(courseId) {
        case 1: // JavaScript desde Cero
            window.location.href = 'cursos/javascript-desde-cero.html';
            break;
        case 2: // HTML y CSS Avanzado
            window.location.href = 'cursos/html-css-avanzado.html';
            break;
        case 3: // React para Principiantes
            window.location.href = 'cursos/react-para-principiantes.html';
            break;
        default:
            // Para otros cursos, simular progreso como antes
            course.progress = Math.min(course.progress + 10, 100);
            renderCourses();
            updateStats();
            showNotification(`¡Progreso actualizado! ${course.title} - ${course.progress}%`);
            saveState();
            break;
    }
}

function updateStats() {
    const totalCourses = courses.length;
    const completedCourses = courses.filter(c => c.progress === 100).length;
    const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100).length;
    const totalProgress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / totalCourses);
    
    // Actualizar estadísticas en el hero
    document.getElementById('totalCourses').textContent = totalCourses;
    document.getElementById('totalProgress').textContent = `${totalProgress}%`;
    document.getElementById('totalHours').textContent = `${courses.reduce((sum, c) => sum + parseInt(c.duration), 0)}h`;
    
    // Actualizar progreso general
    document.getElementById('overallProgress').textContent = `${totalProgress}%`;
    document.getElementById('overallProgressBar').style.width = `${totalProgress}%`;
    document.getElementById('completedCourses').textContent = completedCourses;
    document.getElementById('inProgressCourses').textContent = inProgressCourses;
    document.getElementById('completedHours').textContent = `${Math.round(totalProgress * 0.8)}h`;
}

// ==================== //
// FUNCIONES DE ANIMACIÓN
// ==================== //
function animateHeroSection() {
    // Animar partículas
    const particles = document.getElementById('heroParticles');
    if (particles) {
        particles.style.animation = 'particleFloat 20s ease-in-out infinite';
    }
    
    // Animar estadísticas
    animateNumbers();
}

function animateCards() {
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    numbers.forEach(number => {
        const target = parseInt(number.textContent);
        animateNumber(number, 0, target, 2000);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const startValue = start;
    const endValue = end;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.round(startValue + (endValue - startValue) * progress);
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// ==================== //
// FUNCIONES UTILITARIAS
// ==================== //
function getDifficultyColor(difficulty) {
    const colors = {
        'Principiante': '#10b981',
        'Intermedio': '#f59e0b',
        'Avanzado': '#ef4444'
    };
    return colors[difficulty] || '#6b7280';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message) {
    const toast = document.getElementById('addedToCartToast');
    if (toast) {
        toast.querySelector('.toast-body').textContent = message;
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }
}

function showEmptyState() {
    if (emptyState) {
        emptyState.style.display = 'block';
        coursesContainer.style.display = 'none';
    }
}

function hideEmptyState() {
    if (emptyState) {
        emptyState.style.display = 'none';
        coursesContainer.style.display = 'grid';
    }
}

// ==================== //
// FUNCIONES DE ESTADO
// ==================== //
function saveState() {
    const state = {
        currentView,
        currentFilter,
        currentSearch,
        courses: courses.map(c => ({ id: c.id, progress: c.progress, favorite: c.favorite }))
    };
    localStorage.setItem('coursesState', JSON.stringify(state));
}

function loadSavedState() {
    const saved = localStorage.getItem('coursesState');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            currentView = state.currentView || 'grid';
            currentFilter = state.currentFilter || 'all';
            currentSearch = state.currentSearch || '';
            
            // Restaurar progreso de cursos
            state.courses?.forEach(savedCourse => {
                const course = courses.find(c => c.id === savedCourse.id);
                if (course) {
                    course.progress = savedCourse.progress || 0;
                    course.favorite = savedCourse.favorite || false;
                }
            });
            
            // Aplicar estado
            setView(currentView);
            setFilter(currentFilter);
            if (currentSearch) {
                courseSearch.value = currentSearch;
                applyFilters();
            }
        } catch (error) {
            console.error('Error loading saved state:', error);
        }
    }
}

// ==================== //
// FUNCIONES PÚBLICAS
// ==================== //
window.showQuickStart = function() {
    quickStartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.showLearningPath = function() {
    // Implementar ruta de aprendizaje
    showNotification('Ruta de aprendizaje en desarrollo');
};



window.continueCourse = continueCourse;
window.openCourseModal = openCourseModal;
window.closeCourseModal = function() {
    closeModal(courseDetailsModal);
};

window.clearFilters = function() {
    currentSearch = '';
    currentFilter = 'all';
    courseSearch.value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    applyFilters();
};

// ==================== //
// FUNCIONES ADICIONALES
// ==================== //
function toggleFavorite(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        course.favorite = !course.favorite;
        renderCourses();
        saveState();
        
        const message = course.favorite ? 'Agregado a favoritos' : 'Removido de favoritos';
        showNotification(message);
    }
}

function startCourse() {
    if (selectedCourse) {
        showNotification(`Iniciando ${selectedCourse.title}...`);
        // Aquí se implementaría la lógica para iniciar el curso
    }
}

function addNote() {
    if (selectedCourse) {
        const note = prompt('Agregar nota para este curso:');
        if (note) {
            const notes = JSON.parse(localStorage.getItem(`courseNotes_${selectedCourse.id}`) || '[]');
            notes.push({
                id: Date.now(),
                text: note,
                date: new Date().toISOString()
            });
            localStorage.setItem(`courseNotes_${selectedCourse.id}`, JSON.stringify(notes));
            loadCourseNotes(selectedCourse.id);
            showNotification('Nota agregada exitosamente');
        }
    }
}

function loadCourseNotes(courseId) {
    const notesList = document.getElementById('notesList');
    if (!notesList) return;
    
    const notes = JSON.parse(localStorage.getItem(`courseNotes_${courseId}`) || '[]');
    
    notesList.innerHTML = notes.length === 0 ? 
        '<p class="text-muted">No hay notas para este curso</p>' : 
        notes.map(note => `
            <div class="note-item">
                <div class="note-content">${note.text}</div>
                <div class="note-date">${new Date(note.date).toLocaleDateString()}</div>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteNote(${courseId}, ${note.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
}

function deleteNote(courseId, noteId) {
    const notes = JSON.parse(localStorage.getItem(`courseNotes_${courseId}`) || '[]');
    const updatedNotes = notes.filter(note => note.id !== noteId);
    localStorage.setItem(`courseNotes_${courseId}`, JSON.stringify(updatedNotes));
    loadCourseNotes(courseId);
    showNotification('Nota eliminada');
}

// ==================== //
// FUNCIONES PARA VOLTEAR TARJETAS
// ==================== //
function flipCard(element) {
    const card = element.closest('.course-card');
    if (card) {
        card.classList.add('flipped');
    }
}

function flipCardBack(element) {
    const card = element.closest('.course-card');
    if (card) {
        card.classList.remove('flipped');
    }
}

// ==================== //
// INICIALIZACIÓN FINAL
// ==================== //
console.log('Courses.js loaded successfully!');

// ==================== //
// FUNCIONES ADICIONALES Y MEJORAS
// ==================== //

// Función para manejar el scroll y animaciones
function handleScroll() {
    const elements = document.querySelectorAll('.course-card, .progress-card, .stat-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

// Función para configurar animaciones
function setupAnimations() {
    // Agregar clases CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .course-card.animate-in {
            animation-delay: calc(var(--animation-order) * 0.1s);
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Función para actualizar el progreso general
function updateOverallProgress() {
    const totalProgress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length);
    const progressBar = document.getElementById('overallProgressBar');
    const progressText = document.getElementById('overallProgress');
    
    if (progressBar && progressText) {
        progressBar.style.width = '0%';
        progressText.textContent = '0%';
        
        setTimeout(() => {
            progressBar.style.width = `${totalProgress}%`;
            progressText.textContent = `${totalProgress}%`;
        }, 500);
    }
}

// Función para actualizar estadísticas de cursos
function updateCourseStats() {
    const completedCourses = courses.filter(c => c.progress === 100).length;
    const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100).length;
    const totalHours = courses.reduce((sum, c) => sum + parseInt(c.duration), 0);
    
    // Actualizar elementos si existen
    const elements = {
        'completedCourses': completedCourses,
        'inProgressCourses': inProgressCourses,
        'completedHours': `${Math.round(totalHours * 0.6)}h`
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
}

// Función para mostrar notificaciones mejoradas
function showNotification(message, type = 'success') {
    const toast = document.getElementById('addedToCartToast');
    if (toast) {
        const toastBody = toast.querySelector('.toast-body');
        const toastHeader = toast.querySelector('.toast-header');
        
        toastBody.textContent = message;
        
        // Cambiar color según el tipo
        if (type === 'error') {
            toastHeader.className = 'toast-header bg-danger text-white';
        } else if (type === 'warning') {
            toastHeader.className = 'toast-header bg-warning text-dark';
        } else {
            toastHeader.className = 'toast-header bg-success text-white';
        }
        
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }
}



// Función para mostrar analytics del curso
function showCourseAnalytics() {
    const modal = document.getElementById('analyticsModal');
    if (modal) {
        // Agregar clase active para mostrar el modal (CSS se encarga del posicionamiento)
        modal.classList.add('active');
        
        // Agregar clase al body para prevenir scroll
        document.body.classList.add('analytics-modal-open');
        
        // Inicializar analytics y crear gráficos
        initializeAnalytics();
        
        // Verificar si hay scroll disponible después de un pequeño delay
        setTimeout(() => {
            const contentWrapper = modal.querySelector('.analytics-content-wrapper');
            if (contentWrapper) {
                // Verificar si hay scroll disponible
                const hasScroll = contentWrapper.scrollHeight > contentWrapper.clientHeight;
                
                if (hasScroll) {
                    contentWrapper.classList.add('has-scroll');
                    
                    // Agregar indicadores de scroll
                    contentWrapper.addEventListener('scroll', function() {
                        const isAtTop = this.scrollTop === 0;
                        const isAtBottom = this.scrollTop + this.clientHeight >= this.scrollHeight - 1;
                        
                        this.classList.toggle('scroll-at-top', isAtTop);
                        this.classList.toggle('scroll-at-bottom', isAtBottom);
                    });
                    
                    // Verificar estado inicial
                    const isAtTop = contentWrapper.scrollTop === 0;
                    const isAtBottom = contentWrapper.scrollTop + contentWrapper.clientHeight >= contentWrapper.scrollHeight - 1;
                    
                    contentWrapper.classList.toggle('scroll-at-top', isAtTop);
                    contentWrapper.classList.toggle('scroll-at-bottom', isAtBottom);
                }
            }
        }, 100);
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal de analytics
function closeAnalyticsModal() {
    const modal = document.getElementById('analyticsModal');
    if (modal) {
        // Remover clase active para ocultar el modal (CSS se encarga de la animación)
        modal.classList.remove('active');
        
        // Remover clase del body
        document.body.classList.remove('analytics-modal-open');
        
        // Restaurar scroll del body
        document.body.style.overflow = '';
        
        // Limpiar clases de scroll
        const contentWrapper = modal.querySelector('.analytics-content-wrapper');
        if (contentWrapper) {
            contentWrapper.classList.remove('has-scroll', 'scroll-at-top', 'scroll-at-bottom');
        }
    }
}

// Función para detectar si hay scroll disponible
function checkScrollIndicator() {
    const modalBody = document.querySelector('.analytics-modal .modal-body');
    const contentWrapper = document.querySelector('.analytics-modal .analytics-content-wrapper');
    
    if (modalBody && contentWrapper) {
        const hasScroll = contentWrapper.scrollHeight > contentWrapper.clientHeight;
        modalBody.classList.toggle('has-scroll', hasScroll);
        contentWrapper.classList.toggle('has-scroll', hasScroll);
        
        console.log('Scroll disponible:', hasScroll ? 'Sí' : 'No');
        console.log('Altura del contenido:', contentWrapper.scrollHeight);
        console.log('Altura visible:', contentWrapper.clientHeight);
        
        // Si hay scroll, asegurar que la barra sea visible
        if (hasScroll) {
            contentWrapper.style.scrollbarWidth = 'auto';
            contentWrapper.style.scrollbarColor = 'rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1)';
        }
        
        // Agregar listener para detectar cambios en el scroll
        contentWrapper.addEventListener('scroll', function() {
            const isAtTop = contentWrapper.scrollTop === 0;
            const isAtBottom = contentWrapper.scrollTop + contentWrapper.clientHeight >= contentWrapper.scrollHeight;
            
            // Agregar clases para indicar posición del scroll
            contentWrapper.classList.toggle('scroll-at-top', isAtTop);
            contentWrapper.classList.toggle('scroll-at-bottom', isAtBottom);
        });
    }
}

// Función para verificar scroll periódicamente (para casos donde el contenido se carga dinámicamente)
function startScrollMonitoring() {
    const contentWrapper = document.querySelector('.analytics-modal .analytics-content-wrapper');
    if (contentWrapper) {
        // Verificar scroll cada 500ms durante los primeros 5 segundos
        let checkCount = 0;
        const maxChecks = 10;
        const checkInterval = setInterval(() => {
            checkScrollIndicator();
            checkCount++;
            if (checkCount >= maxChecks) {
                clearInterval(checkInterval);
            }
        }, 500);
    }
}

// Función para manejar la tecla ESC
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        closeAnalyticsModal();
    }
}

// Función para inicializar analytics
function initializeAnalytics() {
    try {
        console.log('Inicializando analytics...');
        
        // Actualizar estadísticas en tiempo real
        updateAnalyticsStats();
        
        // Llenar lista de progreso por curso
        populateCourseProgressList();
        
        // Generar actividad reciente dinámica
        generateRecentActivity();
        
        // Crear gráficos después de un pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => {
            console.log('Creando gráficos...');
            createOverallProgressChart();
            createCourseProgressChart();
            createPerformanceCharts();
            createTimeCharts();
            console.log('Gráficos creados exitosamente');
        }, 200);
        
    } catch (error) {
        console.error('Error inicializando analytics:', error);
    }
}

// Función para configurar tabs de analytics (si se necesitan en el futuro)
function setupAnalyticsTabs() {
    // Esta función se mantiene para futuras implementaciones de tabs
    // Por ahora, el modal de analytics no usa tabs
    console.log('Tabs de analytics configurados (si se necesitan)');
}

// Función para actualizar estadísticas de analytics
function updateAnalyticsStats() {
    try {
        const totalCourses = courses.length;
        const completedCourses = courses.filter(c => c.progress === 100).length;
        const activeCourses = totalCourses - completedCourses;
        const overallProgress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / totalCourses);
        
        // Calcular métricas adicionales
        const averageRating = courses.reduce((sum, c) => sum + c.rating, 0) / totalCourses;
        const totalHours = courses.reduce((sum, c) => {
            const hours = parseInt(c.duration.split(' ')[0]);
            return sum + (isNaN(hours) ? 0 : hours);
        }, 0);
        
        const completedHours = Math.round((overallProgress / 100) * totalHours);
        const averageTimePerCourse = totalHours / totalCourses;
        const learningEfficiency = Math.round((overallProgress / averageTimePerCourse) * 10);
        
        // Actualizar números en la vista general
        const overallProgressNumber = document.getElementById('overallProgressNumber');
        const activeCoursesNumber = document.getElementById('activeCoursesNumber');
        const totalHoursElement = document.getElementById('totalHours');
        const averageGradeElement = document.getElementById('averageGrade');
        
        if (overallProgressNumber) overallProgressNumber.textContent = overallProgress + '%';
        if (activeCoursesNumber) activeCoursesNumber.textContent = activeCourses;
        if (totalHoursElement) totalHoursElement.textContent = completedHours + 'h';
        if (averageGradeElement) averageGradeElement.textContent = averageRating.toFixed(1);
        
        // Actualizar progreso general en el hero
        const overallProgressHero = document.getElementById('overallProgress');
        if (overallProgressHero) overallProgressHero.textContent = overallProgress + '%';
        
        const overallProgressBar = document.getElementById('overallProgressBar');
        if (overallProgressBar) overallProgressBar.style.width = overallProgress + '%';
        
        // Actualizar estadísticas del hero
        const totalCoursesHero = document.getElementById('totalCourses');
        if (totalCoursesHero) totalCoursesHero.textContent = totalCourses;
        
        const totalProgressHero = document.getElementById('totalProgress');
        if (totalProgressHero) totalProgressHero.textContent = overallProgress + '%';
        
        const totalHoursHero = document.getElementById('totalHours');
        if (totalHoursHero) totalHoursHero.textContent = completedHours + 'h';
        
        // Actualizar estadísticas adicionales si existen
        updateAdditionalStats({
            totalCourses,
            completedCourses,
            activeCourses,
            overallProgress,
            averageRating,
            totalHours,
            completedHours,
            averageTimePerCourse,
            learningEfficiency
        });
        
    } catch (error) {
        console.error('Error actualizando estadísticas de analytics:', error);
    }
}

// Función para actualizar estadísticas adicionales
function updateAdditionalStats(stats) {
    try {
        // Buscar y actualizar elementos adicionales si existen
        const elements = {
            'completedCoursesNumber': stats.completedCourses,
            'totalHoursTotal': stats.totalHours + 'h',
            'averageTimePerCourse': stats.averageTimePerCourse.toFixed(1) + 'h',
            'learningEfficiency': stats.learningEfficiency + '%',
            'averageRating': stats.averageRating.toFixed(1)
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        // Actualizar badges de rendimiento si existen
        updatePerformanceBadges(stats);
        
    } catch (error) {
        console.error('Error actualizando estadísticas adicionales:', error);
    }
}

// Función para actualizar badges de rendimiento
function updatePerformanceBadges(stats) {
    try {
        // Crear badges de rendimiento dinámicamente
        const performanceContainer = document.querySelector('.performance-grid');
        if (!performanceContainer) return;
        
        // Limpiar contenido existente
        performanceContainer.innerHTML = '';
        
        // Crear cards de rendimiento mejorados
        const performanceCards = [
            {
                icon: 'fas fa-rocket',
                label: 'Velocidad de Aprendizaje',
                value: stats.learningEfficiency + '%',
                color: getPerformanceColor(stats.learningEfficiency),
                description: 'Basado en progreso vs tiempo'
            },
            {
                icon: 'fas fa-brain',
                label: 'Retención',
                value: Math.round(stats.averageRating * 20) + '%',
                color: getPerformanceColor(stats.averageRating * 20),
                description: 'Basado en calificaciones'
            },
            {
                icon: 'fas fa-target',
                label: 'Eficiencia',
                value: Math.round((stats.completedHours / stats.totalHours) * 100) + '%',
                color: getPerformanceColor((stats.completedHours / stats.totalHours) * 100),
                description: 'Tiempo aprovechado'
            },
            {
                icon: 'fas fa-trending-up',
                label: 'Progreso Semanal',
                value: Math.round(stats.overallProgress / 4) + '%',
                color: getPerformanceColor(stats.overallProgress / 4),
                description: 'Promedio semanal'
            }
        ];
        
        performanceCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'performance-card';
            cardElement.innerHTML = `
                <div class="performance-icon" style="color: ${card.color}">
                    <i class="${card.icon}"></i>
                </div>
                <div class="performance-content">
                    <span class="performance-label">${card.label}</span>
                    <span class="performance-value" style="color: ${card.color}">${card.value}</span>
                    <small class="performance-description">${card.description}</small>
                </div>
            `;
            performanceContainer.appendChild(cardElement);
        });
        
    } catch (error) {
        console.error('Error actualizando badges de rendimiento:', error);
    }
}

// Función para obtener color basado en rendimiento
function getPerformanceColor(score) {
    if (score >= 90) return '#28a745'; // Verde
    if (score >= 80) return '#17a2b8'; // Azul
    if (score >= 70) return '#ffc107'; // Amarillo
    if (score >= 60) return '#fd7e14'; // Naranja
    return '#dc3545'; // Rojo
}

// Función para crear gráfico de progreso general
function createOverallProgressChart() {
    try {
        const canvas = document.getElementById('overallProgressChart');
        if (!canvas) {
            console.log('Canvas de progreso general no encontrado, creando uno nuevo');
            return;
        }
        
        // Configurar canvas
        canvas.width = 200;
        canvas.height = 200;
        
        const ctx = canvas.getContext('2d');
        const progress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length);
        
        // Dibujar círculo de progreso
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 60;
        
        // Fondo del círculo
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#444444';
        ctx.lineWidth = 12;
        ctx.stroke();
        
        // Progreso
        const angle = (progress / 100) * 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + angle);
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 12;
        ctx.stroke();
        
        // Texto del porcentaje
        ctx.fillStyle = '#333';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(progress + '%', centerX, centerY);
        
    } catch (error) {
        console.error('Error creando gráfico de progreso general:', error);
    }
}

// Función para crear gráfico de progreso por curso
function createCourseProgressChart() {
    try {
        const canvas = document.getElementById('courseProgressChart');
        if (!canvas) {
            console.log('Canvas de progreso por curso no encontrado');
            return;
        }
        
        // Configurar canvas
        canvas.width = 400;
        canvas.height = 300;
        
        const ctx = canvas.getContext('2d');
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Configurar gráfico de barras
        const barWidth = 40;
        const barSpacing = 40;
        const startX = 80;
        const startY = canvas.height - 80;
        const maxHeight = startY - 60;
        
        // Dibujar ejes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX, 40);
        ctx.moveTo(startX, startY);
        ctx.lineTo(canvas.width - 20, startY);
        ctx.stroke();
        
        // Dibujar barras
        courses.forEach((course, index) => {
            const x = startX + index * (barWidth + barSpacing);
            const barHeight = (course.progress / 100) * maxHeight;
            const y = startY - barHeight;
            
            // Barra de progreso
            ctx.fillStyle = course.progress === 100 ? '#28a745' : '#007bff';
            ctx.fillRect(x, y, barWidth, barHeight);
            
            // Porcentaje encima de la barra
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(course.progress + '%', x + barWidth / 2, y - 10);
            
            // Etiqueta del curso (dividida en múltiples líneas si es necesario)
            ctx.fillStyle = '#ffffff';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            
            const words = course.title.split(' ');
            const maxWordsPerLine = 2;
            const lineHeight = 12;
            
            for (let i = 0; i < words.length; i += maxWordsPerLine) {
                const line = words.slice(i, i + maxWordsPerLine).join(' ');
                const lineY = startY + 20 + (Math.floor(i / maxWordsPerLine) * lineHeight);
                ctx.fillText(line, x + barWidth / 2, lineY);
            }
        });
        
    } catch (error) {
        console.error('Error creando gráfico de progreso por curso:', error);
    }
}

// Función para crear gráficos de rendimiento
function createPerformanceCharts() {
    try {
        // Gráfico de velocidad de aprendizaje
        const learningSpeedCanvas = document.getElementById('learningSpeedChart');
        if (learningSpeedCanvas) {
            learningSpeedCanvas.width = 150;
            learningSpeedCanvas.height = 100;
            const ctx = learningSpeedCanvas.getContext('2d');
            drawSimpleBarChart(ctx, 85, learningSpeedCanvas.width, learningSpeedCanvas.height);
        }
        
        // Gráfico de retención
        const retentionCanvas = document.getElementById('retentionChart');
        if (retentionCanvas) {
            retentionCanvas.width = 150;
            retentionCanvas.height = 100;
            const ctx = retentionCanvas.getContext('2d');
            drawSimpleBarChart(ctx, 92, retentionCanvas.width, retentionCanvas.height);
        }
    } catch (error) {
        console.error('Error creando gráficos de rendimiento:', error);
    }
}

// Función para crear gráficos de tiempo
function createTimeCharts() {
    try {
        // Gráfico de actividad semanal
        const weeklyCanvas = document.getElementById('weeklyActivityChart');
        if (weeklyCanvas) {
            weeklyCanvas.width = 300;
            weeklyCanvas.height = 200;
            const ctx = weeklyCanvas.getContext('2d');
            drawWeeklyActivityChart(ctx, weeklyCanvas.width, weeklyCanvas.height);
        }
        
        // Gráfico de distribución del tiempo
        const breakdownCanvas = document.getElementById('timeBreakdownChart');
        if (breakdownCanvas) {
            breakdownCanvas.width = 200;
            breakdownCanvas.height = 200;
            const ctx = breakdownCanvas.getContext('2d');
            drawTimeBreakdownChart(ctx, breakdownCanvas.width, breakdownCanvas.height);
        }
    } catch (error) {
        console.error('Error creando gráficos de tiempo:', error);
    }
}

// Función auxiliar para dibujar gráfico de barras simple
function drawSimpleBarChart(ctx, value, width, height) {
    try {
        // Limpiar canvas
        ctx.clearRect(0, 0, width, height);
        
        // Configurar dimensiones
        const barWidth = width * 0.5;
        const maxBarHeight = height * 0.6;
        const barHeight = (value / 100) * maxBarHeight;
        const x = (width - barWidth) / 2;
        const y = height - barHeight - 30;
        
        // Dibujar barra de fondo
        ctx.fillStyle = '#444444';
        ctx.fillRect(x, height - maxBarHeight - 30, barWidth, maxBarHeight);
        
        // Dibujar barra de progreso
        ctx.fillStyle = value >= 80 ? '#28a745' : value >= 60 ? '#ffc107' : '#dc3545';
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Dibujar borde de la barra
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, barWidth, barHeight);
        
        // Dibujar texto del valor
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value + '%', width / 2, height - 10);
        
        // Dibujar líneas de referencia
        ctx.strokeStyle = '#666666';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 4; i++) {
            const refY = height - maxBarHeight - 30 + (maxBarHeight / 4) * i;
            ctx.beginPath();
            ctx.moveTo(x - 5, refY);
            ctx.lineTo(x, refY);
            ctx.stroke();
        }
        
    } catch (error) {
        console.error('Error dibujando gráfico de barras simple:', error);
    }
}

// Función para dibujar gráfico de actividad semanal
function drawWeeklyActivityChart(ctx, width, height) {
    try {
        // Limpiar canvas
        ctx.clearRect(0, 0, width, height);
        
        // Datos de actividad semanal (simulados)
        const weeklyData = [65, 78, 82, 75, 90, 85, 70];
        const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        
        // Configurar dimensiones
        const barWidth = (width - 100) / weeklyData.length;
        const maxHeight = height - 80;
        const startX = 50;
        const startY = height - 50;
        
        // Dibujar ejes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX, 30);
        ctx.moveTo(startX, startY);
        ctx.lineTo(width - 30, startY);
        ctx.stroke();
        
        // Dibujar líneas de referencia horizontales
        ctx.strokeStyle = '#444444';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 4; i++) {
            const y = startY - (maxHeight / 4) * i;
            ctx.beginPath();
            ctx.moveTo(startX, y);
            ctx.lineTo(width - 30, y);
            ctx.stroke();
        }
        
        // Dibujar barras
        weeklyData.forEach((value, index) => {
            const x = startX + index * barWidth + barWidth / 2;
            const barHeight = (value / 100) * maxHeight;
            const y = startY - barHeight;
            
            // Barra de actividad
            ctx.fillStyle = value >= 80 ? '#28a745' : value >= 60 ? '#ffc107' : '#007bff';
            ctx.fillRect(x - barWidth / 2, y, barWidth - 4, barHeight);
            
            // Etiqueta del día
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(days[index], x, startY + 20);
            
            // Valor de actividad
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px Arial';
            ctx.fillText(value + '%', x, y - 8);
        });
        
        // Dibujar título del eje Y
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.save();
        ctx.translate(20, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Actividad (%)', 0, 0);
        ctx.restore();
        
    } catch (error) {
        console.error('Error dibujando gráfico de actividad semanal:', error);
    }
}

// Función para dibujar gráfico de distribución del tiempo
function drawTimeBreakdownChart(ctx, width, height) {
    try {
        // Limpiar canvas
        ctx.clearRect(0, 0, width, height);
        
        // Datos de distribución del tiempo (simulados)
        const timeData = [
            { label: 'Videos', value: 40, color: '#007bff' },
            { label: 'Lecturas', value: 25, color: '#28a745' },
            { label: 'Ejercicios', value: 20, color: '#ffc107' },
            { label: 'Proyectos', value: 15, color: '#dc3545' }
        ];
        
        // Configurar gráfico circular
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 30;
        
        let currentAngle = -Math.PI / 2;
        const total = timeData.reduce((sum, item) => sum + item.value, 0);
        
        // Dibujar sectores
        timeData.forEach(item => {
            const sliceAngle = (item.value / total) * 2 * Math.PI;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = item.color;
            ctx.fill();
            
            // Borde del sector
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            currentAngle += sliceAngle;
        });
        
        // Dibujar etiquetas y leyenda
        const legendStartY = centerY + radius + 20;
        const legendSpacing = 25;
        
        timeData.forEach((item, index) => {
            // Calcular el ángulo medio del sector para la etiqueta interna
            const sliceAngle = (item.value / total) * 2 * Math.PI;
            const midAngle = currentAngle - sliceAngle / 2;
            const labelRadius = radius * 0.6;
            const labelX = centerX + Math.cos(midAngle) * labelRadius;
            const labelY = centerY + Math.sin(midAngle) * labelRadius;
            
            // Etiqueta interna con porcentaje
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(item.value + '%', labelX, labelY);
            
            // Leyenda externa
            const legendY = legendStartY + index * legendSpacing;
            
            // Cuadrado de color
            ctx.fillStyle = item.color;
            ctx.fillRect(centerX - 60, legendY - 8, 16, 16);
            
            // Texto de la leyenda
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(item.label, centerX - 40, legendY);
        });
        
    } catch (error) {
        console.error('Error dibujando gráfico de distribución del tiempo:', error);
    }
}

// Función para llenar la lista de progreso por curso
function populateCourseProgressList() {
    try {
        const progressList = document.getElementById('courseProgressList');
        if (!progressList) return;
        
        progressList.innerHTML = '';
        
        // Datos mejorados para cada curso
        const enhancedCourseData = courses.map(course => {
            const timeRemaining = course.duration.split(' ')[0] - Math.floor((course.progress / 100) * course.duration.split(' ')[0]);
            const nextTask = getNextTask(course);
            const lastActivity = getLastActivity(course);
            const performance = getPerformanceScore(course);
            
            return {
                ...course,
                timeRemaining: Math.max(0, timeRemaining),
                nextTask,
                lastActivity,
                performance
            };
        });
        
        enhancedCourseData.forEach(course => {
            const progressItem = document.createElement('div');
            progressItem.className = 'progress-item';
            progressItem.innerHTML = `
                <div class="progress-item-info">
                    <div class="progress-item-title">
                        <h6>${course.title}</h6>
                        <span class="instructor-name">${course.instructor}</span>
                    </div>
                    <div class="progress-item-details">
                        <span class="difficulty-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                        <span class="time-remaining">${course.timeRemaining}h restantes</span>
                    </div>
                </div>
                <div class="progress-item-bar">
                    <div class="progress-item-fill" style="width: ${course.progress}%"></div>
                    <span class="progress-item-percentage">${course.progress}%</span>
                </div>
                <div class="progress-item-actions">
                    <div class="next-task">
                        <small class="text-muted">Próxima tarea:</small>
                        <span class="task-name">${course.nextTask}</span>
                    </div>
                    <div class="performance-score">
                        <span class="score-label">Rendimiento:</span>
                        <span class="score-value ${getPerformanceClass(course.performance)}">${course.performance}%</span>
                    </div>
                </div>
            `;
            progressList.appendChild(progressItem);
        });
        
    } catch (error) {
        console.error('Error llenando lista de progreso por curso:', error);
    }
}

// Función auxiliar para obtener la próxima tarea
function getNextTask(course) {
    const tasks = course.tasks || [];
    if (tasks.length === 0) return 'No hay tareas pendientes';
    
    // Simular progreso de tareas basado en el progreso del curso
    const completedTasks = Math.floor((course.progress / 100) * tasks.length);
    const nextTaskIndex = Math.min(completedTasks, tasks.length - 1);
    
    return tasks[nextTaskIndex] || 'Curso completado';
}

// Función auxiliar para obtener la última actividad
function getLastActivity(course) {
    const activities = [
        'Completaste un módulo',
        'Enviaste una tarea',
        'Participaste en el foro',
        'Viste un video',
        'Completaste un quiz',
        'Iniciaste una lección'
    ];
    
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const timeAgo = getRandomTimeAgo();
    
    return `${randomActivity} ${timeAgo}`;
}

// Función auxiliar para obtener tiempo aleatorio
function getRandomTimeAgo() {
    const times = [
        'hace 30 minutos',
        'hace 1 hora',
        'hace 2 horas',
        'hace 1 día',
        'hace 2 días',
        'hace 1 semana'
    ];
    
    return times[Math.floor(Math.random() * times.length)];
}

// Función auxiliar para calcular score de rendimiento
function getPerformanceScore(course) {
    // Basado en progreso, dificultad y rating
    let baseScore = course.progress;
    
    // Bonus por dificultad
    if (course.difficulty === 'Avanzado') baseScore += 10;
    else if (course.difficulty === 'Intermedio') baseScore += 5;
    
    // Bonus por rating
    if (course.rating >= 4.5) baseScore += 15;
    else if (course.rating >= 4.0) baseScore += 10;
    
    return Math.min(100, Math.max(0, Math.round(baseScore)));
}

// Función auxiliar para obtener clase CSS del rendimiento
function getPerformanceClass(score) {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'average';
    if (score >= 60) return 'below-average';
    return 'poor';
}

// Función para continuar curso (mantenida para compatibilidad con otros cursos)
function continueCourseLegacy(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    // Simular progreso
    const currentProgress = course.progress;
    const newProgress = Math.min(currentProgress + 10, 100);
    course.progress = newProgress;
    
    // Actualizar UI
    renderCourses();
    updateStats();
    updateOverallProgress();
    
    // Mostrar notificación
    const progressMessage = newProgress === 100 ? 
        `¡Felicidades! Has completado ${course.title}` : 
        `¡Progreso actualizado! ${course.title} - ${newProgress}%`;
    
    showNotification(progressMessage, newProgress === 100 ? 'success' : 'info');
    
    // Guardar estado
    saveState();
    
    // Si el curso está completado, mostrar certificado
    if (newProgress === 100) {
        setTimeout(() => {
            showCertificate(course);
        }, 1000);
    }
}

// Función para mostrar certificado
function showCertificate(course) {
    const certificateModal = document.createElement('div');
    certificateModal.className = 'certificate-modal course-details-modal active';
    certificateModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-certificate me-2"></i>¡Certificado Completado!</h3>
                <button class="close-modal" onclick="this.closest('.certificate-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body text-center">
                <div class="certificate-content">
                    <div class="certificate-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <h4>¡Felicidades!</h4>
                    <p>Has completado exitosamente el curso:</p>
                    <h5 class="text-primary">${course.title}</h5>
                    <p class="text-muted">Instructor: ${course.instructor}</p>
                    <p class="text-muted">Fecha de finalización: ${new Date().toLocaleDateString()}</p>
                    <div class="certificate-actions">
                        <button class="btn btn-primary" onclick="downloadCertificate(${course.id})">
                            <i class="fas fa-download me-1"></i>Descargar Certificado
                        </button>
                        <button class="btn btn-outline-primary" onclick="shareCertificate(${course.id})">
                            <i class="fas fa-share me-1"></i>Compartir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(certificateModal);
}

// Función para descargar certificado
function downloadCertificate(courseId) {
    showNotification('Descargando certificado...', 'info');
    // Aquí se implementaría la lógica para descargar el certificado
    setTimeout(() => {
        showNotification('Certificado descargado exitosamente');
    }, 2000);
}

// Función para compartir certificado
function shareCertificate(courseId) {
    if (navigator.share) {
        navigator.share({
            title: 'Certificado Completado',
            text: `He completado el curso en Lumina Learning`,
            url: window.location.href
        });
    } else {
        showNotification('Función de compartir no disponible en este navegador', 'warning');
    }
}

// Función para manejar notas
function addNote() {
    if (selectedCourse) {
        const noteText = prompt('Agregar nota para este curso:');
        if (noteText && noteText.trim()) {
            const notes = JSON.parse(localStorage.getItem(`courseNotes_${selectedCourse.id}`) || '[]');
            const newNote = {
                id: Date.now(),
                text: noteText.trim(),
                date: new Date().toISOString()
            };
            notes.push(newNote);
            localStorage.setItem(`courseNotes_${selectedCourse.id}`, JSON.stringify(notes));
            loadCourseNotes(selectedCourse.id);
            showNotification('Nota agregada exitosamente');
        }
    }
}

// Función para cargar notas
function loadCourseNotes(courseId) {
    const notesList = document.getElementById('notesList');
    if (!notesList) return;
    
    const notes = JSON.parse(localStorage.getItem(`courseNotes_${courseId}`) || '[]');
    
    if (notes.length === 0) {
        notesList.innerHTML = '<p class="text-muted text-center">No hay notas para este curso</p>';
    } else {
        notesList.innerHTML = notes.map(note => `
            <div class="note-item">
                <div class="note-content">${note.text}</div>
                <div class="note-date">${new Date(note.date).toLocaleDateString()}</div>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteNote(${courseId}, ${note.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

// Función para eliminar nota
function deleteNote(courseId, noteId) {
    const notes = JSON.parse(localStorage.getItem(`courseNotes_${courseId}`) || '[]');
    const updatedNotes = notes.filter(note => note.id !== noteId);
    localStorage.setItem(`courseNotes_${courseId}`, JSON.stringify(updatedNotes));
    loadCourseNotes(courseId);
    showNotification('Nota eliminada');
}

// Función para manejar favoritos
function toggleFavorite(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        course.favorite = !course.favorite;
        renderCourses();
        saveState();
        
        const message = course.favorite ? 'Agregado a favoritos' : 'Removido de favoritos';
        showNotification(message);
    }
}

// Función para iniciar curso
function startCourse() {
    if (selectedCourse) {
        showNotification(`Iniciando ${selectedCourse.title}...`, 'info');
        // Aquí se implementaría la lógica para iniciar el curso
        setTimeout(() => {
            showNotification(`¡Bienvenido a ${selectedCourse.title}!`);
        }, 1000);
    }
}

// Función para manejar el estado guardado
function saveState() {
    const state = {
        currentView,
        currentFilter,
        currentSearch,
        courses: courses.map(c => ({ 
            id: c.id, 
            progress: c.progress, 
            favorite: c.favorite || false 
        }))
    };
    localStorage.setItem('coursesState', JSON.stringify(state));
}

// Función para cargar estado guardado
function loadSavedState() {
    const saved = localStorage.getItem('coursesState');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            currentView = state.currentView || 'grid';
            currentFilter = state.currentFilter || 'all';
            currentSearch = state.currentSearch || '';
            
            // Restaurar progreso de cursos
            state.courses?.forEach(savedCourse => {
                const course = courses.find(c => c.id === savedCourse.id);
                if (course) {
                    course.progress = savedCourse.progress || 0;
                    course.favorite = savedCourse.favorite || false;
                }
            });
            
            // Aplicar estado
            setView(currentView);
            setFilter(currentFilter);
            if (currentSearch) {
                courseSearch.value = currentSearch;
                applyFilters();
            }
        } catch (error) {
            console.error('Error loading saved state:', error);
        }
    }
}

// Función para limpiar filtros
function clearFilters() {
    currentSearch = '';
    currentFilter = 'all';
    if (courseSearch) {
        courseSearch.value = '';
    }
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilterBtn) {
        allFilterBtn.classList.add('active');
    }
    applyFilters();
    showNotification('Filtros limpiados');
}

// Función para manejar el cierre de modales
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.transform = 'translateY(20px) scale(0.95)';
    }
}

function closeAllModals() {
    document.querySelectorAll('.course-details-modal, .certificate-modal, .analytics-modal').forEach(modal => {
        closeModal(modal);
    });
}

// Función para manejar el cierre específico de modales
function closeCourseModal() {
    const modal = document.getElementById('courseDetailsModal');
    if (modal) {
        closeModal(modal);
    }
}

// Exportar funciones para acceso global
window.continueCourse = continueCourse;
window.openCourseModal = openCourseModal;
window.closeCourseModal = closeCourseModal;
window.clearFilters = clearFilters;
window.toggleFavorite = toggleFavorite;
window.startCourse = startCourse;
window.addNote = addNote;
window.deleteNote = deleteNote;
window.flipCard = flipCard;
window.flipCardBack = flipCardBack;
window.showCourseAnalytics = showCourseAnalytics;
window.closeAnalyticsModal = closeAnalyticsModal;
window.cleanupAnalyticsModal = cleanupAnalyticsModal;

// Inicialización final
console.log('Courses.js enhanced version loaded successfully!');

// Función para generar actividad reciente dinámica
function generateRecentActivity() {
    try {
        const activityList = document.querySelector('.activity-list');
        if (!activityList) return;
        
        // Limpiar contenido existente
        activityList.innerHTML = '';
        
        // Generar actividades basadas en los cursos del usuario
        const activities = generateUserActivities();
        
        activities.forEach(activity => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item';
            activityItem.innerHTML = `
                <div class="activity-icon ${activity.type}">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <span class="activity-title">${activity.title}</span>
                    <span class="activity-time">${activity.time}</span>
                    ${activity.details ? `<small class="activity-details">${activity.details}</small>` : ''}
                </div>
            `;
            activityList.appendChild(activityItem);
        });
        
    } catch (error) {
        console.error('Error generando actividad reciente:', error);
    }
}

// Función para generar actividades del usuario
function generateUserActivities() {
    const activities = [];
    
    // Actividades basadas en progreso de cursos
    courses.forEach(course => {
        if (course.progress > 0) {
            // Actividad de progreso
            if (course.progress === 100) {
                activities.push({
                    type: 'success',
                    icon: 'fas fa-trophy',
                    title: `¡Completaste ${course.title}!`,
                    time: getRandomTimeAgo(),
                    details: `Calificación: ${course.rating}/5.0`
                });
            } else if (course.progress >= 50) {
                activities.push({
                    type: 'info',
                    icon: 'fas fa-play',
                    title: `Continuaste ${course.title}`,
                    time: getRandomTimeAgo(),
                    details: `Progreso: ${course.progress}%`
                });
            } else if (course.progress >= 25) {
                activities.push({
                    type: 'info',
                    icon: 'fas fa-book-open',
                    title: `Iniciaste ${course.title}`,
                    time: getRandomTimeAgo(),
                    details: `Dificultad: ${course.difficulty}`
                });
            }
        }
    });
    
    // Actividades de logros
    const totalProgress = courses.reduce((sum, c) => sum + c.progress, 0) / courses.length;
    if (totalProgress >= 75) {
        activities.push({
            type: 'success',
            icon: 'fas fa-star',
            title: '¡Logro desbloqueado: Estudiante Avanzado!',
            time: getRandomTimeAgo(),
            details: 'Completaste el 75% de tus cursos'
        });
    }
    
    if (totalProgress >= 50) {
        activities.push({
            type: 'info',
            icon: 'fas fa-medal',
            title: '¡Logro desbloqueado: Estudiante Dedicado!',
            time: getRandomTimeAgo(),
            details: 'Completaste el 50% de tus cursos'
        });
    }
    
    // Actividades de tiempo de estudio
    const totalHours = courses.reduce((sum, c) => {
        const hours = parseInt(c.duration.split(' ')[0]);
        return sum + (isNaN(hours) ? 0 : hours);
    }, 0);
    
    if (totalHours >= 20) {
        activities.push({
            type: 'warning',
            icon: 'fas fa-clock',
            title: 'Recordatorio: Revisa tu progreso semanal',
            time: 'Hoy',
            details: 'Llevas más de 20 horas estudiando'
        });
    }
    
    // Actividades de calificaciones
    const averageRating = courses.reduce((sum, c) => sum + c.rating, 0) / courses.length;
    if (averageRating >= 4.5) {
        activities.push({
            type: 'success',
            icon: 'fas fa-award',
            title: '¡Excelente rendimiento académico!',
            time: getRandomTimeAgo(),
            details: `Promedio: ${averageRating.toFixed(1)}/5.0`
        });
    }
    
    // Ordenar por tiempo (más recientes primero)
    activities.sort((a, b) => {
        const timeOrder = { 'Hoy': 0, 'hace 30 minutos': 1, 'hace 1 hora': 2, 'hace 2 horas': 3, 'hace 1 día': 4, 'hace 2 días': 5, 'hace 1 semana': 6 };
        return timeOrder[a.time] - timeOrder[b.time];
    });
    
    // Limitar a 6 actividades
    return activities.slice(0, 6);
}

// Función para limpiar el modal cuando se cambia de página
function cleanupAnalyticsModal() {
    const modal = document.getElementById('analyticsModal');
    if (modal) {
        // Remover todas las clases
        modal.classList.remove('active', 'has-scroll');
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        
        // Restaurar scroll del body
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        
        // Limpiar clases de scroll del contenido
        const contentWrapper = modal.querySelector('.analytics-content-wrapper');
        if (contentWrapper) {
            contentWrapper.classList.remove('has-scroll', 'scroll-at-top', 'scroll-at-bottom');
        }
        
        console.log('Modal de analytics limpiado correctamente');
    }
}

// Agregar listener para limpiar el modal cuando se cambia de página
window.addEventListener('beforeunload', cleanupAnalyticsModal);

// Agregar listener para limpiar el modal cuando se navega
window.addEventListener('popstate', cleanupAnalyticsModal);