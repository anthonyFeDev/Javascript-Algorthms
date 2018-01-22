// Write a function that accepts a string. The function
// should capitalize the first letter of each word in the
// string then return the capitalized string.

// make an empty array
// split the input string by spces to get an array
// for each word in the array
//  uppercase the first letter of the word
//  join the first letter with the rest of the word
//  push the result into words array
// join into a string

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

// Solution 2
// Create an empty string called result
// For each character in the string
// if the character to the left is a space
//  capitalize it and add it to the result
// else 
//  add it to the result
function capitalize() {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}