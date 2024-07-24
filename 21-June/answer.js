// The goal is to create functions serialize(root) and deserialize(s) that perform these operations (deserialization and serialization) on a binary tree.
// to serialiase we can use preorder traversal

function serialization(root){
    let string = ""
    if (root == null) return;
    string += root.data + ",";
    string += serialization(root.left);
    string += serialization(root.right);
    return string;
}

function deserialization(s){
    let arr = s.split(",");
    let index = 0;
    return helper(arr);
    function helper(arr){
        if (index >= arr.length || arr[index] == "null") return null;
        let node = new Node(arr[index]);
        index++;
        node.left = helper(arr);
        index++;
        node.right = helper(arr);
        return node;
    }
}