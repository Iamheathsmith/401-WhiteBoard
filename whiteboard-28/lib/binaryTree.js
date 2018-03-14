'use strict';


class BinaryTree{
  constructor(root=null) {
    this.root = root;
    this.inOrd = [];

  }

  inOrderTraversal() {
    if(!this.root) return null;
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(root) {
    if(root === null) return null;
    this._inOrderTraversal(root.left);
    this.inOrd.push(root.value);
    this. _inOrderTraversal(root.right);
  }

}

module.exports = BinaryTree;
 