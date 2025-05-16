document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance1 = parseFloat(document.getElementById('distance1').value);
    const velocity1 = parseFloat(document.getElementById('velocity1').value);
    const distance2 = parseFloat(document.getElementById('distance2').value);
    const velocity2 = parseFloat(document.getElementById('velocity2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(distance1) || isNaN(velocity1) || isNaN(distance2) || isNaN(velocity2)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const time1 = distance1 / velocity1;
    const time2 = distance2 / velocity2;
    const totalTime = time1 + time2;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Distancia del primer tramo: ${distance1} km</p>`;
    resultText += `<p>Velocidad del primer tramo: ${velocity1} km/h</p>`;
    resultText += `<p>Tiempo del primer tramo: ${time1.toFixed(2)} horas</p>`;
    resultText += `<p>Distancia del segundo tramo: ${distance2} km</p>`;
    resultText += `<p>Velocidad del segundo tramo: ${velocity2} km/h</p>`;
    resultText += `<p>Tiempo del segundo tramo: ${time2.toFixed(2)} horas</p>`;
    resultText += `<p>Tiempo total: ${totalTime.toFixed(2)} horas</p>`;

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