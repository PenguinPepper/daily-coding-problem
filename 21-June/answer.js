
/**
 * 
 * @param {root}: root of the tree
 * @returns {string}: serialized string
 */
function serialization(root) {
    let string = "" // to store the serialized string
    if (root == null) return; // if root is null return
    string += root.data + ","; // add the data of the root(current node) to the string
    string += serialization(root.left); // calls serialization on the left child of the current node and add the result to the string as a type of traversal method
    string += serialization(root.right); // calls serialization on the right child of the current node and add the result to the string as a type of traversal method
    return string; // return string which has the serialized tree
}

/**
 * 
 * @param {string}: serialized string
 * @returns {Node}: root of the tree
 */
function deserialization(string) {
    let arr = string.split(","); // split the string by comma to get the array of nodes
    let index = 0; // index to keep track of the current position in the array
    return helper(arr); // call the helper function with the array as an argument
    function helper(arr) {
        if (index >= arr.length || arr[index] == "null") return null; // if the index is greater than the length of the array or the current node is null return null
        let node = new Node(arr[index]); // create a new node with the current node data
        index++; // increment the index to move to the next element in the array
        node.left = helper(arr); // 
        index++;
        node.right = helper(arr);
        return node;
    }
}

module.exports = { serialization, deserialization };