const insertResultComponent = (input) => {
    const xml = new XMLHttpRequest();
    xml.open('GET', `../templates/result.html`, true);
    xml.onreadystatechange = () => {
        const wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = xml.responseText;
    }
    xml.addEventListener('loadend', () => {
        const closeButton = document.getElementById('result-close');
        const resultText = document.getElementById('result-text');
        switch (input.id) {
            case 'methodInputBA':
                resultText.innerHTML = `Pi = ${calculateMA(input.value)}`;
                break;
            case 'methodInputMO':
                resultText.innerHTML = `Pi = ${calculateMO(input.value)}`;
                break;
            case 'methodInputMB':
                resultText.innerHTML = `Pi = ${calculateMB(input.value)}`;
                break;
        }
        closeButton.addEventListener('click', () => {
            const result = document.getElementById('result');
            const wrapper = document.getElementById('wrapper');
            result.style.animation = 'result-close 300ms ease-in-out';
            result.addEventListener('animationend', () => {
                input.value = '';
                wrapper.removeChild(result);
            });
        });
    });
    xml.send();
}


const insertErrorComponent = (error, inputElement) => {
    const xml = new XMLHttpRequest();
    xml.open('GET', `../templates/error.html`, true);
    xml.onreadystatechange = () => {
        const errorWrapper = document.getElementById('wrapper');
        errorWrapper.innerHTML = xml.responseText;
    }
    xml.addEventListener('loadend', () => {
        const closeButton = document.getElementById('error-close');
        const errorText = document.getElementById('description-error');
        errorText.innerHTML = error;
        closeButton.addEventListener('click', () => {
            const error = document.getElementById('error');
            const errorWrapper = document.getElementById('wrapper');
            error.style.animation = 'error-close 300ms ease-in-out';
            error.addEventListener('animationend', () => {
                inputElement.value = '';
                errorWrapper.removeChild(error);
            });
        });
    });
    xml.send();
}


const initMethod = () => {
    const input = document.getElementsByClassName('input')[0];
    const submitButton = document.getElementById('send');
    submitButton.addEventListener('click', () => {
        if (input.value == "") {
            insertErrorComponent("El campo se encuentra vacio", input);
        }
        if (!input.value.match(/^[0-9]*$/)) {
            insertErrorComponent("El campo solo acepta numeros", input);
        }
        if (input.value != "" && input.value.match(/^[0-9]*$/)) {
            insertResultComponent(input);
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
    const wrapper = document.getElementById('wrapper');
    wrapper.id = "0";
    insertContent(0, wrapper);
}

const initApp = () => {
    setTheme();
    initNavigationBar();
    initView();
}