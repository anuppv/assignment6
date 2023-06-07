function nameincludes(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];

    console.log("The list of names are:",name);
    console.log("Is the name Amar present in the list?",name.includes('Amar'));
}
function numincludes() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers are:",num);
    console.log("Is the number 59 present in the list?",num.includes(59));
}
nameincludes();
numincludes();
