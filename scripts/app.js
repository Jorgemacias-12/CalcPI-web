window.onload = () => {
    document.getElementById('ma-1').classList.add("tab-btn-active");
    document.getElementById('ma-1').addEventListener("click", () => { MA(); });
    document.getElementById('mm-2').addEventListener("click", () => { MM(); });
    document.getElementById('mb-3').addEventListener("click", () => { MB(); });
    document.getElementById('form-btn').addEventListener("click", () => { calculatePi(1) });
    setInputFilter(document.getElementById("ma-n"), function (value) {
        return /^-?\d*$/.test(value);
    });
}

const closeError = (id) => {
    document.getElementById('cls').addEventListener("click", () => {
        document.getElementById(id).innerHTML = "";
    });
}

const MA = () => {
    const method_2 = document.getElementById('mm-2');
    const method_3 = document.getElementById('mb-3');
    if (method_2.classList.contains("tab-btn-active")) {
        method_2.classList.remove("tab-btn-active")
        document.getElementById('ma-1').classList.add("tab-btn-active");
    } else if (method_3.classList.contains("tab-btn-active")) {
        method_3.classList.remove("tab-btn-active")
        document.getElementById('ma-1').classList.add("tab-btn-active");
    } else {
        document.getElementById('ma-1').classList.add("tab-btn-active");
    }
    document.getElementById('form').innerHTML =
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
    document.getElementById('form-btn').addEventListener("click", () => { calculatePi(1) });
    setInputFilter(document.getElementById("ma-n"), function (value) {
        return /^-?\d*$/.test(value);
    });
}

const MM = () => {
    const method_1 = document.getElementById('ma-1');
    const method_3 = document.getElementById('mb-3');
    if (method_1.classList.contains("tab-btn-active")) {
        method_1.classList.remove("tab-btn-active")
        document.getElementById('mm-2').classList.add("tab-btn-active");
    } else if (method_3.classList.contains("tab-btn-active")) {
        method_3.classList.remove("tab-btn-active")
        document.getElementById('mm-2').classList.add("tab-btn-active");
    } else {
        document.getElementById('mm-2').classList.add("tab-btn-active");
    }
    document.getElementById('form').innerHTML =
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
    document.getElementById('form-btn').addEventListener("click", () => { calculatePi(2) });
    setInputFilter(document.getElementById("mm-n"), function (value) {
        return /^-?\d*$/.test(value);
    });
}

const MB = () => {
    const method_1 = document.getElementById('ma-1');
    const method_2 = document.getElementById('mm-2');
    if (method_1.classList.contains("tab-btn-active")) {
        method_1.classList.remove("tab-btn-active")
        document.getElementById('mb-3').classList.add("tab-btn-active");
    } else if (method_2.classList.contains("tab-btn-active")) {
        method_2.classList.remove("tab-btn-active")
        document.getElementById('mb-3').classList.add("tab-btn-active");
    } else {
        document.getElementById('mb-3').classList.add("tab-btn-active");
    }
    document.getElementById('form').innerHTML =
        `
    <div class="form-method">
        <label for="mb-n" class="form-label">
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
    document.getElementById('form-btn').addEventListener("click", () => { calculatePi(3) });
    setInputFilter(document.getElementById("mb-n"), function (value) {
        return /^-?\d*$/.test(value);
    });
}

const calculatePi = (method_number) => {
    switch (method_number) {
        case 1:
            if (document.getElementById('ma-n').value == "") {
                document.getElementById('er').innerHTML = 
                `
                <div class="error">
                    <div class="error-closeable">
                        <i class="fas fa-times closeable" id="cls"></i>
                    </div>
                    <div class="error-text">
                        <p class="text">
                            Error: el campo está vacio.
                        </p>
                    </div>
                </div>
                `;
            }
            closeError("er");
            break;
        case 2:
            if (document.getElementById('').value == "") {
                document.getElementById('er').innerHTML =
                    `
                <div class="error">
                    <div class="error-closeable">
                        <i class="fas fa-times closeable" id="cls"></i>
                    </div>
                    <div class="error-text">
                        <p class="text">
                            Error: el campo está vacio.
                        </p>
                    </div>
                </div>
                `;
            }
            closeError("er");
            break;
        case 3:
            if (document.getElementById('').value == "") {
                document.getElementById('er').innerHTML =
                    `
                <div class="error">
                    <div class="error-closeable">
                        <i class="fas fa-times closeable" id="cls"></i>
                    </div>
                    <div class="error-text">
                        <p class="text">
                            Error: el campo está vacio.
                        </p>
                    </div>
                </div>
                `;
            }
            closeError("er");
            break;
    }
}

const calculateMA = (n) => {
    const r = 1;
    let a;
    let b;
    a = 4 * Math.sqrt(2) * r;
    b = 8 * r;
    let m = 4;
    while (m * 2 <= n) {
        b = 2 * a * b / (a + b);
        a = Math.sqrt(a * b);
        m = m * 2;
    }
    let pi = (a / 2 / r + b / 2 / r) / 2;
    let err = Math.abs(a / 2 / r - b / 2 / r) / 2;
}

const calculateMM = (n) => {
    const r = 1;
    let x;
    let y;
    let cota = 10;
    let c = 0;
    let pi_arr = new Array(cota);
    for (let i = 0; i < cota; i++) {
        for (let j = 0; j < n; j++) {
            x = Math.random();
            y = Math.random();
            x = x * r;
            y = y * r;
            if (x * x + y * y < r * r) {
                c++
            }
        }
        pi_arr[i] = 4 * c / n;
        c = 0;
    }
    let pi = 0;
    let err = 0;
    for (let i = 0; i < cota; i++) {
        pi = pi_arr[i] / cota + pi;
    }
    for (let i = 0; i < cota; i++) {
        err = err + Math.pow(pi - pi_arr[i], 2) / cota;
    }
    err = Math.sqrt(err);
}

const calculateMB = (n) => {
    let s = 0;
    for (let i = 0; i < n; i++) {
        s = s + 1 / Math.pow(i + 1, 2);
    }
    let pi = Math.sqrt(6 * s);
    console.log(pi);
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}
