/*
Esta lógica funciona sob a seguinte situação: o usuário deseja fazer uma operação matemática,
e para isto ele precisa informar a operação que deseja fazer, o primeiro e o segundo número da 
operação.

O sistema irá retornar para ele o resultado da operação.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('====================');
console.log('      Operações     ');
console.log('====================');
console.log('1 -> Adição'         );
console.log('2 -> Subtração'      );
console.log('3 -> Multiplicação'  );
console.log('4 -> Divisão'        );
console.log('====================');

rl.question('Informe o NÚMERO da operação que deseja fazer: ', (operacao) => {
    rl.question('Informe o primeiro valor da operação: ', (valor1) => {
        rl.question('Informe o segundo valor da operação: ', (valor2) => {

            const op = parseInt(operacao);
            const n1 = parseFloat(valor1);
            const n2 = parseFloat(valor2);

            switch (op) {
                case 1:
                    r = n1 + n2;
                    console.log(`Resultado: ${r}`);
                    break;
                case 2:
                    r = n1 - n2;
                    console.log(`Resultado: ${r}`);
                    break;
                case 3:
                    r = n1 * n2;
                    console.log(`Resultado: ${r}`);
                    break;
                case 4:
                    r = n1 / n2;
                    console.log(`Resultado: ${r.toFixed(2)}`);
                    break;
                default:
                    console.log('ERRO: Digite valores e/ou operações válidas.');
            }

            rl.close();
        });
    });
});