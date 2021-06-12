module.exports = () => {

  console.log('Triggering bubble sort')
  
  function bubbleSort(array) {
    const length = array.length
    for(let i=0; i<length-1; i++) {
      for (let j=0; j<length-1; j++) {
        if (array[j] > array[j+1]) {
          let temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
        }
      }
    }
  }

  const array1 = [20,15,47,6,3,18]
  bubbleSort(array1)
  console.log(array1)

  console.log('\nTriggering selection sort')

  function selectionSort(array) {
    const length = array.length
    for (let i=0; i<length-1; i++) {
      let minIndex = i
      for (let j=i+1; j<length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j
        }
      }
      let temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
    }
  }

  const array2 = [20,15,47,6,3,18]
  selectionSort(array2)
  console.log(array2)

  console.log('\nTriggering insertion sort')

  function insertionSort(array) {
    const length = array.length
    for (let i=1; i<length; i++) {
      let current = array[i]
      let previousIndex = i-1
      while (previousIndex >= 0 
        && array[previousIndex] > current) {
          array[previousIndex + 1] = array[previousIndex]
          previousIndex = previousIndex - 1
      }
      array[previousIndex + 1] = current
    }
  }

  const array3 = [15,4,6,3,18,2]
  insertionSort(array3)
  console.log(array3)

  console.log('\nTriggering merge sort')

  function mergeSort(array) {
    // base case of recursion
    if (array.length === 1) {
      return array
    }
    const length = array.length
    const middle = Math.floor(length/2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    
    //console.log(left)
    //console.log(right)
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge (left, right) {
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while (left && leftIndex < left.length
      && right && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex])
          leftIndex ++
        } else {
          result.push(right[rightIndex])
          rightIndex ++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }

  const array4 = [15,4,6,3,18,2,5]
  const result = mergeSort(array4)
  console.log(result)
};