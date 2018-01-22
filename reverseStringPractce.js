// Reverse a string
// Take a string
// split the string
// reverse the string
// then join the string

function reverseString(str) { 
    let newString = str.split('').reverse().join('')
    
    console.log(newString);
    return newString;    
}

reverseString('hello mane');