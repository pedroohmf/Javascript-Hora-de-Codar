let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    console.log("clicou!");

    this.style.color = "red";
});


// click afetando outros elementos
let title = document.querySelector("#title");
let subTitle = document.querySelector(".subtitle");

title.addEventListener("click", function() {
    this.style.color = "green";
    subTitle.style.color = "green";
});



// dbclick

subTitle.addEventListener("dblclick", function() {
    console.log("click duplo!");
});