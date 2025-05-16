document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance1 = parseFloat(document.getElementById('distance1').value);
    const time1 = parseFloat(document.getElementById('time1').value);
    const distance2 = parseFloat(document.getElementById('distance2').value);
    const time2 = parseFloat(document.getElementById('time2').value);
    const time3 = parseFloat(document.getElementById('time3').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(distance1) || isNaN(time1) || isNaN(distance2) || isNaN(time2) || isNaN(time3)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const totalDistance = distance1 + distance2 + (42.195 - distance1 - distance2);
    const time3Hours = time3 / 60;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Distancia del primer tramo: ${distance1} km</p>`;
    resultText += `<p>Tiempo del primer tramo: ${time1} horas</p>`;
    resultText += `<p>Distancia del segundo tramo: ${distance2} km</p>`;
    resultText += `<p>Tiempo del segundo tramo: ${time2} horas</p>`;
    resultText += `<p>Tiempo del tercer tramo: ${time3} minutos (${time3Hours.toFixed(2)} horas)</p>`;
    resultText += `<p>Distancia total recorrida: ${totalDistance.toFixed(2)} km</p>`;

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