function nameshift(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("The shifted name is:",name.shift());
    console.log("The final list is:",name);
}
function numshift() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("The shifted number is:",num.shift());
    console.log("The final list is:",num);
}
nameshift();
numshift();