module.exports = () => {

  console.log('Triggering linkedlist.js')

  class LinkedList {
    constructor(value) {
      this.head = {
        value : value,
        next : null
      }
      this.tail = this.head
      this.length = 1
    }
 
    append(value) {
      const newNode = {
        value : value,
        next : null
      }
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }

    prepend(value) {
      const newNode = {
        value : value,
        next : null
      }
      newNode.next = this.head
      this.head = newNode
      this.length++
    }

    printValues() {
      const array = []
      let currentNode = this.head
      while (currentNode !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      console.log("values are " + array)
    }

    insert (index, value) {
      //basic validation
      if(index == 0) { // prepend
        return this.prepend(value)
      } else if (index >= this.length) { //append
        return this.append(value)
      }

      const newNode = {
        value : value,
        next : null
      }

      let previousNode = this.traverseToIndex(index -1)
      let nextNode = previousNode.next

      newNode.next = nextNode
      previousNode.next = newNode
      this.length++

    }

    traverseToIndex(index) {
      let currentNode = this.head
      let counter = 0
      while (counter != index) {
        currentNode = currentNode.next
        counter++      
      }
      return currentNode;
    }

    remove(index) {
      let previousNode = this.traverseToIndex(index-1)
      let nextNode = previousNode.next.next // do null check
      previousNode.next = nextNode
      this.length--
    }

    reverse () {
      let first = this.head
      let second = first.next
      let tail = this.head

      while (second) {
        const temp = second.next
        second.next = first
        first = second
        second = temp
      }
      this.head.next = null
      this.head = first
    }
   }

  const list = new LinkedList(15)
  list.append(20)
  list.prepend(5)
  console.log(list)
  list.printValues()

  list.insert(2,56)
  list.printValues()

  list.remove(1)
  list.printValues()

  list.reverse();
  list.printValues();

};