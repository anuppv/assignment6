function isPositive(value){
    return value>0;
}
function isEven(element) {
    return element % 2 == 0;
}

function numfind() {
    console.log("First example");
    let num = [-17,-3,25,0.9,36];    
    console.log("The list of numbers are:",num);
    console.log("First positive value in the list is:",num.find(isPositive));

    console.log("Second example");
    let numb = [27,43,35,16,6];    
    console.log("The list of numbers are:",numb);
    console.log("First even number in the list is:",numb.find(isEven));
}
numfind();