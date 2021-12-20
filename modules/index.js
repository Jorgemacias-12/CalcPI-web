let theme;
let isChecked = false;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    let theme = document.getElementById('theme');
    if (localStorage.getItem('theme') === 'dark') {
        theme.classList.add('fa-sun');
        theme.classList.add('dark')
        theme.classList.remove('light')
        theme.classList.remove('fa-moon');
    }
    theme.addEventListener('click', () => {
        themeBehaviour(theme);
    });
});