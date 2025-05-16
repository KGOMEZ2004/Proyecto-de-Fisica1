document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    const time = parseFloat(document.getElementById('time').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(acceleration) || isNaN(time)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const distance = 0.5 * acceleration * time * time;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Aceleración: ${acceleration} m/s²</p>`;
    resultText += `<p>Tiempo: ${time} segundos</p>`;
    resultText += `<p>Distancia recorrida: ${distance.toFixed(2)} metros</p>`;

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