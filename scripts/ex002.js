/*
Esta lógica funciona sob a seguinte situação: em um jogo, um guerreiro pretende enfrentar um 
boss, porém, é necessário que ele possua 3 itens que são necessários para enfrentar este boss,
estes 3 itens, portanto, devem estar dentre os itens que ele coletou durante as fases.

O script vai retornar se ele "PODE ENFRENTAR" ou "NAO PODE ENFRENTAR" o boss baseado nos itens 
coletados.
*/

function verificaItens(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

    var itensNecessarios = [itemNecessario1, itemNecessario2, itemNecessario3];
    var itensNecessariosColetados = 0;

    for (itemNecessario of itensNecessarios) {

        for (itemColetado of itensColetados) {

            if (itemNecessario === itemColetado) itensNecessariosColetados++;
        }
    }

    var resultado = itensNecessariosColetados == 3 ? 'PODE ENFRENTAR' : 'NAO PODE ENFRENTAR';
    
    console.log(resultado);
}

var itensColetados = ['espada', 'bota', 'escudo', 'poção'];

var itemNecessario1 = 'capacete';
var itemNecessario2 = 'poção';
var itemNecessario3 = 'bota';

verificaItens(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);