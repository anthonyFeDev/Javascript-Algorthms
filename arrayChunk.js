// Solution 1
function chunk(array, size) {
    // create a new empty array
    const chunked = [];

    for(let element of array) {
        const last = chunked[chunked.length - 1];

        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

chunk();

// Solution 2
function chunk(array, size) {
    const chunked = [];
    let index = 0; 

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}