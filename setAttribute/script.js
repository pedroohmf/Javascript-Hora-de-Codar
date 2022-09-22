// adicionar atributo
let title = document.querySelector("#title");
title.setAttribute("class", "testando-atributo");
console.log(title);

let btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

let button = document.querySelector("button");
button.setAttribute("class", "testando-button"); // adcionando o atributo classe no botao
console.log(button);

let subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "titulo-2"); // adcionando o atributo id no .subtitle
console.log(subtitle);

// remover atributo
let lista = document.querySelector("#lista");
lista.removeAttribute("id");