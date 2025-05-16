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
    resultText += `<p>Distancia: ${distance} km</p>`;
    resultText += `<p>Velocidad: ${velocity} km/h</p>`;
    resultText += `<p>Tiempo: ${time.toFixed(2)} horas</p>`;

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
        case 'hoursToMinutes':
            resultText = `${conversionValue} horas son ${conversionValue * 60} minutos.`;
            break;
        case 'minutesToHours':
            resultText = `${conversionValue} minutos son ${conversionValue / 60} horas.`;
            break;
        default:
            resultText = 'Tipo de conversión no válido.';
    }

    resultDiv.textContent = resultText;
}