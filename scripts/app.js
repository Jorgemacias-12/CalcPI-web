let tab_methodAr = document.getElementById('ma-1');
let tab_methodMo = document.getElementById('mm-3');
let tab_methodBa = document.getElementById('mb-2');

const destroyElement = () => {
    document.getElementById('er').innerHTML = "";
}

const cleanInput = (inputToClear) => {
    inputToClear.value = '';
} 

const createResult = (method, query) => {
    let resultHTML = '';
    switch (method) {
        case 0:
            resultHTML = 
            `
                <div class='result-container'>
                    <i class="fas fa-times closeable" onclick='destroyElement();'></i>
                    <p class='resultText'>
                           Con un polígono de ${query._sides} lados, pi = ${query._pi}
                           +/- ${query._err}. O dicho de otra manera, el valor de pi 
                           se encuentra entre ${parseFloat(query._pi) + parseFloat(query._err)} y ${parseFloat(query._pi) - parseFloat(query._err)}.
                    </p>
                </div>
            `;
            return resultHTML;
        case 1:
            resultHTML =
                `
                <div class='result-container'>
                    <i class="fas fa-times closeable" onclick='destroyElement();'></i>
                    <p class='resultText' style="text-align: center;">
                            Pi = ${query._pi}
                    </p>
                </div>
            `;
            return resultHTML;
        case 2: 
            resultHTML =
                `
                <div class='result-container'>
                    <i class="fas fa-times closeable" onclick='destroyElement();'></i>
                    <p class='resultText'>
                            Pi = ${query._pi} +/- ${query._err} o dicho de otra manera, el valor de pi se encuentra entre ${parseFloat(query._pi + query._err)} y ${parseFloat(query._pi - query._err)}
                    </p>
                </div>
            `;
            return resultHTML;
    }
}

const createErrorElement = () => {
    document.getElementById('er').innerHTML =
        `
                <div class="error">
                    <div class="error-closeable">
                        <i class="fas fa-times closeable" onclick='destroyElement();' aria-hidden="true"></i>
                    </div>
                    <div class="error-text">
                        <p class="text">
                            Error: el campo está vacio.
                        </p>
                    </div>
                </div>
    `;
}

const validateAndShowResult = (inputToValidate) => {
    switch (inputToValidate.id) {
        case "ma-n":
            if (inputToValidate.value == "") { createErrorElement(); }
            if (inputToValidate.value != "") {
                let resultQuerry = calculateMA(inputToValidate.value);
                document.getElementById('er').innerHTML = createResult(0,resultQuerry);
                cleanInput(inputToValidate);
            }
            break;
        case "mb-n":
            if (inputToValidate.value == "") { createErrorElement(); }
            if (inputToValidate.value != "") {
                let resultQuerry = calculateMB(inputToValidate.value);
                document.getElementById('er').innerHTML = createResult(1, resultQuerry);
                cleanInput(inputToValidate);
            }
            break;
        case "mm-n":
            if (inputToValidate.value == "") { createErrorElement(); }
            if (inputToValidate.value != "") {
                let resultQuerry = calculateMM(inputToValidate.value);
                document.getElementById('er').innerHTML = createResult(2, resultQuerry);
                cleanInput(inputToValidate);
            }
            break;
    }
}

const calculateResult = (method_number) => {
    let formButton = document.getElementById('form-btn');
    switch (method_number) {
        case 0:
            formButton.addEventListener("click", () => {
                validateAndShowResult(
                    document.getElementById('ma-n')
                );
            });
            break;
        case 1:
            formButton.addEventListener("click", () => {
                validateAndShowResult(
                    document.getElementById('mm-n')
                );
            });
            break;
        case 2:
            formButton.addEventListener("click", () => {
                validateAndShowResult(
                    document.getElementById('mb-n')
                );
            });
            break;
    }
}

const loadTabsContent = (contentNumber) => {
    let contentToInner = '';
    let formElement = document.getElementById('form');;
    switch (contentNumber) {
        case 0:
            contentToInner =
                `
                <div class="form-method">
                    <label for="ma-n" class="form-label">
                        Número de lados máximo del polígono:
                    </label>
                    <div class="method-input">
                        <input type="text" class="input" id="ma-n">
                    </div>
                    <div class="method-button">
                        <button class="button" id="form-btn">
                            Calcular valor de Pi
                        </button>
                    </div>
                    <div id="er">

                    </div>
                </div>
            `;
            formElement.innerHTML = contentToInner;
            break;
        case 1:
            contentToInner =
                `
                <div class="form-method">
                    <label for="mb-n" class="form-label">
                        Números de dardos a lazar:
                    </label>
                    <div class="method-input">
                        <input type="text" class="input" id="mm-n">
                    </div>
                    <div class="method-button">
                        <button class="button" id="form-btn">
                            Calcular valor de Pi
                        </button>
                    </div>
                    <div id="er">

                    </div>
                </div>
            `;
            formElement.innerHTML = contentToInner;
            break;
        case 2:
            contentToInner =
                `
                <div class="form-method">
                    <label for="mm-n" class="form-label">
                        Números de terminos que quieres sumar:
                    </label>
                    <div class="method-input">
                        <input type="text" class="input" id="mb-n">
                    </div>
                    <div class="method-button">
                        <button class="button" id="form-btn">
                            Calcular valor de Pi
                        </button>
                    </div>
                    <div id="er">

                    </div>
                </div> 
                `;
            formElement.innerHTML = contentToInner;
            break;
    }
}

function manageTabsVisuals() {
    tab_methodAr.classList.toggle("tab-btn-active");
    setValidator("ma-n");
    calculateResult(0);
    tab_methodAr.addEventListener("click", () => {
        if (tab_methodBa.classList.contains("tab-btn-active")) {
            tab_methodBa.classList.remove("tab-btn-active");
            tab_methodAr.classList.add("tab-btn-active");
        }
        if (tab_methodMo.classList.contains("tab-btn-active")) {
            tab_methodMo.classList.remove("tab-btn-active");
            tab_methodAr.classList.add("tab-btn-active");
        }
        loadTabsContent(0);
        calculateResult(0);
        setValidator("ma-n");
    });
    tab_methodMo.addEventListener("click", () => {
        if (tab_methodAr.classList.contains("tab-btn-active")) {
            tab_methodAr.classList.remove("tab-btn-active");
            tab_methodMo.classList.add("tab-btn-active");
        }
        if (tab_methodBa.classList.contains("tab-btn-active")) {
            tab_methodBa.classList.remove("tab-btn-active");
            tab_methodMo.classList.add("tab-btn-active");
        }
        loadTabsContent(1);
        calculateResult(1);
        setValidator("mb-n")
    });
    tab_methodBa.addEventListener("click", () => {
        if (tab_methodAr.classList.contains("tab-btn-active")) {
            tab_methodAr.classList.remove("tab-btn-active");
            tab_methodBa.classList.add("tab-btn-active");
        }
        if (tab_methodMo.classList.contains("tab-btn-active")) {
            tab_methodMo.classList.remove("tab-btn-active");
            tab_methodBa.classList.add("tab-btn-active");
        }
        loadTabsContent(2);
        calculateResult(2);
        setValidator("mm-n");
    });
}

function app() {
    manageTabsVisuals();
}

window.onload = () => {
    app();
}