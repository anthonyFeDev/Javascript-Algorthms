// function reverseString(str){
    
//     var splitString = str.split("");
//     var stringArray = [];
//     stringArray = splitString;

//     var newString = stringArray.reverse().join("");


//     return newString;
// }

function reverse(str){
    
    return str.split('').reverse().join('');
}

console.log(reverse('heythere'));