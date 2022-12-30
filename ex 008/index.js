// if = se
// while = enquanto

// quantos numeros entra 1 e 1000 são multiplos de 17

let resposta = 0;

let numero = 1;

while (numero <= 1000) {
    if (numero % 17 === 0) {
        resposta += 1;
        console.log(resposta);
    }
    numero += 1;
}

console.log("Resposta é", resposta)