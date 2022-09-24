console.log("Antes do setTimeout...")
setTimeout(function() {
        console.log("testando!")
    }, 1000) // executa apos 1 segundo
console.log("Depois do setTimeout...")



setInterval(function() { // executa de 1 em 1 segundo
    console.log("Testando setInterval...");
}, 1000)