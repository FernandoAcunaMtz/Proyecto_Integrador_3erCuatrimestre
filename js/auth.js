const AuthService = {
    isAuthenticated() {
        try {
            const token = localStorage.getItem('userToken');
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            return token && isLoggedIn === 'true';
        } catch (error) {
            console.error('Error checking authentication:', error);
            return false;
        }
    },

    login(userData) {
        try {
            localStorage.setItem('userToken', userData.token);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(userData));
            console.log('Usuario autenticado:', userData.name);
        } catch (error) {
            console.error('Error during login:', error);
            throw new Error('Error al guardar datos de sesión');
        }
    },

    logout() {
        try {
            localStorage.removeItem('userToken');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            console.log('Sesión cerrada');
            window.location.href = '/login';
        } catch (error) {
            console.error('Error during logout:', error);
        }
    },

    getUserData() {
        try {
            const userData = localStorage.getItem('userData');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error getting user data:', error);
            return null;
        }
    }
};

window.AuthService = AuthService;