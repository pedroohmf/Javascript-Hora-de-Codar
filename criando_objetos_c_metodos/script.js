let pessoa = {
    nome: "Pedro",
    didade: 26,
    falar: function() {
        console.log("Pega a visao!");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);
pessoa.falar();
console.log(pessoa.soma(2, 7));