function matchval(){
    let str = 'It is indeed a Good day'
    
    console.log('The input string is:', str);
    console.log('The match value of "i" in the string?', str.match(/i/gi));
    console.log('The match value of "good" in the string?', str.match(/good/i));
    }
    matchval();