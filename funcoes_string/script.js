// length
let nome = "Pedro";
console.log(nome.length);

// indexOf
console.log(nome[3]);

let fraase = "O rato roeu e o rei ficou pistola";
console.log(fraase.indexOf("roeu")); // indexOf mostra o indice que começa r de "roeu" 

// slice
let roeu = fraase.slice(7, 11); // exibir do indice 7 ao 11
console.log(roeu)

// replace
let novaFrase = fraase.replace("roeu", "BROKOU");
console.log(novaFrase);

// toLowerCase
let frase = "Esta eh uma frase que vamos manipular.";
console.log(frase.toLowerCase());

// toUpperCase
console.log(frase.toUpperCase());

// trim
let noome = "    Pedro";
console.log(noome.trim()); // elimina os espacos

// split
console.log(frase.split(" "));
let tags = "PHP, HTML, CSS, JavaScript";
console.log(tags.split(", ")); // separar por ", " ou espacos " ";


// lastIndexOf
let fraseDois = "Eu quero a ultima palavra teste dessa frase teste";
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste")); // mostra o indice da ultima palavra que estiver pesquisando