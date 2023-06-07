function end(){
    let str = 'It is indeed a Good day'
    console.log('The input string is:', str);

    console.log('Does the value "day" end in the string?', str.endsWith('day'));
    console.log('Does the value "indeed" present in the string?', str.endsWith('indeed',12));
}
end();