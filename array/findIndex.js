function isPositive(value){
    return value>0;
}
function isEven(element) {
    return element % 2 == 0;
}

function numfindindex() {
    console.log("First example");
    let num = [-17,-3,25,0.9,36];    
    console.log("The list of numbers are:",num);
    console.log("Index value of first positive value in the list is:",num.findIndex(isPositive));

    console.log("Second example");
    let numb = [27,43,35,16,6];    
    console.log("The list of numbers are:",numb);
    console.log("Index value of first even number in the list is:",numb.findIndex(isEven));
}
numfindindex();