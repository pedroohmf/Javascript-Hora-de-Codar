// criar elemento
let el = document.createElement("div"); // el = elemento
el.classList = "div-criada";
console.log(el);

let container = document.querySelector("#container"); // selecionar o container para insenrir o el
container.appendChild(el); // inserir o el  no html da pagina


// inserBefore
let el2 = document.createElement("div");
el2.classList = "div-before";

let el3 = document.querySelector("#container .div-criada");
console.log(el3);

container.insertBefore(el2, el3); // primeiro parametro eh o que vai ser inserido e o segundo parametro eh a referencia