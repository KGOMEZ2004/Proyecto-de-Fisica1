document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
    const deceleration = parseFloat(document.getElementById('deceleration').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(initialVelocity) || isNaN(deceleration)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const initialVelocityMs = initialVelocity * 1000 / 3600;
    const stoppingDistance = (initialVelocityMs * initialVelocityMs) / (2 * deceleration);

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Velocidad inicial: ${initialVelocity} km/h (${initialVelocityMs.toFixed(2)} m/s)</p>`;
    resultText += `<p>Desaceleración: ${deceleration} m/s²</p>`;
    resultText += `<p>Distancia de frenado: ${stoppingDistance.toFixed(2)} metros</p>`;

    resultDiv.innerHTML = resultText;
});

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
        case 'kmhToMs':
            resultText = `${conversionValue} km/h son ${conversionValue * 1000 / 3600} m/s.`;
            break;
        case 'msToKmh':
            resultText = `${conversionValue} m/s son ${conversionValue * 3600 / 1000} km/h.`;
            break;
        default:
            resultText = 'Tipo de conversión no válido.';
    }

    resultDiv.textContent = resultText;
}