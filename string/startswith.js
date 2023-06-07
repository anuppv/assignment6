function start(){
    let str = 'It is indeed a Good day'
    console.log('The input string is:', str);

    console.log('Does the value "a" start in the string?', str.startsWith('a'));
    console.log('Does the value "a" present in the string?', str.startsWith('a',13));
}
start();