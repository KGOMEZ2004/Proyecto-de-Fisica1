document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(distance) || isNaN(velocity)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const time = distance / velocity;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Distancia: ${distance} metros</p>`;
    resultText += `<p>Velocidad: ${velocity} m/s</p>`;
    resultText += `<p>Tiempo: ${time.toFixed(2)} segundos</p>`;

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
        case 'mToKm':
            resultText = `${conversionValue} metros son ${conversionValue / 1000} kilómetros.`;
            break;
        case 'kmToM':
            resultText = `${conversionValue} kilómetros son ${conversionValue * 1000} metros.`;
            break;
        case 'sToMin':
            resultText = `${conversionValue} segundos son ${conversionValue / 60} minutos.`;
            break;
        case 'minToS':
            resultText = `${conversionValue} minutos son ${conversionValue * 60} segundos.`;
            break;
        default:
            resultText = 'Tipo de conversión no válido.';
    }

    resultDiv.textContent = resultText;
}