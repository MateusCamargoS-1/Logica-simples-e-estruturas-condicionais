// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

let nome = prompt('Informe seu nome: ');
let idade = parseInt(prompt('Informe a idade: '));
let data = new Date();
const anoAtual = data.getFullYear();

let anoNascimento = anoAtual - idade;

console.log(`Nome: ${nome}, Idade: ${idade}, nasceu em ${anoNascimento}`);