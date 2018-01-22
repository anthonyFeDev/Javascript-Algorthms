function candies(n, m) {
    // divide the pieces of candy into the number of children
    // amount of candy per child equals candy  - remainder
    let total = m % n;

    total = m - total;

    return total;
    
}
 console.log(candies(3, 20));