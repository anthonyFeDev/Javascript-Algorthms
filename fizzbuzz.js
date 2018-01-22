
function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        // is number a multiple of 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {   
            //is the num a multiple of 3
            console.log('fizz');
        } else if (1 % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(4);