function isPositive(value, index, array){
    return value>0;
}
function isOdd(element, index, array) {
    return element % 2 == 1;
}

function numevery() {
    console.log("First example");
    let num = [17,3,25,9,36];    
    console.log("The list of numbers are:",num);
    console.log("Does the numbers have positive values?",num.every(isPositive));

    console.log("Second example");
    let numb = [27,43,35,16,6];    
    console.log("The list of numbers are:",numb);
    console.log("Doess the list have odd values?",numb.every(isOdd));
}
numevery();