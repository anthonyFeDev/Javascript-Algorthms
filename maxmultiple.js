function maxMultiple(divisor, bound) {
    let remainder = bound % divisor;

    let maxInt = bound - remainder;

    return maxInt
}

console.log(maxMultiple(3, 10));
