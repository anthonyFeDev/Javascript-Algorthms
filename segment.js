// Break an existing array into subarrays with a size of x
// Once the array is split up into smaller pieces, sort each sub array and
// find the smallest integer that appears most often
//
function segment(x, arr) {
    // set up an empty array
    let subArray = [];
    
    // pop a random element from the array then push to new array
    for (let i = 0; i< x; i++) {
        subArray.push(arr.pop(Math.floor(Math.random() *i)));
        // Output: 2, 5, 4
    }

    // Sort the subArray
    subArray.sort((a, b) => a - b);
    // Output: 2, 4, 5
    
    // Find the smallest integer in the array
    let minNumber = Math.min(...subArray);
    // Output: 2
    
    return subArray;
}

console.log(segment(3, [2,3,4,5,2]));