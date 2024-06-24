/**
 * Looking at one number in the array at a time and checking to see
 * if it plus any other number in the array = k 
 */
function sumInArray(array, k) {
 for (let i = 0; i < array.length; i++){
    for (let j = 1; j < array.length; j++) {
        if (array[i] + array[j] === k){
            return true;
        }
    }
 }
 return false;
}

module.exports = sumInArray;