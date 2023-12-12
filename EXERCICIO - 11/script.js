// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let valor = parseInt(prompt('Informe um numero: '))

if(valor % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}