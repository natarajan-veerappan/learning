module.exports = () => {

  console.log('Triggering linear search')
  var array = ['how', 'are', 'you?']
  console.log(array.indexOf('are'))
  console.log(array.indexOf('aree'))

  var value = array.findIndex(function(item) {
    return item === 'you?'
  })
  console.log(value)

  console.log('\nTriggering binary search')
  var binaryArray = [5,12,25,48,57]

  function binarySearch(array,key,start,end) {
    //base case
    if(start > end) {
      return -1
    }
    var mid = Math.floor((start+end)/2)
    if (array[mid] == key) {
      return mid
    } else if (key < array[mid]) {
      return binarySearch(array,key,0,mid)
    } else if (key > array[mid]) {
      return binarySearch(array,key,mid+1,end)
    }
  }

  var length = binaryArray.length-1
  var output = binarySearch(binaryArray,48,0,length)
  console.log(output)
  var output = binarySearch(binaryArray,78,0,length)
  console.log(output)

};