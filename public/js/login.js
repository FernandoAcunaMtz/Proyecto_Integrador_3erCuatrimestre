document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const errorAlert = document.getElementById('errorAlert');
    const errorMessage = document.getElementById('errorMessage');

    checkExistingSession();

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    async function checkExistingSession() {
        try {
            const response = await fetch('/auth/check');
            const data = await response.json();
            
            if (data.authenticated) {
                window.location.href = '/';
            }
        } catch (error) {
            console.log('No hay sesión activa');
        }
    }

    async function handleLogin(e) {
        e.preventDefault();
        
        setLoading(true);
        hideError();

        const formData = new FormData(loginForm);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = '/';
            } else {
                showError(data.error || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Login error:', error);
            showError('Error de conexión. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    }

    function setLoading(loading) {
        if (loading) {
            loginBtn.disabled = true;
            loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Iniciando...';
        } else {
            loginBtn.disabled = false;
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Iniciar Sesión';
        }
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorAlert.classList.remove('d-none');
    }

    function hideError() {
        errorAlert.classList.add('d-none');
    }
});