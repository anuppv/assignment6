function namepop(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The names are:",name);
    console.log("The popped name is:",name.pop());
    console.log("The final list is:",name);
}
function numpop() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("The popped number is:",num.pop());
    console.log("The final list is:",num);
}
namepop();
numpop();