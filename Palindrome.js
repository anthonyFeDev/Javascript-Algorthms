//Solution 1

// function checkPalindrome(inputString) {
//     var reversedString = inputString.split('').reverse().join('');
    
//     console.log(reversedString);

//     if (inputString == reversedString){
//         return true;
//     } else {
//         return false;
//     }
// }

//[Improved] Solution 1
// function checkPalindrome(str){
//     let reverse = str.split('').reverse().join('');

//     return str === reverse;
// }

//Solution 2
//Utilize the every array helper
function checkPalindrome(str){
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

checkPalindrome("abac");
