module.exports = () => {

  console.log('Triggering binary search tree.js')

  class Node {
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }

  class BST {
    constructor() {
      this.root = null
    }

    insert(value) {
      const newNode = new Node(value)
      if (this.root == null) {
        this.root = newNode
      } else {
        let currentNode = this.root
        while(true) { // need to break this loop
          if (value < currentNode.value) {
              if(!currentNode.left) {
                currentNode.left = newNode
                return this
              }
              currentNode = currentNode.left
            } else {
              if(!currentNode.right) {
                currentNode.right = newNode
                return this
              }
              currentNode = currentNode.right
            }

        }
       }
    }

    lookup (value) {
      if(!this.root) {
        return undefined
      }
      let currentNode = this.root
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          currentNode = currentNode.right
        } else if (value == currentNode.value) {
          return currentNode
        }
      }
      return undefined
    }

  }

  const bst = new BST()
  bst.insert(5)
  bst.insert(4)
  bst.insert(9)
  bst.insert(10)

  console.log(bst)
  console.log(JSON.stringify(traverse(bst.root)))

  const value = bst.lookup(14)
  console.log(value)

  function traverse(node) {
    const tree = {value : node.value}
    tree.left = node.left == null ? null : traverse(node.left)
    tree.right = node.right == null ? null : traverse(node.right)
    return tree
  }

};  