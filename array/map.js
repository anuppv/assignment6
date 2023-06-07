function nummap() {
    console.log("First example");
    let num = [3,6,9];    
    console.log("The list of numbers are:",num);
    let newnum = num.map((ele)=>{return ele*ele})    
    console.log("The result after map function is:",newnum);

    console.log("Second example");
    let numb = [27,16,6];
    let newnumb = numb.map((ele)=>{return ele*2})   
    console.log("The list of numbers are:",numb);
    console.log("The result after map function is:",newnumb);
}
nummap();