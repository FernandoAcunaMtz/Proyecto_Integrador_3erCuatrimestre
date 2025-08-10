// ==================== //
// LOGOUT FUNCTIONALITY
// ==================== //

// Function to handle logout
async function handleLogout() {
    try {
        // Show loading state
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            const originalText = logoutBtn.innerHTML;
            logoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cerrando sesión...';
            logoutBtn.disabled = true;
        }

        // Use Auth0 service to logout
        await Auth0Service.logout();
        
    } catch (error) {
        console.error('Error en logout:', error);
        
        // Fallback: clear local storage and redirect
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        localStorage.removeItem('rememberMe');
        
        window.location.href = '/html/login.html';
    }
}

// Function to check authentication status
async function checkAuthStatus() {
    try {
        const isAuthenticated = await Auth0Service.isAuthenticated();
        
        if (!isAuthenticated) {
            // Redirect to login if not authenticated
            Auth0Service.redirectToLogin();
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('Error checking auth status:', error);
        Auth0Service.redirectToLogin();
        return false;
    }
}

// Function to display user info
function displayUserInfo() {
    const user = Auth0Service.getStoredUser();
    
    if (user) {
        // Update user display elements
        const userDisplay = document.querySelector('.user-display');
        if (userDisplay) {
            userDisplay.innerHTML = `
                <img src="${user.picture || '/img/default-avatar.png'}" alt="Avatar" class="user-avatar">
                <span class="user-name">${user.name || user.email}</span>
            `;
        }
        
        // Update user dropdown
        const userDropdown = document.querySelector('.user-dropdown');
        if (userDropdown) {
            userDropdown.innerHTML = `
                <div class="dropdown-item">
                    <i class="fas fa-user"></i>
                    <span>${user.name || user.email}</span>
                </div>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item logout-btn" onclick="handleLogout()">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Cerrar sesión</span>
                </button>
            `;
        }
    }
}

// Initialize authentication check when page loads
document.addEventListener('DOMContentLoaded', async function() {
    // Initialize Auth0
    try {
        await Auth0Service.initialize();
        
        // Check authentication status
        const isAuthenticated = await checkAuthStatus();
        
        if (isAuthenticated) {
            // Display user info
            displayUserInfo();
        }
        
    } catch (error) {
        console.error('Error initializing auth:', error);
        Auth0Service.redirectToLogin();
    }
});

// Export functions for use in other scripts
window.AuthUtils = {
    handleLogout,
    checkAuthStatus,
    displayUserInfo
}; 