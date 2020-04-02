/* class BST {
  constructor(value) {
    this.value = value;
    this.leftLeaf = null;
    this.rightLeaf = null;
  }

  insert(...values) {
    values.forEach(value => {
      if (value <= this.value) {
        if (!this.leftLeaf) this.leftLeaf = new BST(value);
        else this.leftLeaf.insert(value);
      } else if (value > this.value) {
        if (!this.rightLeaf) this.rightLeaf = new BST(value);
        else this.rightLeaf.insert(value);
      }
    });
  }

  contains(searchValue) {
    if (searchValue === this.value) {
      return true;
    } else if (searchValue < this.value) {
      if (!this.leftLeaf) return false;
      return this.leftLeaf.contains(searchValue);
    } else if (searchValue > this.value) {
      if (!this.rightLeft) return false;
      return this.rightLeaf.contains(searchValue);
    }
  }

  depthFirstTraversal(iteratorFunc, order) {
    if (order === "pre-order") iteratorFunc(this.value);
    if (this.leftLeaf) this.leftLeaf.depthFirstTraversal(iteratorFunc, order);
    if (order === "in-order") iteratorFunc(this.value);
    if (this.rightLeaf) this.rightLeaf.depthFirstTraversal(iteratorFunc, order);
    if (order === "post-order") iteratorFunc(this.value);
  }

  breadthFirstTraversal(iteratorFunc) {
    const queue = [this];

    while (queue.length) {
      const treeNode = queue.shift();
      iteratorFunc(treeNode);
      if (treeNode.leftLeaf) queue.push(treeNode.leftLeaf);
      if (treeNode.rightLeaf) queue.push(treeNode.rightLeaf);
    }
  }

  getMinVal() {
    if (this.leftLeaf) return this.leftLeaf.getMinVal();
    else return this.value;
  }

  getMaxVal() {
    if (this.rightLeaf) return this.rightLeaf.getMaxVal();
    else return this.value;
  }
}
 */
