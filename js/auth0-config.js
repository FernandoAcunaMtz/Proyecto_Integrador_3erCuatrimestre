// ==================== //
// AUTH0 CONFIGURATION
// ==================== //

const AUTH0_CONFIG = {
    domain: 'dev-t817winxdvcgqv2e.us.auth0.com',
    clientId: 'zMmhbQWa6CGsTiW4zDen7clOLcMdEhYN',
    redirectUri: window.location.origin + '/html/callback.html',
    cacheLocation: 'localstorage',
    useRefreshTokens: true,
    scope: 'openid profile email'
};

// Credenciales de prueba
const TEST_CREDENTIALS = {
    'admin@gmail.com': 'Temporal#123',
    'profesor@gmail.com': 'Temporal#123',
    'estudiante@gmail.com': 'Temporal#123'
};

// Auth0 client instance
let auth0 = null;

// ==================== //
// LOCAL AUTHENTICATION (TEMPORARY)
// ==================== //

async function loginWithPasswordLocal(username, password) {
    console.log('Intentando login local con:', username);
    
    // Verificar credenciales locales
    if (TEST_CREDENTIALS[username] && TEST_CREDENTIALS[username] === password) {
        console.log('Credenciales válidas localmente');
        
        // Crear objeto de usuario simulado
        const user = {
            email: username,
            name: username.split('@')[0],
            role: getRoleFromEmail(username)
        };
        
        // Guardar en localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authToken', 'local-token-' + Date.now());
        localStorage.setItem('rememberMe', 'true');
        
        console.log('Usuario autenticado localmente:', user);
        return user;
    } else {
        console.log('Credenciales inválidas');
        throw new Error('Credenciales inválidas');
    }
}

function getRoleFromEmail(email) {
    if (email === 'admin@gmail.com') return 'admin';
    if (email === 'profesor@gmail.com') return 'teacher';
    if (email === 'estudiante@gmail.com') return 'student';
    return 'student';
}

// ==================== //
// AUTH0 INITIALIZATION
// ==================== //

async function initializeAuth0() {
    try {
        // Intentar inicializar Auth0
        if (typeof createAuth0Client !== 'undefined') {
            auth0 = await createAuth0Client(AUTH0_CONFIG);
            console.log('Auth0 inicializado correctamente');
        } else {
            console.log('Auth0 SDK no disponible, usando autenticación local');
        }
        return auth0;
    } catch (error) {
        console.error('Error inicializando Auth0:', error);
        console.log('Usando autenticación local como fallback');
        return null;
    }
}

// ==================== //
// AUTHENTICATION FUNCTIONS
// ==================== //

async function loginWithPassword(username, password) {
    try {
        // Intentar Auth0 primero
        if (auth0) {
            console.log('Intentando login con Auth0...');
            return await auth0.loginWithPassword({
                username: username,
                password: password,
                realm: 'Username-Password-Authentication'
            });
        }
    } catch (auth0Error) {
        console.log('Auth0 falló, intentando login local:', auth0Error);
    }
    
    // Fallback a autenticación local
    return await loginWithPasswordLocal(username, password);
}

async function loginWithSocial(connection) {
    if (auth0) {
        try {
            return await auth0.loginWithRedirect({
                connection: connection,
                redirect_uri: AUTH0_CONFIG.redirectUri
            });
        } catch (error) {
            console.log('Error en login social con Auth0:', error);
        }
    }
    
    // Fallback: mostrar mensaje de que Auth0 no está disponible
    throw new Error('Login social no disponible en modo local');
}

async function signup() {
    if (auth0) {
        try {
            return await auth0.loginWithRedirect({
                screen_hint: 'signup',
                redirect_uri: AUTH0_CONFIG.redirectUri
            });
        } catch (error) {
            console.log('Error en signup con Auth0:', error);
        }
    }
    
    // Fallback: mostrar mensaje de que signup no está disponible
    throw new Error('Registro no disponible en modo local');
}

async function logout() {
    // Clear local storage
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    localStorage.removeItem('rememberMe');
    
    // Logout from Auth0 if available
    if (auth0) {
        try {
            await auth0.logout({
                logoutParams: {
                    returnTo: window.location.origin + '/html/login.html'
                }
            });
        } catch (error) {
            console.log('Error en logout de Auth0, redirigiendo localmente:', error);
            window.location.href = '/html/login.html';
        }
    } else {
        // Redirect to login page
        window.location.href = '/html/login.html';
    }
}

async function isAuthenticated() {
    // Verificar Auth0 primero
    if (auth0) {
        try {
            return await auth0.isAuthenticated();
        } catch (error) {
            console.log('Error verificando Auth0, verificando local:', error);
        }
    }
    
    // Verificar autenticación local
    const user = getStoredUser();
    const token = getStoredToken();
    return !!(user && token);
}

async function getUser() {
    // Verificar Auth0 primero
    if (auth0) {
        try {
            return await auth0.getUser();
        } catch (error) {
            console.log('Error obteniendo usuario de Auth0, usando local:', error);
        }
    }
    
    // Obtener usuario local
    return getStoredUser();
}

async function getToken() {
    // Verificar Auth0 primero
    if (auth0) {
        try {
            return await auth0.getTokenSilently();
        } catch (error) {
            console.log('Error obteniendo token de Auth0, usando local:', error);
        }
    }
    
    // Obtener token local
    return getStoredToken();
}

// ==================== //
// SESSION MANAGEMENT
// ==================== //

function getStoredUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

function getStoredToken() {
    return localStorage.getItem('authToken');
}

function isRememberMeEnabled() {
    return localStorage.getItem('rememberMe') === 'true';
}

// ==================== //
// UTILITY FUNCTIONS
// ==================== //

function redirectToLogin() {
    window.location.href = '/html/login.html';
}

function redirectToDashboard() {
    const user = getStoredUser();
    if (!user) {
        window.location.href = '/index.html';
        return;
    }
    
    // Determinar rol basado en email
    let userRole = 'student';
    if (user.email === 'admin@gmail.com') userRole = 'admin';
    else if (user.email === 'profesor@gmail.com') userRole = 'teacher';
    else if (user.email === 'estudiante@gmail.com') userRole = 'student';
    
    // Redirigir según el rol
    switch (userRole) {
        case 'admin':
            window.location.href = '/html/monitoreo.html';
            break;
        case 'teacher':
            window.location.href = '/html/docente.html';
            break;
        case 'student':
        default:
            window.location.href = '/index.html';
            break;
    }
}

// ==================== //
// AUTH0 SERVICE EXPORT
// ==================== //

window.Auth0Service = {
    initialize: initializeAuth0,
    loginWithPassword,
    loginWithSocial,
    signup,
    logout,
    isAuthenticated,
    getUser,
    getToken,
    getStoredUser,
    getStoredToken,
    isRememberMeEnabled,
    redirectToLogin,
    redirectToDashboard
}; 