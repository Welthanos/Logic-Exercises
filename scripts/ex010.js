//Esta lógica consiste em inserir e validar dados utilizando o conceito de objetos.

const material = {
    _codigo: 0,
    _nome: '[não especificado]',
    _quantidade: 0,
    _preco: 0.00,
    
    set codigo(codigo) {
        this._codigo = codigo;
        if (codigo <= 0 || codigo == '') {
            min = Math.ceil(1);
            max = Math.floor(1000);
            this._codigo = Math.floor(Math.random() * (max - min)) + min;
        }
    },

    get codigo() {return this._codigo},

    set nome(nome) {
        this._nome = nome[0].toUpperCase()+nome.slice(1);
    },

    get nome() {return this._nome},
    
    set quantidade(quantidade) {
        this._quantidade = quantidade;
    },

    get quantidade() {return this._quantidade},

    set preco(preco) {
        this._preco = preco.toFixed(2);
    },

    get preco() {return this._preco}
};

material.codigo = 1;
material.nome = 'Parafuso';
material.preco = 12.5;
material.quantidade = 1000;

console.log(`Código       =>   ${material.codigo}`);
console.log(`Material     =>   ${material.nome}`);
console.log(`Preço        =>   ${material.preco}`);
console.log(`Quantidade   =>   ${material.quantidade}`);
