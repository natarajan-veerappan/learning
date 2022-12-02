module.exports = () => {

  console.log('Triggering queue.js')

  class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }

  class Queue {
    constructor() {
      this.first = null
      this.last = null
      this.length = 0
    }

    enqueue(value) {
      const newNode = new Node(value)
      if(this.length == 0) {
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      this.length++
    }

    dequeue() {
      if(this.length == 0) {
        return
      }
      const toRemove = this.first;
      this.first = this.first.next
      this.length--
    }

    printValues() {
      const arr = []

    }

  }

  const queue = new Queue
  queue.enqueue(5)
  queue.enqueue(15)
  queue.enqueue(20)
  console.log(queue)

  queue.dequeue()
  console.log(queue)

};  