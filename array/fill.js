function namefill(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("The list after fill function is:",name.fill('Deva',3));
}
function numfill() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("The list after fill function is:",num.fill(59,2));
}
namefill();
numfill();