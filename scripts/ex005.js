/*
Este script verifica a situação de um aluno a partir de suas notas. Tendo como saída
o resumo de suas notas, sua média e situação (aprovado, reprovado ou em recuperação).
*/

const nome = 'Welton Santos';

const nota1 = 5.5;
const nota2 = 6.8;
const nota3 = 9.0;
const nota4 = 8.0;

var med = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(2);

if (med >= 7) {
    situacao = 'Aprovado'
} else if (med < 7 && med >= 5) {
    situacao = 'Recuperação'
} else {
    situacao = 'Reprovado'
}
console.log('======================================')
console.log('          Resumo de Situação          ')
console.log('======================================')
console.log(`Nome: ${nome}`)
console.log(`1ª nota: ${nota1}`)
console.log(`2ª nota: ${nota2}`)
console.log(`3ª nota: ${nota3}`)
console.log(`4ª nota: ${nota4}`)
console.log(`Média: ${med}`)
console.log(`Situação: ${situacao}`)
console.log('=======================================')