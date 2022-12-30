function solucao(notaAlunoA,notaAlunoB) {
	//seu codigo aqui
const notaAlunoA = parseFloat(prompt("Digite a nota do aluno A"));
const notaAlunoB = parseFloat(prompt("Digite a nota do aluno B"));

if (notaAlunoA - notaAlunoB < 1.5 && notaAlunoA - notaAlunoB > -1.5) {
   	console.log("DUPLA VALIDA");
}	else {
   		console.log("DUPLA INVALIDA");
	}
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}
let input = require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);