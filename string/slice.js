function char(){
    let str = 'It is indeed a Good day';

    console.log('The input string is:', str);
    p = str.slice(3,7);
    q = str.slice(9);
    console.log('Output string for slice method:',p);
    console.log('Output string for another slice method:',q);
}
char();