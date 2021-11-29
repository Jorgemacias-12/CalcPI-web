let theme;
let isChecked = false;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    let theme = document.getElementById('theme');
    let isChecked = false;
    if (localStorage.getItem('theme') === 'dark') {
        theme.classList.add('fa-sun');
        theme.classList.remove('fa-moon');
        theme.style.color = '#fff';
    }
    theme.addEventListener('click', () => {
        themeBehaviour(theme);
    });
});