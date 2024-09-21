function calcularVelocidad() {
    const d = document.getElementById('Distancia1').value;
    const t = document.getElementById('Tiempo1').value;
    if (d && t) {
        const v = d / t;
        document.getElementById('VelocidadResultante').innerText = v.toFixed(1) + ' m/s';
    } else {
        document.getElementById('VelocidadResultante').innerText = 'Ingrese ambos valores.';
    }
}

function calcularDistancia() {
    const v = document.getElementById('Velocidad2').value;
    const t = document.getElementById('Tiempo2').value;
    if (v && t) {
        const d = v * t;
        document.getElementById('DistanciaResultante').innerText = d.toFixed(1) + ' metros';
    } else {
        document.getElementById('DistanciaResultante').innerText = 'Ingrese ambos valores.';
    }
}

function calcularTiempo() {
    const d = document.getElementById('Distancia3').value;
    const v = document.getElementById('Velocidad3').value;
    if (d && v) {
        const t = d / v;
        document.getElementById('TiempoResultante').innerText =  t.toFixed(1) + ' segundos';
    } else {
        document.getElementById('TiempoResultante').innerText = 'Ingrese ambos valores.';
    }
}