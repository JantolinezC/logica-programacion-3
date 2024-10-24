function calcular() {
    const numInput = document.getElementById("numberInput");
    const resultadoInput = document.getElementById("result");

    let inputValue = numInput.value.replace(",", "."); //Esto para reemplazar , por . y que lo lea como decimal
    let numero = parseFloat(inputValue);  // ParseFloat para admitir decimales

    // Esto para la validación de si es número entero, positivo
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        alert("Debes ingresar un número que sea entero y positivo");
        numInput.value = ""; //Esto para limpiar el número del campo cuando se genere la alerta
        resultadoInput.textContent = ""; //Esto para limpiar la respuesta cuando se genere la alerta
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultadoInput.textContent = "El número factorial de " + numero + " es " + factorial;
}
