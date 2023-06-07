function forEach(){
let num = [3,9,12]
let sqr =[];
console.log("First example");
console.log("The list of numbers are:",num);
num.forEach((ele)=>{
    sqr.push(ele*ele);
});
console.log("The squares of the number list are:",sqr);

console.log("Second example");
console.log("The list of numbers are:",num);
let val =[];
num.forEach((ele)=>{
    val.push(ele+ele*2);
});
console.log("The number list after forEach function becomes:",val);
}
forEach();