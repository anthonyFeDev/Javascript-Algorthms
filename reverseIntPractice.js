function reverseInt(int) {
    
    let intArray = int.toString().split('');
    let revArray = intArray.reverse().join('');

    revArray = parseInt(revArray) * Math.sign(int);
    
    console.log(revArray);
    return revArray;
}

// Take the the ints 
// turn them into a string
// split the string
// reverse the order
// turn them back into an int (with the correct sign)


reverseInt(-23);

/*
 To reverse a number. you have to take the integer, convert to a string
 and split the string. After splitting you have to reverse the array of digits
 and then join them together. After joining, you have to parse the digits to convert them
 into integers. After parsing, take the sign of the original number and multply by the new
 integer.
*/