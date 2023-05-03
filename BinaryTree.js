class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(node) {
        if (this.root === null) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (node.value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return;
                } else {
                    current = current.left

                }
            } else if (node.value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    return;
                } else {
                    current = current.right;
                }
            }
        }
    }
    visitLeft(node, acc){
    if(node === null) return acc;
    acc = node.value + acc;
    return this.visitLeft(node.left,acc);
    }

    preOrderTraverse(node){
     if(node == null) {
        return;
     };
     console.log(node.value);
     this.preOrderTraverse(node.left);
     this.preOrderTraverse(node.right);
    }
}

let bst = new BST();
bst.insert(new Node(23));
bst.insert(new Node(20));
bst.insert(new Node(22));
bst.insert(new Node(10));
bst.insert(new Node(11));
bst.insert(new Node(111));
bst.insert(new Node(112));
bst.preOrderTraverse(bst.root);