/*
Este script simula uma manipulação dos materiais do estoque de uma empresa. Podendo inserir, alterar,
excluir, visualizar materiais e o histórico de registros.
*/

const material = {
    sumarizar_material(codigo, nome, quantidade, preco) {
        return {
            codigo: codigo,
            nome: nome,
            quantidade: quantidade,
            preco: preco,

        }
    }
}

const estoque = {
    lista: [],
    hist: [],
    temp: [],

    adicionar(item) {
        this.lista.push(item)
        return
    },

    consultar_materiais() {
        console.log(' ===================================================')
        console.log('|  Código  /   Material   /  Quantidade  /   Preço  ')
        console.log('|———————————————————————————————————————————————————')
        for (let c in estoque.lista) {
            console.log(`|  ${this.lista[c].codigo}   -   ${this.lista[c].nome}   -   ${this.lista[c].quantidade}    -    ${this.lista[c].preco.toFixed(2)}`)
        }
        console.log(' ———————————————————————————————————————————————————')
        console.log()   
    },

    retirar_quantidade(codigo, valor) {
        for (c in this.lista) {
            if (this.lista[c].codigo == codigo) {
                this.lista[c].quantidade -= valor
                this.hist.push(`${codigo}  -  removeu ${valor} unidades`)
                this.registrar_data()
            }
        }
    },

    alterar_preco(codigo, valor) {
        for (c in this.lista) {
            if (this.lista[c].codigo == codigo) {
                this.lista[c].preco = valor
                this.hist.push(`${codigo}  -  alterou para R$${valor.toFixed(2)}`)
                this.registrar_data()
            }
        }
    },

    historico() {
        if (this.hist == '') {
            console.log('[histórico vazio]')
            console.log()
        } else {
            console.log(' ======================================================')
            console.log('|   Código  /     Procedimento     /      Data         ')
            console.log('|——————————————————————————————————————————————————————')
            let map = new Map()
            for (c in this.hist) {  // Settando os valores do Map
                map.set(this.hist[c], this.temp[c])
            }
            for ([this.hist[c], this.temp[c]] of map.entries()) { // Concatenando os valores do Map
                console.log(`|  ${this.hist[c]}  >>  ${this.temp[c]}`)
            }
            console.log(' ——————————————————————————————————————————————————————')
            console.log()   
        }
    },

    registrar_data() { // Configurando a data das modificações
        let data = new Date()
        let mes = data.getMonth() < 10? '0'+(data.getMonth()+1) : data.getmonth()+1
        let min = data.getMinutes() < 10? '0'+data.getMinutes() : data.getMinutes()
        let newData = `${data.getDate()}/${mes}/${data.getFullYear()} ${data.getHours()}:${min}`
        this.temp.push(newData)
    }
}

// Corpo do programa

mat1 = material.sumarizar_material('105B', 'Chave Allen', 1200, 45.49)
mat2 = material.sumarizar_material('4055', 'Alicate UNI', 1005, 54.50)
mat3 = material.sumarizar_material('045A', 'Chave Biela', 1250, 43.90)
mat4 = material.sumarizar_material('1002', 'Parafuso ZB', 3500, 4.50)
mat5 = material.sumarizar_material('1008', 'Parafuso ET', 3500, 5.50)
mat6 = material.sumarizar_material('3200', 'Porca SX ZB', 7000, 1.50)
mat7 = material.sumarizar_material('3205', 'Porca INOX ', 7000, 3.20)
mat8 = material.sumarizar_material('0054', 'Arruela ZB ', 7000, 1.30)

estoque.adicionar(mat1)
estoque.adicionar(mat2)
estoque.adicionar(mat3)
estoque.adicionar(mat4)
estoque.adicionar(mat5)
estoque.adicionar(mat6)
estoque.adicionar(mat7)
estoque.adicionar(mat8)

console.log('~ materiais adicionados ~')
estoque.consultar_materiais()

console.log('~ exibindo o histórico sem alterar os materiais ~')
estoque.historico()

estoque.retirar_quantidade('105B', 150)
estoque.retirar_quantidade('1002', 150)
estoque.retirar_quantidade('0054', 300)

console.log('~ quantidades foram retiradas ~')
estoque.consultar_materiais()

console.log('~ histórico ~')
estoque.historico()

estoque.alterar_preco('105B', 47.20)
estoque.alterar_preco('045A', 45.99)
estoque.alterar_preco('4055', 64.00)

console.log('~ preços foram alterados ~')
estoque.consultar_materiais()

console.log('~ histórico ~')
estoque.historico()
