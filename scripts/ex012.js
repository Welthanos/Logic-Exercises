// Este script simula operações no estoque de uma empresa.

// Código feito no segundo período de faculdade, portanto bem feinho (o_o).

function menu() {
    console.log()
    console.log(' =========================')
    console.log('|          MENU           ')
    console.log('|=========================')
    console.log('|  Selecione uma opção ↓  ')
    console.log('|—————————————————————————')
    console.log('| 1 → Consultar Estoque   ')
    console.log('| 2 → Adicionar Materiais ')
    console.log('| 3 → Remover Materias    ')
    console.log('| 4 → Materiais Removidos ')
    console.log(' —————————————————————————')
    console.log()
}

function listagem() {  //Auxilia na visualização dos materiais para remoção
    console.log(' ===============================')
    console.log('|            CONSULTA           ')
    console.log('|===============================')
    console.log('|   Número/Material/Quantidade  ')
    console.log('|———————————————————————————————')
    for (indice in estoque) {
        console.log(`| ${parseInt(indice) + 1}. ${estoque[indice]}  →  ${quantidade[indice]}`)
    }
    console.log('————————————————————————————————')
    console.log()
}

const prompt = require('prompt-sync')()
var escolha = 0
var indice = 0
var resp = null
var estoque = []
var quantidade = []
var removido = []
var remQtde = []
var remNovo = []
var qtdeNovo = []

// INÍCIO DO PROGRAMA
while (true) {
    menu()
    var escolha = prompt('Informe a opção desejada → ')
    console.clear()
    if (escolha == 1) {
        if (estoque == '') {
            console.log('\x1b[33mO estoque está vazio.\x1b[0m')
        } else {
            console.log(' ======================')
            console.log('| MATERIAIS EM ESTOQUE ')
            console.log('|======================')
            console.log('| Material/Quantidade  ')
            console.log('|——————————————————————')
            for (indice in estoque) {
                console.log(`| ${estoque[indice]}  →  ${quantidade[indice]}`)
            }
            console.log('———————————————————————')
            console.log()
            resp = prompt('Deseja voltar ao menu? [s / n] → ')
            if (resp == 's') {
                console.clear()
                continue
            } else {
                break
            }
        }
    } else if (escolha == 2) {
        resp = 's'
        while (resp == 's') {
            estoque.push(prompt('Digite o nome do material → '))
            quantidade.push(parseInt(prompt('Digite a quantidade do material → ')))
            console.log()
            resp = prompt('Continuar adicionando itens? [s / n] → ')
            console.log()
        }
        console.clear()
    } else if (escolha == 3) {
        resp = 's'
        while (resp == 's') {
            listagem()

            // Fazendo cópia do array "estoque"
            let aux = estoque.slice()

            // Busca o índice do item a ser removido, regido pela função .splice(<indice>,<quantidade>)
            removido = aux.splice(prompt('Informe o \x1b[33mnúmero\x1b[0m do material a ser removido → ') - 1, 1)

            // Iterando o material ao novo array a partir de "removido"
            remNovo.push(removido.toString())

            // Informando a quantidade a ser removida
            remQtde = parseInt(prompt('Informe a \x1b[33mquantidade\x1b[0m do materiai a ser removido → '))

            // Iterando a quantidade ao novo array a partir de "quantidade"
            qtdeNovo.push(remQtde)

            // Reciclando a variável auxiliar para obter o índice do material removido
            aux = estoque.indexOf(removido.toString())

            // Verificando se o valor a remover é maior que o presente em estoque
            let sub = quantidade[aux] > remQtde ? quantidade[aux] - remQtde : 0

            // Manipula o índice para a substituição da quantidade, regida pela função .splice(<indice>,<quantidade>,<valorSubstituido>)
            quantidade.splice(aux, 1, sub)

            console.log()

            resp = prompt('Continuar retirando itens? [s / n] → ')
            console.clear()
        }
        console.clear()
    } else if (escolha == 4) {
        if (remNovo == '') {
            console.log('\x1b[33mNão há itens removidos.\x1b[0m')
        } else {
            console.log(' ======================')
            console.log('| MATERIAIS REMOVIDOS  ')
            console.log('|======================')
            console.log('| Material/Quantidade ')
            console.log('|——————————————————————')
            for (indice in remNovo) {
                console.log(`| ${remNovo[indice]}  →  ${qtdeNovo[indice]}`)
            }
            console.log('———————————————————————')
            console.log()
            resp = prompt('Deseja voltar ao menu? [s / n] → ')
            if (resp == 's') {
                console.clear()
                continue
            } else {
                break
            }
        }
    }
}