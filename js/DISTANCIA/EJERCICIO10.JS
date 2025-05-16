document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const circumference = parseFloat(document.getElementById('circumference').value);
    const orbitalPeriod = parseFloat(document.getElementById('orbitalPeriod').value);
    const time = parseFloat(document.getElementById('time').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(circumference) || isNaN(orbitalPeriod) || isNaN(time)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const distance = (time / orbitalPeriod) * circumference;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Circunferencia de la órbita: ${circumference} km</p>`;
    resultText += `<p>Período orbital: ${orbitalPeriod} horas</p>`;
    resultText += `<p>Tiempo: ${time} horas</p>`;
    resultText += `<p>Distancia recorrida: ${distance.toFixed(2)} km</p>`;

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