document.addEventListener('DOMContentLoaded', function() {
    try {
        checkServerAuthentication();
    } catch (error) {
        console.error('App initialization error:', error);
        reportError(error);
    }
});

async function checkServerAuthentication() {
    try {
        const response = await fetch('/auth/check');
        const data = await response.json();
        
        if (data.authenticated) {
            initializeApp(data.user);
            loadModals();
            setupEventListeners();
            displayWelcomeMessage();
            addLogoutButton();
        } else {
            window.location.href = '/login';
        }
    } catch (error) {
        console.error('Authentication check error:', error);
        window.location.href = '/login';
    }
}

function initializeApp(user) {
    try {
        console.log('Inicializando Campus Virtual LMS...');
        
        window.currentUser = user;
        
        const dashboardContent = Dashboard();
        const dashboardSection = document.getElementById('dashboard');
        
        if (dashboardSection && !dashboardSection.querySelector('.notices-section')) {
            dashboardSection.innerHTML += dashboardContent;
        }
        
        updateUserInfo(user);
        checkNotifications();
        
    } catch (error) {
        console.error('Initialize app error:', error);
        reportError(error);
    }
}

function updateUserInfo(user) {
    try {
        console.log(`Usuario activo: ${user.name} - ${user.role}`);
        
        const userElements = document.querySelectorAll('[data-user-name]');
        userElements.forEach(el => {
            el.textContent = user.name;
        });
        
    } catch (error) {
        console.error('Update user info error:', error);
        reportError(error);
    }
}

function checkNotifications() {
    try {
        console.log('Verificando notificaciones pendientes...');
    } catch (error) {
        console.error('Check notifications error:', error);
        reportError(error);
    }
}

function displayWelcomeMessage() {
    try {
        console.log('¡Bienvenido al Campus Virtual!');
    } catch (error) {
        console.error('Display welcome message error:', error);
    }
}

function addLogoutButton() {
    try {
        const navbar = document.querySelector('.navbar-brand');
        if (navbar && !document.getElementById('logout-btn')) {
            const logoutBtn = document.createElement('button');
            logoutBtn.id = 'logout-btn';
            logoutBtn.className = 'btn btn-outline-light btn-sm ms-3';
            logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt me-1"></i>Salir';
            logoutBtn.onclick = handleLogout;
            navbar.parentElement.appendChild(logoutBtn);
        }
    } catch (error) {
        console.error('Add logout button error:', error);
    }
}

async function handleLogout() {
    try {
        const response = await fetch('/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            window.location.href = '/login';
        } else {
            alert('Error al cerrar sesión');
        }
    } catch (error) {
        console.error('Logout error:', error);
        alert('Error al cerrar sesión');
    }
}

function reportError(error) {
    console.error('Application error:', error);
}