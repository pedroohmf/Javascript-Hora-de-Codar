// length

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// push   
arr.push("teste"); // adicionar um item ao array
arr.push(6);

console.log(arr);

// pop
arr.pop(); // remove o ultimo elemento do array

//unshift
arr.unshift(0);
arr.unshift("testee");
console.log(arr);

//shift
arr.shift(); // remove o primeiro elemento do array

// acessar o ultimo elemento do array
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(arr)); // verificar se o tipo de dado trabalhado eh array


// splice
let arr2 = [1, 2, 3, 4, 5];

arr2.splice(2, 0, "teste"); // splice "2" = posicao que vai inserir, "0" quantidade de elementos a deletar e "teste"o que inserir
console.log(arr2);

arr2.splice(4, 1); // remover na 4 posicao
console.log(arr2);

// indexOf
console.log(arr2.indexOf(5)); // achar index de um elemento

// join
let arr3 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr3.join(" ")); // transformar o array em uma string separando os elementos por " " ou "," "."

// reverse
console.log(arr3.reverse()); // inverte a ordem dos elementos no array