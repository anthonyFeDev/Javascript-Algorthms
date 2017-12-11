// Solution 1

// function reverse(str){
    
//     return str.split('').reverse().join('');
// }

//Solution 2
// function reverse(str){
//     // Create and empty string called reverse
//     let reverse = "";

//     //For every character, add it to the start of reverse
//     for (let character of str){
//         reverse = character + reverse;
//     }

//     // Return reverse
//     return reverse;
// }


//Solution 3
function reverse(str){
    return str.split('').reduce((reverse, character) => {
        return character + reverse;
    }, '');
}

console.log(reverse('heythere'));