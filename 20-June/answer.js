function productArray(arr) {
    let product = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            }
            product *= arr[j];
        }
        result.push(product);
        product = 1;
    }
    return result;
}

module.exports = productArray;

console.log(productArray([9, -2, -3, -6, 1])); // [36, -162, -108, -54, 324]
