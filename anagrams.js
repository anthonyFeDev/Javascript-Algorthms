// Solution 1
function anagrams(stringA, stringB){
   //make character maps. dont want to build 2 for loops
   //write a helper function 
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    //find number of object keys and compare the two
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {

    }

    // iterate over one char map
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

//Solution 2
function anagrams() {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString() {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}