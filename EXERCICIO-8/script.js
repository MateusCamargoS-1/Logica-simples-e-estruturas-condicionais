// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = parseInt(prompt('Informe o primeiro valor: '));
let valor2 = parseInt(prompt('Informe o segundo valor: '));

if(valor1 === valor2) {
    console.log('Números iguais');
} else if(valor1 > valor2) {
    console.log('Primeiro é maior');
} else {
    console.log('Segundo Maior');
}