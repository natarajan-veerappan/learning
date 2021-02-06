// *******************************************
// creating array data structure
// *******************************************
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
    this.length--;
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
    
  }
}

var myArray = new Array();
myArray.push("hello");
myArray.push("nat");
myArray.push("world");

myArray.remove(1);
//console.log(myArray);

// *******************************************
// reverse a string
// *******************************************
function reverse(str) {
  if (!str || str.length < 2) {
    return 'nothing to reverse';
  }

  var reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }

  return reversedStr.join('');
}

let value = reverse("hello world");
console.log(value);
