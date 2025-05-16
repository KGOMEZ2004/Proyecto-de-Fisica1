document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const velocity = parseFloat(document.getElementById('velocity').value);
    const orbitLength = parseFloat(document.getElementById('orbitLength').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(velocity) || isNaN(orbitLength)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const time = orbitLength / velocity;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Velocidad del satélite: ${velocity} km/h</p>`;
    resultText += `<p>Longitud de la órbita: ${orbitLength} km</p>`;
    resultText += `<p>Tiempo para dar una vuelta completa: ${time.toFixed(2)} horas</p>`;

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