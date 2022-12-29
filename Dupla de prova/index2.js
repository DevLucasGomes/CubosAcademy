function solucao (notaAlunoA, notaAlunoB) {
	console.log(notaAlunoA)
	
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}