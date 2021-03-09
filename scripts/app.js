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
    document.getElementById('form').innerHTML = "";
}

const MM = () => {
    const method_1 = document.getElementById('ma-1');
    const method_3 = document.getElementById('mb-3');
    if ( method_1.classList.contains("tab-btn-active")) {
        method_1.classList.remove("tab-btn-active")
        document.getElementById('mm-2').classList.add("tab-btn-active");
    } else if (method_3.classList.contains("tab-btn-active")) {
        method_3.classList.remove("tab-btn-active")
        document.getElementById('mm-2').classList.add("tab-btn-active");
    } else {
        document.getElementById('mm-2').classList.add("tab-btn-active");
    }
    document.getElementById('form').innerHTML = "";
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
    document.getElementById('form').innerHTML = "";
}