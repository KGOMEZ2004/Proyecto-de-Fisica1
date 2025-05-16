document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const time = parseFloat(document.getElementById('time').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(time)) {
        resultDiv.innerHTML = '<p>Por favor, ingrese un valor numérico válido.</p>';
        return;
    }

    const g = 9.8; // aceleración debida a la gravedad en m/s²
    const height = 0.5 * g * Math.pow(time, 2);

    let resultText = '<p>Resultados:</p>';
    resultText += `<p>Tiempo: ${time} segundos</p>`;
    resultText += `<p>Altura: ${height.toFixed(2)} metros</p>`;

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