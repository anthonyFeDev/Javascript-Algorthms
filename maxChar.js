
function maxChar(str){
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str){
        // if an entry exist increment the value by 1
        if(charMap[char]){
            charMap[char]++;
        } else {
            // if entry doesnt exist then set char map = 1
            charMap[char] = 1;
        }
    }
    // loop through the character map
    // if we find a character that has the most uses
    // set max to that new value set char = to that new value
    for (let char in charMap) {
        if (charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    console.log(charMap);
}

maxChar("Jelly Bears");

/*
Take a string
create an empty object

create a for loop:
 if we havent seen this character before set the key (character) to a value of 1
 but if we have seen it before then we will find the key and increment its value by 1 

*/