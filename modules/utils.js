const insertErrorComponent = (error) => {
    const xml = new XMLHttpRequest();
    xml.open('GET', `../templates/error.html`, true);
    xml.onreadystatechange = () => {
        const errorWrapper = document.getElementById('error-container');
        errorWrapper.innerHTML = xml.responseText;
    }
    xml.addEventListener('loadend', () => {
        const closeButton = document.getElementById('error-close');
        const errorText = document.getElementById('description-error');
        errorText.innerHTML = error;
        closeButton.addEventListener('click', () => {
            const error = document.getElementById('error');
            const errorWrapper = document.getElementById('error-container');
            error.style.animation = 'error-close 300ms ease-in-out';
            error.addEventListener('animationend', () => {
                errorWrapper.removeChild(error);
            });
        });
    });
    xml.send();
}


const initMethod = () => {
    const wrapper = document.getElementById('error-container');
    const error = document.getElementById('error');
    const input = document.getElementsByClassName('input')[0];
    const submitButton = document.getElementById('send');
    submitButton.addEventListener('click', () => {
        if (input.value == "") {
            insertErrorComponent("El campo se encuentra vacio");
        }
        if (!input.value.match(/^[0-9]*$/)) {
            insertErrorComponent("El campo solo acepta numeros");
        }
    });
}

const insertContent = (buttonIndex, wrapper) => {
    const xml = new XMLHttpRequest();
    xml.open('GET', `../templates/${buttonIndex}.html`, true);
    xml.onreadystatechange = () => {
        wrapper.innerHTML = xml.responseText;
        wrapper.id = `${buttonIndex}`;
    }
    xml.addEventListener('loadend', () => {
        if (buttonIndex >= 0 && buttonIndex <= 2) {
            initMethod();
        }
    });
    xml.send();
}

const createActiveState = (event) => {
    const button = event.target;
    const navButtons = document.querySelectorAll('.nav-btn');
    for (const navButton of navButtons) {
        navButton.classList.remove('active');
    }
    button.classList.add('active');
}

const themeBehaviour = (theme) => {
    isChecked = !isChecked;
    if (isChecked) {
        theme.classList.add('fa-sun');
        theme.classList.remove('fa-moon');
        theme.style.color = '#fff';
        localStorage.setItem('theme', 'dark');
        localStorage.setItem('isChecked', true);
        setTheme();
    }
    if (!isChecked) {
        theme.classList.add('fa-moon');
        theme.classList.remove('fa-sun');
        theme.style.color = '#000';
        localStorage.setItem('theme', 'light');
        localStorage.setItem('isChecked', false);
        setTheme();
    }
}

const setTheme = () => {
    theme = localStorage.getItem('theme');
    let link = document.getElementById('theme-link');
    link.href = `css/${theme}.css`;
    document.head.appendChild(link);
}

const initNavigationBar = () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const wrapper = document.getElementById("wrapper");
    for (let counter = 0; counter < navButtons.length; counter++) {
        navButtons[counter].addEventListener('click', (event) => {
            createActiveState(event);
            insertContent(counter, wrapper);
        });
    }
}

const initView = () => {
    insertContent(0, document.getElementById('wrapper'));
}

const initApp = () => {
    setTheme();
    initNavigationBar();
    initView();
}