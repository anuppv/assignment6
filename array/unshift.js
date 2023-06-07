function nameunshift(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("On unshifting, the list increase to:",name.unshift('Mohan'));
    console.log("The new list is:",name);
}
function numunshift() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("On unshifting, the list increase to:",num.unshift(63,78));
    console.log("The new list is:",num);
}
nameunshift();
numunshift();