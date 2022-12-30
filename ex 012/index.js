const listaDeNumeros = [34, 14, 56, 768, 8, 81, 3, 6, 10];

// 1. Qual a soma deles ?

let acumulador = 0;

for (const numero of listaDeNumeros) {
    acumulador += numero;
}

console.log("A soma é", acumulador);

// 2. Qual o menor deles ?

let oMenorNumeroAteAgora;

for (const numero of listaDeNumeros) {
    if (oMenorNumeroAteAgora === undefined) {
        oMenorNumeroAteAgora = numero;
    } else {
        if (numero < oMenorNumeroAteAgora) {
            oMenorNumeroAteAgora = numero;
        }
    }
}

console.log("O menor numero é",oMenorNumeroAteAgora)