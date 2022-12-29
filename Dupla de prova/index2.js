function solucao (notaAlunoA, notaAlunoB) {
    notaAlunoA = 8;
	notaAlunoB = 6;
	
	console.log(notaAlunoA)
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}