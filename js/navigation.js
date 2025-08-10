function setupEventListeners() {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavigation);
        });
    } catch (error) {
        console.error('Setup event listeners error:', error);
    }
}

function handleNavigation(event) {
    try {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        const sectionId = href.replace('#', '');
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
        
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            loadSectionContent(sectionId);
        }
        
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu'));
        if (offcanvas) {
            offcanvas.hide();
        }
    } catch (error) {
        console.error('Handle navigation error:', error);
    }
}

function loadSectionContent(sectionId) {
    try {
        const section = document.getElementById(sectionId);
        const container = section.querySelector('.container');
        
        if (!container) return;
        
        let content = '';
        
        switch (sectionId) {
            case 'courses':
                if (!container.querySelector('.courses-container')) {
                    content = Courses();
                    container.innerHTML += content;
                }
                break;
            case 'calendar':
                if (!container.querySelector('.calendar-container')) {
                    content = Calendar();
                    container.innerHTML += content;
                }
                break;
            case 'schedule':
                if (!container.querySelector('.schedule-container')) {
                    content = Schedule();
                    container.innerHTML += content;
                }
                break;
            case 'blog':
                if (!container.querySelector('.blog-container')) {
                    content = Blog();
                    container.innerHTML += content;
                }
                break;
            case 'administration':
                if (!container.querySelector('.admin-container')) {
                    content = Administration();
                    container.innerHTML += content;
                }
                break;
            case 'contact':
                if (!container.querySelector('.contact-container')) {
                    content = Contact();
                    container.innerHTML += content;
                }
                break;
            case 'courses-est':
                if (!container.querySelector('.courses-est-container')) {
                    content = CoursesEst();
                    container.innerHTML += content;
                }
                break;
        }
    } catch (error) {
        console.error('Load section content error:', error);
    }
}
