function sumDigits(int){
    let digits = [];
    let total;

    digits = int.toString().split('').map(Number).reduce((a, b) => {
        total = a + b;
        return total;
    }); 
    return total;
  }
sumDigits(23);
