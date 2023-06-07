function nameconcat(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    let newname =['Basil','Dileep'];
    
    console.log("The list of names are:",name,newname);
    console.log("The final name list is:",name.concat(newname)); 
}
function numconcat() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    let newnum = [72,59]
    
    console.log("The list of numbers are:",num,newnum);
    console.log("The final list is:",num.concat(newnum));
}
nameconcat();
numconcat();