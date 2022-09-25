// clearTimeout
let x = 0;

let myTimer = setTimeout(function() {
    console.log("O x eh 0");
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// clearSetInterval
let myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function() {
    console.log("Nao precisamos mais repetir!");
    clearInterval(myInterval);
}, 1500);