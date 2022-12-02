module.exports = () => {

  console.log('\nTriggering hashtable.js')

  class HashTable {

    constructor(size) {
      this.data = new Array(size)  
    }

    _hash(key) {
      let hash = 0;
      for (let i=0;i<key.length;i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
      let address = this._hash(key)
      if(!this.data[address]) {
        this.data[address] = []
        this.data[address].push(new Array(key, value))
      } else {
        // Replace the old value if key already exists
        let keyFound = false;
        let bucket = this.data[address];
        for (let i=0;i<bucket.length;i++) {
           if (bucket[i][0] === key) {
             bucket[i][1] = value
             keyFound = true;
          }
        }
        if (!keyFound) {
          this.data[address].push(new Array(key, value))
        }
      }
    }

    get(key) {
      let address = this._hash(key)
      let bucket = this.data[address];
      if (bucket) {
        for (let i=0;i<bucket.length;i++) {
           if (bucket[i][0] === key) {
            return bucket[i][1]
          }
        }
      } else {
        return undefined
      }
    }

  }


  var myHashTable = new HashTable(50)
  console.log('\nhow hash function works')
  console.log(myHashTable._hash('Hello World'))

  console.log('\nPush elements')
  myHashTable.set("apples", 10);
  myHashTable.set("apples", 15);
  myHashTable.set("oranges", 25);
  console.log(myHashTable)
   
  console.log('\nGet elements')
  var value = myHashTable.get("apples");
  console.log(value)
};