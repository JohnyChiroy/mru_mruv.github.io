// function calcularVelocidadFinal() {
//     const vi = parseFloat(document.getElementById('vi1').value);
//     const a = parseFloat(document.getElementById('a1').value);
//     const t = parseFloat(document.getElementById('t1').value);
//     const vf = vi + a * t;
//     document.getElementById('vf-resultado').innerText = `${vf.toFixed(2)} m/s`;
// }

function calcularVelocidadFinal() {
    const vi = parseFloat(document.getElementById('vi1').value);
    const a = parseFloat(document.getElementById('a1').value);
    const t = parseFloat(document.getElementById('t1').value);
    if (vi && a && t) {
        const vf = vi + a * t;
        document.getElementById('vf-resultado').innerText = `${vf.toFixed(2)} m/s`;
    } else {
        document.getElementById('vf-resultado').innerText = 'Ingrese todos los valores.';
    }
}

// function calcularPosicion() {
//     const xi = parseFloat(document.getElementById('xi2').value);
//     const vi = parseFloat(document.getElementById('vi2').value);
//     const a = parseFloat(document.getElementById('a2').value);
//     const t = parseFloat(document.getElementById('t2').value);
//     const x = xi + vi * t + 0.5 * a * t * t;
//     document.getElementById('x-resultado').innerText = `${x.toFixed(2)} m`;
// }

function calcularPosicion() {
    const xi = parseFloat(document.getElementById('xi2').value);
    const vi = parseFloat(document.getElementById('vi2').value);
    const a = parseFloat(document.getElementById('a2').value);
    const t = parseFloat(document.getElementById('t2').value);
    if (xi && vi && a && t) {
        const x = xi + vi * t + 0.5 * a * t * t;
        document.getElementById('x-resultado').innerText = `${x.toFixed(2)} m`;
    } else {
        document.getElementById('x-resultado').innerText = 'Ingrese todos los valores.';
    }
}

// function calcularVelocidadFinalCuadrado() {
//     const vi = parseFloat(document.getElementById('vi3').value);
//     const a = parseFloat(document.getElementById('a3').value);
//     const xi = parseFloat(document.getElementById('xi3').value);
//     const x = parseFloat(document.getElementById('x3').value);
//     const vf2 = vi * vi + 2 * a * (x - xi);
//     document.getElementById('vf2-resultado').innerText = `${vf2.toFixed(2)} m²/s²`;
// }

function calcularVelocidadFinalCuadrado() {
    const vi = parseFloat(document.getElementById('vi3').value);
    const a = parseFloat(document.getElementById('a3').value);
    const xi = parseFloat(document.getElementById('xi3').value);
    const x = parseFloat(document.getElementById('x3').value);
    if (vi && a && xi && x) {
        const vf2 = vi * vi + 2 * a * (x - xi);
        document.getElementById('vf2-resultado').innerText = `${vf2.toFixed(2)} m²/s²`;
    } else {
        document.getElementById('vf2-resultado').innerText = 'Ingrese todos los valores.';
    }
}