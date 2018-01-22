// check for palindrome
// take a string 
// split the string 
// reverse the string
// join them together
// if the strings are equal to each other then yes they are a palindrome

function isPalindrome(str) {
    let reverseString = str.split('').reverse().join('');

    if (reverseString === str) {
        return console.log('this is a palindrome');
    } else {
        return console.log('this is not a palindrome');
    }
}

isPalindrome('bab');