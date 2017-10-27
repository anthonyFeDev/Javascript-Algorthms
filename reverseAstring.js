function reverseString(str){
    
    var splitString = str.split("");
    var stringArray = [];
    stringArray = splitString;

    var newString = stringArray.reverse().join("");


    return newString;
}

reverseString("hello");