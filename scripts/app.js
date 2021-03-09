window.onload = () => {
    document.getElementById('ma-1').addEventListener("click", () => { MA(); });
    document.getElementById('mm-2').addEventListener("click", () => { MM(); });
    document.getElementById('mb-3').addEventListener("click", () => { MB(); });
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
        <label for="mm-n" class="form-label">
            Números de terminos que quieres sumar:
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
}

const calculatePi = (method_number) => {
    switch (method_number) {
        case 1:
            break;
        case 2:
            break;
        case 3:
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
    console.log(pi);
}

const calculateMM = () => {

}

const calculateMB = () => {

}