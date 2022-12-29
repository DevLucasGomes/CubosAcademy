function solucao(numero1, numero2) {
    const resto = numero1 % numero2;
    const resposta = resto === 0;

    console.log(resposta)

}
function naoMexer(input) {
    const numero1 = input.split(' ')[a];
    const numero2 = input.split(' ')[1];
    solucao(numero1, numero2);
}
let input = require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);