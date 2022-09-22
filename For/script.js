for (let i = 0; i < 10; i++) {
    console.log("Repetindo for: " + i);
}
console.log("================================================================");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'teste', 'outro teste'];

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}
console.log("================================================================");
console.log(arr.length);
console.log("================================================================");

for (let x = 5; x < 100; x *= 3) {
    console.log(x);
}