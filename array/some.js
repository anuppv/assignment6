function isPositive(value, index, array){
    return value>0;
}
function isEven(element, index, array) {
    return element % 2 == 0;
}

function numsome() {
    console.log("First example");
    let num = [17,-3,25,9,36];    
    console.log("The list of numbers are:",num);
    console.log("Does the list have positive values?",num.some(isPositive));

    console.log("Second example");
    let numb = [17,3,25,9,35];
    
    console.log("The list of numbers are:",num);
    console.log("Does the list have even numbers?",numb.some(isEven));
}
numsome();