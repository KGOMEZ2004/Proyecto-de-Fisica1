document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distanceNorth = parseFloat(document.getElementById('distanceNorth').value);
    const distanceSouth = parseFloat(document.getElementById('distanceSouth').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(distanceNorth) || isNaN(distanceSouth)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const totalDistance = distanceNorth + distanceSouth;
    const displacement = distanceNorth - distanceSouth;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Distancia total recorrida: ${totalDistance} km</p>`;
    resultText += `<p>Desplazamiento final: ${displacement} km</p>`;

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