// Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

let totalEleitores = parseInt(prompt("Informe o total de eleitores: "));
let votosBrancos = parseInt(prompt("Informe o numero de votos brancos: "));
let votosNulos = parseInt(prompt("Informe o numero de votos nulos: "));
let votosValidos = parseInt(prompt("Informe o numero de votos validos: "));

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
    console.log('A soma dos votos não pode ultrapassar o total de eleitores. Por favor, informe os votos novamente.');
} else {
    console.log('Percentual de votos brancos: ', percentualBrancos)
    console.log('Percentual de votos Nulos: ', percentualNulos)
    console.log('Percentual de votos Validos: ', percentualValidos)
}