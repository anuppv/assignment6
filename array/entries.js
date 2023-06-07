function nameentry(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];

    console.log("The list of names are:",name);
    let n = name.entries();
    for (x of n){
        console.log("Name",x);
    }
}
function numentry() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    
    console.log("The list of numbers are:",num);
    let nr = num.entries();
    console.log("Applying the Array entries method:");
    for (let x of nr){
        console.log(x);
    }
}
nameentry();
numentry();
