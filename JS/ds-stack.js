module.exports = () => {

  console.log('Triggering stack.js')

  class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }

  // using linkedlist
  class Stack {
    constructor() {
      this.top = null
      this.bottom = null
      this.length = 0
    }
  
    push(value) {
      const newNode = new Node(value)
      if (this.length == 0) {
        this.top = newNode
        this.bottom = newNode
      } else {
        const temp = this.top
        this.top = newNode
        this.top.next = temp
      }
      this.length++
    }

    pop() {
      if (!this.top) {
        return
      }
      const toRemove = this.top
      this.top = this.top.next
      this.length--
    }

  }

  const stack = new Stack();
  stack.push("google")
  stack.push("yahoo")
  stack.push("bing")
  console.log(stack)

  stack.pop()
  console.log(stack)

  console.log('\nImplementing  stack using array')

  class StackUsingArray {
    constructor() {
      this.data = []
    }

    push(value) {
      this.data.push(value)
    }
  }

  const stack2 = new StackUsingArray();
  stack2.push("hello")
  stack2.push("world")
  console.log(stack2)

}; 