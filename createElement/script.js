let novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

let texto = document.createTextNode("Este eh o conteudo do paragrafo");
novoParagrafo.appendChild(texto);

let body = document.querySelector("body");
console.log(body);
body.appendChild(novoParagrafo); // inserir o elemento "novoParagrafo" no body ja selecionado


// inserir em um container
let container = document.getElementById("container");
container.appendChild(novoParagrafo);


let el = document.createElement("span");
el.appendChild(document.createTextNode("Esse eh o paragrafo do container inserido via JS"));
container.appendChild(el);