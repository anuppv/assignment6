function nameslice(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("The final list after slicing is:",name.slice(2)); 
}
function numslice() {
    console.log("Second example");
    let num = [17,3,25,9,36,59];
    
    console.log("The list of numbers are:",num);
    console.log("The final list after slicing is:",num.slice(1,5));
}
nameslice();
numslice();