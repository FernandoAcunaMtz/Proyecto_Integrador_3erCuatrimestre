function initializeAnimations() {
    try {
        observeElements();
        initializeFloatingAnimations();
    } catch (error) {
        console.error('Initialize animations error:', error);
    }
}

function observeElements() {
    try {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        });

        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });
    } catch (error) {
        console.error('Observe elements error:', error);
    }
}

function initializeFloatingAnimations() {
    try {
        const floatingElements = document.querySelectorAll('.floating-animation');
        floatingElements.forEach(element => {
            element.style.animationDelay = Math.random() * 2 + 's';
        });
    } catch (error) {
        console.error('Initialize floating animations error:', error);
    }
}

document.addEventListener('DOMContentLoaded', initializeAnimations);