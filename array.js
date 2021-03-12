module.exports = () => {

  console.log('Triggering array.js')

  class Array {
    
    constructor() {
      this.length = 0;
      this.data = {};
    }

    // Get the element from the given index - O(1)
    get (index) {
      return this.data[index];
    }

    // Add an element to the last - O(1)
    push(element) {
      this.data[this.length] = element;
      this.length++;
    }

    // Remove the last element - O(1)
    pop() {
      var lastItem = this.data[this.length - 1];

      // Delete the last element from the array
      delete this.data[this.length - 1];

      this.length--;
      return lastItem;  
    }

    // Add an element to the specified index - first, middle, etc
    // This should shift all the right side elements to move 1 position right - O(n)
    add(index, item) {
      this.shiftElementsToRight(index); 
      this.data[index] = item;
      this.length++;  
    }

    // Remove the element from the given index
    // This should shift all the element from the given index to a position left - O(n)
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
  console.log(myArray);

  myArray.remove(1);
  console.log(myArray);

  // Merge sorted array
  function mergeSortedArray(arr1, arr2) {
    // sanity checks
    if (!arr1 || arr1.length === 0) {
      return arr2;
    } else if (!arr2 || arr2.length === 0) {
      return arr1;
    }

    const mergedArray = [];
    let i = j = 0; 
    let arr1Item = arr1[i];
    let arr2Item = arr2[j];
  
    while(arr1Item || arr2Item) {
      if(!arr2Item || arr1Item < arr2Item) {
        mergedArray.push(arr1Item);
        i++;
        arr1Item = arr1[i];
      } else {
        mergedArray.push(arr2Item);
        j++;   
        arr2Item = arr2[j];
      }
    }
    return mergedArray;
  }

  var array1 = [1,3,5,7];
  var array2 = [2,4,6,8]
  var mergeResult = mergeSortedArray(array1, array2);
  console.log(mergeResult);

  
};