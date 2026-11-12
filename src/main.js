
document.querySelectorAll('[data-role="year"]').forEach((el) => {
    el.textContent = new Date().getFullYear();
});


const actual = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a').forEach((a) => {
    if (a.getAttribute('href') === actual) {
        a.setAttribute('aria-current', 'page');
    }
});
