function solucao(notaAlunoA,notaAlunoB) {
	//seu codigo aqui
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}
let input = require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);
