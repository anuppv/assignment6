function namesort(){
    console.log("First example");
    let name = ['Sandeep','Ganga','Amar','Ravi','Kumar'];
    
    console.log("The list of names are:",name);
    console.log("The sorted list is:",name.sort());
}
function numsort() {
    console.log("Second example");
    let num = [17,3,25,9,36];
    function compare(a, b) {
        return a - b;
    }
    console.log("The list of numbers is:",num);
    console.log("The sorted list is:",num.sort(compare));
}

namesort();
numsort();
    


