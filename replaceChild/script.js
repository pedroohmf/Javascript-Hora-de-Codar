//  Substituir elementos

// criar um elemento
let el = document.createElement("h3");

el.classList = "testando-classe";

let text = document.createTextNode("Este eh o texto do h3");

el.appendChild(text);
console.log(el);

// PASSOS
// selecionar o elemento que eu quero trocar
let title = document.querySelector("#title");
console.log(title);

//  selecionar o pai do el (elemento)

let body = document.querySelector("body"); // OPCAO 1
let pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title); // primeiro parametro eh o que vai ser substituido e o segundo eh o que vai colocar no lugar