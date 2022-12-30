function solucao (notaAlunoA, notaAlunoB) {
	notaAlunoA = 8;
	notaAlunoB = 6;
	
	const notaG = notaAlunoA + notaAlunoB;
	
	if (notaG <= 2) {
		console.log("DUPLA VÁLIDA", notaAlunoA, notaAlunoB);
	} else {
		console.log("DUPLA INVÁLIDA")
	}
	
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}