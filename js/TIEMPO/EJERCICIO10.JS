document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const finalVelocity = parseFloat(document.getElementById('finalVelocity').value);
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(finalVelocity) || isNaN(acceleration)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const time = finalVelocity / acceleration;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Velocidad final: ${finalVelocity} m/s</p>`;
    resultText += `<p>Aceleración: ${acceleration} m/s²</p>`;
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
        case 'msToKmh':
            resultText = `${conversionValue} m/s son ${conversionValue * 3600 / 1000} km/h.`;
            break;
        case 'kmhToMs':
            resultText = `${conversionValue} km/h son ${conversionValue * 1000 / 3600} m/s.`;
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