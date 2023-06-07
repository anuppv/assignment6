function namelast(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];

    console.log("The list of names are:",name);
    console.log("The index of Amar is:",name.lastIndexOf('Amar'));
}
function numlast() {
    console.log("Second example");
    let num = [17,3,25,9,36,9,9];
    
    console.log("The list of numbers is:",num);
    console.log("The index of 9 is:",num.lastIndexOf(9));
}
namelast();
numlast();
