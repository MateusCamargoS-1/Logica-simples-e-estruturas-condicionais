// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let qtdMacas = parseInt(prompt('Informe a quantidades de maçãs compradas: '));
let totalCompra = 0;

if(qtdMacas >= 12) {
    totalCompra = qtdMacas * 0.25;
    console.log('O total da compra e de: ', totalCompra.toFixed(2));
} else if(qtdMacas < 12 && qtdMacas > 0 ) {
    totalCompra = qtdMacas * 0.30;
    console.log('O total da compra e de: ', totalCompra.toFixed(2));
} else {
    console.log('Nenhuma maçã foi comprada.');
}