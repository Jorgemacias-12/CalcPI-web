let calculateMA = (number) => {
    const r = 1;
    let a;
    let b;
    a = 4 * Math.sqrt(2) * r;
    b = 8 * r;
    let m = 4;
    while (m * 2 <= number) {
        b = 2 * a * b / (a + b);
        a = Math.sqrt(a * b);
        m = m * 2;
    }
    let pi = (a / 2 / r + b / 2 / r) / 2;
    let err = Math.abs(a / 2 / r - b / 2 / r) / 2;
    return pi;
}

const calculateMO = (number) => {
    const r = 1;
    let x;
    let y;
    let cota = 10;
    let c = 0;
    let pi_arr = new Array(cota);
    for (let i = 0; i < cota; i++) {
        for (let j = 0; j < number; j++) {
            x = Math.random();
            y = Math.random();
            x = x * r;
            y = y * r;
            if (x * x + y * y < r * r) {
                c++
            }
        }
        pi_arr[i] = 4 * c / number;
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
    return pi;
}

const calculateMB = (number) => {
    let s = 0;
    for (let i = 0; i < number; i++) {
        s = s + 1 / Math.pow(i + 1, 2);
    }
    let pi = Math.sqrt(6 * s);
    return pi;
}