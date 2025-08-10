function Login() {
    try {
        return `
            <div class="login-container min-vh-100 d-flex align-items-center" data-name="login-container" data-file="components/Login.js">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="card shadow-lg border-0">
                                <div class="card-body p-4">
                                    <div class="text-center mb-4">
                                        <img src="https://via.placeholder.com/80x80/007bff/ffffff?text=U" 
                                             alt="Logo" class="rounded-circle mb-3">
                                        <h3 class="fw-bold text-primary">Iniciar Sesión</h3>
                                        <p class="text-muted">Accede a tu cuenta estudiantil</p>
                                    </div>

                                    <div class="alert alert-danger d-none" id="errorAlert">
                                        <i class="fas fa-exclamation-triangle me-2"></i>
                                        <span id="errorMessage"></span>
                                    </div>

                                    <form id="loginForm" onsubmit="handleLogin(event)">
                                        <div class="mb-3">
                                            <label class="form-label fw-semibold">
                                                <i class="fas fa-envelope me-2 text-primary"></i>Email
                                            </label>
                                            <input type="email" class="form-control" name="email" 
                                                   placeholder="estudiante@universidad.edu" required>
                                        </div>
                                        
                                        <div class="mb-3">
                                            <label class="form-label fw-semibold">
                                                <i class="fas fa-lock me-2 text-primary"></i>Contraseña
                                            </label>
                                            <input type="password" class="form-control" name="password" 
                                                   placeholder="••••••••" required>
                                        </div>

                                        <button type="submit" class="btn btn-primary w-100 mb-3" id="loginBtn">
                                            <i class="fas fa-sign-in-alt me-2"></i>Iniciar Sesión
                                        </button>
                                    </form>

                                    <div class="text-center">
                                        <p class="text-muted small">
                                            Credenciales de prueba:<br>
                                            <strong>Email:</strong> estudiante@universidad.edu<br>
                                            <strong>Contraseña:</strong> 123456
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Login component error:', error);
        return '<div class="alert alert-danger">Error al cargar el login</div>';
    }
}

async function handleLogin(event) {
    event.preventDefault();
    
    const loginBtn = document.getElementById('loginBtn');
    const errorAlert = document.getElementById('errorAlert');
    const errorMessage = document.getElementById('errorMessage');
    
    try {
        loginBtn.disabled = true;
        loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Iniciando...';
        
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        // Simular llamada al servidor
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (email && password) {
            const userData = {
                email: email,
                name: 'Juan Pérez',
                role: 'Estudiante',
                token: 'demo-token-' + Date.now()
            };
            
            AuthService.login(userData);
            window.location.reload();
        } else {
            throw new Error('Credenciales inválidas');
        }
    } catch (error) {
        errorMessage.textContent = 'Credenciales incorrectas. Intenta nuevamente.';
        errorAlert.classList.remove('d-none');
    } finally {
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Iniciar Sesión';
    }
}