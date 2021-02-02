class Array {
  
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Get the element from the given index
  // O(1)
  get (index) {
    return this.data[index];
  }

  // Add an element to the last
  // O(1)
  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  // Remove the last element
  // O(1)
  pop() {
    var lastItem = this.data[this.length - 1];

    // Delete the last element from the array
    delete this.data[this.length - 1];

    this.length--;
    return lastItem;  
  }

  // Add an element to the specified index - first, middle, etc
  // This should shift all the right side elements to move 1 position right
  // O(n)
  add(index, item) {
    this.shiftElementsToRight(index); 
    this.data[index] = item;
    this.length++;  
  }

  // Remove the element from the given index
  // This should shift all the element from the given index to a position left
  // O(n)
  remove(index) {
    this.shiftElementsToLeft(index);
   }

  shiftElementsToRight(index) {
      for (let i = this.length; i > index ; i--) {
        this.data[i] = this.data[i-1]; 
    }
  }

  shiftElementsToLeft(index) {
    for (let i = index; i < this.length - 1 ; i++) {
        this.data[i] = this.data[i + 1]; 
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

var array1 = new Array();
array1.push("hello");
array1.push("nat");
array1.push("world");
//console.log(array1);

//var last = array1.pop();
//console.log(last);

//var value = array1.get(0);
//console.log(value);

console.log(array1);
array1.add(1, "!");
console.log(array1);

array1.remove(1);
console.log(array1);