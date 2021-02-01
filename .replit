class Array {
  
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  pop() {
    var lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;  
  }

}

var array1 = new Array();
array1.push("hello");

var last = array1.pop();
console.log(last);

console.log(array1);
