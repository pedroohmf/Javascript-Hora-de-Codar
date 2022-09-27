let titulo = document.querySelector("#title");
let hide = document.querySelector(".hide");


titulo.addEventListener("mouseover", function() {
    this.style.backgroundColor = "gray";
    hide.style.display = "inherit";
});



titulo.addEventListener("mouseout", function() {
    this.style.backgroundColor = "green";
});