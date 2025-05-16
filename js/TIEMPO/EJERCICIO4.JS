document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const finalVelocityKmh = parseFloat(document.getElementById('finalVelocity').value);
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(finalVelocityKmh) || isNaN(acceleration)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese valores numéricos válidos.</p>';
        return;
    }

    const finalVelocityMs = finalVelocityKmh * 1000 / 3600;
    const time = finalVelocityMs / acceleration;

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Velocidad final: ${finalVelocityKmh} km/h (${finalVelocityMs.toFixed(2)} m/s)</p>`;
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
        case 'kmhToMs':
            resultText = `${conversionValue} km/h son ${conversionValue * 1000 / 3600} m/s.`;
            break;
        case 'msToKmh':
            resultText = `${conversionValue} m/s son ${conversionValue * 3600 / 1000} km/h.`;
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