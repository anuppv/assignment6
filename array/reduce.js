function sub(total,val){
    return total-val;
}
function addtn(sum,value){
    return sum+value;
}

function numreduce(item) {
    console.log("First example");
    let num = [86,3,25,9,36];    
    console.log("The list of numbers are:",num);
    console.log("The difference of the list is:",num.reduce(sub));

    console.log("Second example");
    let numb = [27,43,35,16,6];    
    console.log("The list of numbers are:",numb);
    console.log("The sum of the list is:",numb.reduce(addtn));
}
numreduce();