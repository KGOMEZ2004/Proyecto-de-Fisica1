//Codigo del ejercicio planteado
document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const velocity = parseFloat(document.getElementById('velocity').value);
    const timeMinutes = parseFloat(document.getElementById('time').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(velocity) || isNaN(timeMinutes)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const timeSeconds = timeMinutes * 60;
    const distance = velocity * timeSeconds;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Velocidad: ${velocity} m/s</p>`;
    resultText += `<p>Tiempo: ${timeMinutes} minutos (${timeSeconds} segundos)</p>`;
    resultText += `<p>Distancia recorrida: ${distance.toFixed(2)} metros</p>`;

    resultDiv.innerHTML = resultText;
});
//Codigo de Tabla de conversiones 
function performConversion() {
    const conversionType = document.getElementById('conversionType').value;
    const conversionValue = parseFloat(document.getElementById('conversionValue').value);
    const resultDiv = document.getElementById('conversionResult');

    if (isNaN(conversionValue)) {
        resultDiv.textContent = 'Por favor, ingrese un valor numérico válido.';
        return;
    }

    let resultText = '';

    switch (conversionType) {
        case 'kmToM':
            resultText = `${conversionValue} kilómetros son ${conversionValue * 1000} metros.`;
            break;
        case 'mToKm':
            resultText = `${conversionValue} metros son ${conversionValue / 1000} kilómetros.`;
            break;
        case 'secondsToMinutes':
            resultText = `${conversionValue} segundos son ${conversionValue / 60} minutos.`;
            break;
        case 'minutesToSeconds':
            resultText = `${conversionValue} minutos son ${conversionValue * 60} segundos.`;
            break;
        default:
            resultText = 'Tipo de conversión no válido.';
    }

    resultDiv.textContent = resultText;
}
//para la animacion
let walker = document.getElementById('walker');
let distance = 3600; // Distancia total en metros
let speed = 1.5; // Velocidad en m/s
let time = 40 * 60; // Tiempo en segundos
let stepTime = 100; // Intervalo de tiempo entre pasos en milisegundos
let steps = Math.floor(time * 1000 / stepTime); // Número de pasos
let stepDistance = distance / steps; // Distancia por paso

let position = 0;
let interval;

document.getElementById('start-button').addEventListener('click', function() {
    interval = setInterval(function() {
        position += stepDistance;
        walker.style.left = position + 'px';

        if (position >= distance) {
            clearInterval(interval);
        }
    }, stepTime);
});

document.getElementById('pause-button').addEventListener('click', function() {
    clearInterval(interval);
});

document.getElementById('reset-button').addEventListener('click', function() {
    clearInterval(interval);
    position = 0;
    walker.style.left = position + 'px';
});