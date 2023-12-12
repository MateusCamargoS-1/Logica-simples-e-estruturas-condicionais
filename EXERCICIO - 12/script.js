// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoNascimento = parseInt(prompt('Informe o ano do seu nascimento: '));
let data = new Date();
let anoAtual = data.getFullYear();

let idade = anoAtual - anoNascimento

if(idade >= 16 && idade <= 17 ) {
    console.log('Pode votar, mas não é obrigatório.')
} else if(idade >= 18) {
    console.log('Pode votar esse ano, é Obrigatório.')
} else {
    console.log('Não pode votar ainda.')
}