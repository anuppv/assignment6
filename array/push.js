function namepush(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("On pushing, the list increase to:",name.push('Vijay'));
    console.log("The new list is:",name);
}
function numpush() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("On pushing, the list increase to:",num.push(5,58));
    console.log("The new list is:",num);
}
namepush();
numpush();