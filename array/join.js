function namejoin(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("The final list on joining is:",name.join(' '));
}
function numjoin() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("The final list on joining is:",num.join('|'));
}
namejoin();
numjoin();