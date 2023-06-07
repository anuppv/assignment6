function isPositive(value, index, array){
    return value>0;
}
function isEven(element, index, array) {
    return element % 2 == 0;
}

function numfilter() {
    console.log("First example");
    let num = [17,-3,25,9,36];    
    console.log("The list of numbers are:",num);
    console.log("List with Positive values are:",num.filter(isPositive));

    console.log("Second example");
    let numb = [27,43,35,16,6];    
    console.log("The list of numbers are:",numb);
    console.log("List with Even numbers are:",numb.filter(isEven));
}
numfilter();