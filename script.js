window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(255, 255, 255, 0.2)' : 'var(--glass-bg)';
});