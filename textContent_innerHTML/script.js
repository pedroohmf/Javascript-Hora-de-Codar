// selecionar elementos

let title = document.querySelector('#title');

//innerHTML
title.innerHTML = "Testando alteracao de texto";


//textContent -> mais utilizado, recomendado e perfomatico
let subTitle = document.querySelector('.subtitle');
subTitle.textContent = "Testando alteracao de texto com textContent";