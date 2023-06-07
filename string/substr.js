function char(){
    let str = 'It is indeed a Good day';

    console.log('The input string is:', str);

    p = str.substr(3,7);
    q = str.substr(5);
    console.log('Output string for substr method:',p);
    console.log('Output string for another substr method:',q);
}
char();