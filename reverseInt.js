function reverseInt(num){
    //Split number into digits
    let digits = num.toString().split('');

    //reverse the digits
    let revdigits = digits.reverse().join('');

    //Convert string of digits back into a number and keep the sign
    revdigits = parseInt(revdigits) * Math.sign(num);

    return revdigits;
    

}

reverseInt(-23);