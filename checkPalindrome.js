function checkPalindrome(inputString) {
    var reversedString = inputString.split('').reverse().join('');
    
    console.log(reversedString);

    if (inputString == reversedString){
        return true;
    } else {
        return false;
    }
}

checkPalindrome("abac");
