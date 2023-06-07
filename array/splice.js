function namesplice(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("The splicing list is:",name.splice(1,2,'Deva','Jai'));
    console.log("The final list after splicing is:",name);
}
function numsplice() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers is:",num);
    console.log("The splicing list is:",num.splice(-2,2,59));
    console.log("The final list after splicing is:",num);
}
namesplice();
numsplice();