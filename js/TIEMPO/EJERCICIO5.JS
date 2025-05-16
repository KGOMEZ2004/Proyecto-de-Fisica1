document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const velocity1 = parseFloat(document.getElementById('velocity1').value);
    const velocity2 = parseFloat(document.getElementById('velocity2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(distance) || isNaN(velocity1) || isNaN(velocity2)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const time1 = distance / velocity1;
    const time2 = distance / velocity2;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Distancia: ${distance} km</p>`;
    resultText += `<p>Velocidad del primer ciclista: ${velocity1} km/h</p>`;
    resultText += `<p>Tiempo del primer ciclista: ${time1.toFixed(2)} horas</p>`;
    resultText += `<p>Velocidad del segundo ciclista: ${velocity2} km/h</p>`;
    resultText += `<p>Tiempo del segundo ciclista: ${time2.toFixed(2)} horas</p>`;

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