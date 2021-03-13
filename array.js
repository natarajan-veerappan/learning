module.exports = () => {

  console.log('Triggering array.js')

  class Array {
    
    constructor() {
      this.length = 0;
      this.data = {};
    }

    // Add the element to the last - O(1)
    push(element) {
      this.data[this.length] = element;
      this.length++;
    }

    // Remove the element from last - O(1)
    pop() {
      var lastItem = this.data[this.length - 1];
      // Delete the last element from the array
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;  
    }

    // Get the element from the given index - O(1)
    get (index) {
      return this.data[index];
    }

    // Add an element to the specified index - first, middle, etc.
    // This should shift all the elements to move 1 position right - O(n)
    add(index, item) {
      this.shiftElementsToRight(index); 
      this.data[index] = item;
      this.length++;  
    }

    shiftElementsToRight(index) {
        for (let i = this.length; i > index ; i--) {
          this.data[i] = this.data[i-1]; 
      }
    }

    // Remove the element from the given index
    // This should shift all the elements to move 1 position left - O(n)
    remove(index) {
      this.shiftElementsToLeft(index);
      delete this.data[this.length - 1];
      this.length--;
    }

    shiftElementsToLeft(index) {
      for (let i = index; i < this.length - 1 ; i++) {
          this.data[i] = this.data[i + 1]; 
      }
    }
  }

  var myArray = new Array();
  console.log("\nInitial Array : ");
  console.log(myArray);

  console.log("\nArray Push : ");
  myArray.push("hello");
  myArray.push("good");
  myArray.push("morning");
  console.log(myArray);

  console.log("\nArray Pop : ");
  console.log(myArray.pop())

  console.log("\nValue at index 0 : ");
  console.log(myArray.get(0))

  console.log("\nRemove from index 0 : ");
  myArray.remove(0);
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
  console.log("\nMerged Array : ");
  console.log(mergeResult);
  
};