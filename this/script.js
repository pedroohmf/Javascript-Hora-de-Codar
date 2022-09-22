console.log(this)

let pessoa = {
    nome: "Pedro",
    idade: 26,
    falar: function() {
        console.log("Pega a visao!");
    },
    soma: function(a, b) {
        return a + b;
    },
    dizerNome: function() {
        console.log("O meu nome eh: " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr.' + this.nome;
    }

};

pessoa.dizerNome();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade)
console.log("Ola " + pessoa.saudacao())