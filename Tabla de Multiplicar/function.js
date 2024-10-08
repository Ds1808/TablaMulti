
// Función para generar la tabla de multiplicar
function tablaMultiplicar(numero) {
    console.log('Tabla de multiplicar del'+ numero + ":");
    for (let i = 1; i <= 10; i++) {
        let resul = numero * i;
        console.log(numero + " x " + i + " = " + resul);
    }
}

// Número específico para la tabla de multiplicar
const numero = 5;
tablaMultiplicar(numero); //llamo a la function
