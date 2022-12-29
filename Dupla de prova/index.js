function solucao(notaAlunoA,notaAlunoB) {
	const resto = notaAlunoA % notaAlunoB;
	const resposta = resto <= 2;
	
	console.log(resposta);
	//seu codigo aqui
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}
let input = require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);
