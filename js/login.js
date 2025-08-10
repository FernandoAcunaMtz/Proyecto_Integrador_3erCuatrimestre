// ==================== //
// GLASSMORPHISM LOGIN JS WITH AUTH0
// ==================== //

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const buttonText = document.querySelector('.button-text');
    const buttonLoader = document.getElementById('buttonLoader');
    const errorAlert = document.getElementById('errorAlert');
    const errorMessage = document.getElementById('errorMessage');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const glassCard = document.querySelector('.glass-card');
    const inputs = document.querySelectorAll('.glass-input');
    const googleLoginBtn = document.getElementById('googleLogin');
    const githubLoginBtn = document.getElementById('githubLogin');
    const signupLink = document.getElementById('signupLink');

    // Initialize
    initAuth0();
    initAnimations();
    initEventListeners();

    // ==================== //
    // AUTH0 INITIALIZATION
    // ==================== //

    async function initAuth0() {
        try {
            await Auth0Service.initialize();

            // Check if user is already authenticated
            const isAuthenticated = await Auth0Service.isAuthenticated();
            if (isAuthenticated) {
                const user = await Auth0Service.getUser();
                console.log('Usuario autenticado:', user);
                Auth0Service.redirectToDashboard();
            }

        } catch (error) {
            console.error('Error inicializando Auth0:', error);
            showError('Error al inicializar la autenticación');
        }
    }

    // ==================== //
    // INITIALIZATION
    // ==================== //

    function initAnimations() {
        // Add entrance animations
        setTimeout(() => {
            glassCard.style.opacity = '1';
            glassCard.style.transform = 'translateY(0) scale(1)';
        }, 100);

        // Add floating effect to particles
        animateParticles();
        
        // Add wave animations
        animateWaves();
    }

    function initEventListeners() {
        // Form submission
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }

        // Password toggle
        if (passwordToggle) {
            passwordToggle.addEventListener('click', togglePasswordVisibility);
        }

        // Input focus effects
        inputs.forEach(input => {
            input.addEventListener('focus', handleInputFocus);
            input.addEventListener('blur', handleInputBlur);
            input.addEventListener('input', handleInputChange);
        });

        // Social login buttons
        if (googleLoginBtn) {
            googleLoginBtn.addEventListener('click', () => handleSocialLogin('google-oauth2'));
        }
        
        if (githubLoginBtn) {
            githubLoginBtn.addEventListener('click', () => handleSocialLogin('github'));
        }

        // Remember me checkbox
        if (rememberMeCheckbox) {
            rememberMeCheckbox.addEventListener('change', handleRememberMe);
        }

        // Signup link
        if (signupLink) {
            signupLink.addEventListener('click', handleSignup);
        }
    }

    // ==================== //
    // ANIMATIONS
    // ==================== //

    function animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            particle.style.animationDelay = `${index * -2}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        });
    }

    function animateWaves() {
        const waves = document.querySelectorAll('.wave');
        waves.forEach((wave, index) => {
            wave.style.animationDelay = `${index * -5}s`;
        });
    }

    function handleInputFocus(e) {
        const input = e.target;
        const container = input.closest('.input-container');
        
        // Add focus animation
        container.style.transform = 'scale(1.02)';
        input.style.transform = 'translateY(-2px)';
        
        // Add glow effect
        container.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
    }

    function handleInputBlur(e) {
        const input = e.target;
        const container = input.closest('.input-container');
        
        // Remove focus animation
        container.style.transform = 'scale(1)';
        input.style.transform = 'translateY(0)';
        
        // Remove glow effect
        container.style.boxShadow = 'none';
    }

    function handleInputChange(e) {
        const input = e.target;
        const container = input.closest('.input-container');
        
        if (input.value.length > 0) {
            container.classList.add('has-content');
        } else {
            container.classList.remove('has-content');
        }
    }

    // ==================== //
    // PASSWORD TOGGLE
    // ==================== //

    function togglePasswordVisibility() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        
        const icon = passwordToggle.querySelector('i');
        icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
        
        // Add animation
        passwordToggle.style.transform = 'scale(1.2)';
        setTimeout(() => {
            passwordToggle.style.transform = 'scale(1)';
        }, 200);
    }

    // ==================== //
    // LOGIN HANDLING
    // ==================== //

    async function handleLogin(e) {
        e.preventDefault();
        
        setLoading(true);
        hideError();

        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');
        const rememberMe = formData.get('rememberMe') === 'on';

        // Validate inputs
        if (!validateInputs(username, password)) {
            setLoading(false);
            return;
        }

        try {
            // Use Auth0 service
            await Auth0Service.loginWithPassword(username, password);

            // If successful, get user info
            const user = await Auth0Service.getUser();
            console.log('Login exitoso:', user);
            
            // Store user info
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('authToken', await Auth0Service.getToken());
            
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            }
            
            showSuccess();
            setTimeout(() => {
                Auth0Service.redirectToDashboard();
            }, 1500);
            
        } catch (error) {
            console.error('Login error:', error);
            showError('Credenciales inválidas. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    }

    function validateInputs(username, password) {
        if (!username || username.trim().length < 3) {
            showError('El nombre de usuario debe tener al menos 3 caracteres.');
            shakeElement(usernameInput);
            return false;
        }
        
        if (!password || password.length < 6) {
            showError('La contraseña debe tener al menos 6 caracteres.');
            shakeElement(passwordInput);
            return false;
        }
        
        return true;
    }

    // ==================== //
    // SOCIAL LOGIN
    // ==================== //

    async function handleSocialLogin(connection) {
        try {
            // Add button animation
            const btn = event.currentTarget;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
            
            // Show loading state
            const originalText = btn.innerHTML;
            btn.innerHTML = '<div class="spinner"></div>';
            btn.disabled = true;
            
            // Use Auth0 service
            await Auth0Service.loginWithSocial(connection);
            
        } catch (error) {
            console.error('Social login error:', error);
            showError('Error en el login social');
            
            // Restore button
            const btn = event.currentTarget;
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }

    // ==================== //
    // SIGNUP
    // ==================== //

    async function handleSignup(e) {
        e.preventDefault();

        try {
            // Use Auth0 service
            await Auth0Service.signup();
        } catch (error) {
            console.error('Signup error:', error);
            showError('Error en el registro');
        }
    }

    // ==================== //
    // REMEMBER ME
    // ==================== //

    function handleRememberMe(e) {
        const isChecked = e.target.checked;
        
        // Add animation
        const checkmark = e.target.nextElementSibling;
        if (isChecked) {
            checkmark.style.transform = 'scale(1.2)';
            setTimeout(() => {
                checkmark.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Store preference
        localStorage.setItem('rememberMe', isChecked);
    }

    // ==================== //
    // UTILITY FUNCTIONS
    // ==================== //

    // Utility function removed - using Auth0Service instead

    function setLoading(loading) {
        if (loading) {
            loginBtn.classList.add('loading');
            loginBtn.disabled = true;
            buttonText.style.opacity = '0';
            buttonLoader.style.opacity = '1';
        } else {
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
            buttonText.style.opacity = '1';
            buttonLoader.style.opacity = '0';
        }
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorAlert.classList.add('show');
        
        // Add shake animation
        shakeElement(glassCard);
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            hideError();
        }, 5000);
    }

    function showSuccess() {
        // Create success notification
        const successNotification = document.createElement('div');
        successNotification.className = 'success-notification';
        successNotification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>¡Login exitoso! Redirigiendo...</span>
        `;
        
        document.body.appendChild(successNotification);
        
        // Add entrance animation
        setTimeout(() => {
            successNotification.classList.add('show');
        }, 100);
        
        // Remove after animation
        setTimeout(() => {
            successNotification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(successNotification);
            }, 300);
        }, 2000);
    }

    function hideError() {
        errorAlert.classList.remove('show');
    }

    function shakeElement(element) {
        element.style.animation = 'errorShake 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
});

// ==================== //
// ADDITIONAL CSS FOR SUCCESS NOTIFICATION
// ==================== //

const style = document.createElement('style');
style.textContent = `
    .success-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(30, 58, 138, 0.4);
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 1000;
    }
    
    .success-notification.show {
        transform: translateX(0);
    }
    
    .success-notification i {
        font-size: 20px;
    }
    
    .input-container.has-content .input-icon {
        color: #3b82f6;
    }
`;
document.head.appendChild(style);