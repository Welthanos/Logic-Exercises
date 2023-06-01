/*
Este script faz uma saudação ao usuário com base no horário (manhã, noite ou tarde)
e informa qual sua idade atual, com base no ano de nascimento.
*/

// Código não validado para situações adversas.

var nome = 'Welthanos';

var anoNasc = 1999;
var mesNasc = 02;
var diaNasc = 03;

var hoje = new Date();

var idade = hoje.getFullYear() - anoNasc;
var mes = hoje.getMonth() - mesNasc;
var dia = hoje.getDate() - diaNasc;

cumpr = hoje.getHours();

if (cumpr < 12 && cumpr > 5) {

    cumpr = 'Bom dia';
} else if (cumpr > 12 && cumpr < 18) {

    cumpr = 'Boa tarde';
} else if (cumpr > 18 && cumpr < 00) {

    cumpr = 'Boa noite';
} else {

    cumpr = 'Boa madrugada';
}

console.log(`${cumpr}, ${nome}. A sua idade hoje é ${idade} anos.`);