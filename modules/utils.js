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
        const container = document.getElementsByClassName('inserted-component');
        if (container == null || container == undefined) throw new Error("Non existent container :C");
        else {
            if (buttonIndex == 3) container[0].id = 'lg-container';
            else container[0].id = 'md-container';
            let currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'light') {
                container[0].classList.remove('dark');
                container[0].classList.add('light')
            }
            if (currentTheme === 'dark') {
                container[0].classList.remove('light')
                container[0].classList.add('dark');
            }
        }
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
        theme.classList.add('dark');
        theme.classList.add('fa-sun');
        theme.classList.remove('fa-moon');
        theme.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        localStorage.setItem('isChecked', true);
        setTheme();
    }
    if (!isChecked) {
        theme.classList.add('fa-moon');
        theme.classList.add('light');
        theme.classList.remove('fa-sun');
        theme.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        localStorage.setItem('isChecked', false);
        setTheme();
    }
}

const setTheme = () => {
    let navbar = document.getElementById('nav-bar');
    let wrapper = document.querySelectorAll('.content')[0];
    let selectedTheme = localStorage.getItem('theme');
    let navButtons = document.querySelectorAll('.nav-btn');
    let inserted_content = document.querySelectorAll('.inserted-component')
    let inputs = document.querySelectorAll('.input');
    for (let button of navButtons) {
        if (selectedTheme === 'dark') {
            button.classList.remove('light');
            button.classList.add('dark');
        }
        if (selectedTheme === 'light') {
            button.classList.remove('dark');
            button.classList.add('light');
        }
    }
    if (inserted_content == null || inserted_content == undefined) {
        throw new Error('Content not available :C');
    }
    for (let component of inserted_content) {
        if (selectedTheme === 'dark') {
            component.classList.remove('light');
            component.classList.add('dark');
        }
        if (selectedTheme === 'light') {
            component.classList.remove('dark');
            component.classList.add('light');
        }
    }
    if (selectedTheme === 'light') {
        navbar.classList.remove('dark');
        navbar.classList.add('light');
        wrapper.classList.remove('dark');
        wrapper.classList.add('light');
    }
    if (selectedTheme === 'dark') {
        navbar.classList.remove('light');
        navbar.classList.add('dark');
        wrapper.classList.remove('light');
        wrapper.classList.add('dark');
    }
    for (let input of inputs) {
        if (selectedTheme === 'light') {
            input.classList.remove('dark');
            input.classList.add('light');
        }
        if (selectedTheme === 'dark') {
            input.classList.remove('light');
            input.classList.add('dark');
        }
    }
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
    insertContent(0, wrapper);
}

const initApp = () => {
    initNavigationBar();
    initView();
    setTheme();
}