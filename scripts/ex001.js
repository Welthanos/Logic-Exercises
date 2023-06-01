/*
Esta lógica funciona sob a seguinte situação: o usuário quer formar uma nova palavra
a partir de uma outra palavra informada pelo mesmo, e a quantidades de letras que deseja
pular no alfabeto. De modo que -> ao digitar "casa" e "2" a nova palavra será:

     1    2
c -> d -> e
a -> b -> c
s -> t -> u
a -> b -> c

---> "ecuc"
*/

const readline = require('readline');

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var novaPalavra = "";

function avancaLetra(palavra, valor) {

    for (letra of palavra) {

        for (let i = 0; i < alfabeto.length; i++) {

            if (letra == alfabeto[i]) {
                novaPalavra += alfabeto[i + valor];
            }
        }
    }

    console.log('Nova palavra:', novaPalavra);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a palavra que deseja modificar: ', (palavraInput) => {
    rl.question('Digite a quantidade de letras a pular: ', (valorInput) => {
        const palavra = palavraInput.toLowerCase();
        const valor = parseInt(valorInput);

        avancaLetra(palavra, valor);
        rl.close();
    });
});