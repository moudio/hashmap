class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.buckets[index]) {
      const currentBucket = this.buckets[index];
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          currentBucket[i][0] = value;
          return true;
        }
      }
      currentBucket.push([key, value]);
    } else {
      this.buckets[index] = [[key, value]];
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let index = 0; index < this.buckets[i].length; index++) {
        const currentPair = this.buckets[index][i];
        if (currentPair[0] == key) return currentPair[1];
      }
    }
    return null;
  }
  has(key) {
    const index = this.hash(key);
    if(!this.currentBucket[index]) return null;
     for (let index = 0; index < this.buckets[i].length; index++) {
        const currentPair = this.buckets[index][i];
        if (currentPair[0] == key) return true;
    }
    return false;
      
}


  remove(key) {
    const index = this.hash(key);
    if (this.has(key)) {
      const currentBucket = this.buckets[index];
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          currentBucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
  length() {
    let totalLength = 0;
    for (let index = 0; index < this.buckets.length; index++) {
      const element = this.buckets[index];
      if (element) {
        totalLength += element.length;
      }
      
    }
    return totalLength
  }
  clear() {
    this.buckets = this.buckets.map((item) => null);
  }

  keys(){
    const keys = [];
    for (let index = 0; index < this.buckets.length; index++) {
      const element = this.buckets[index];
      if (element) {
        for (let i = 0; i < element.length; i++) {
          keys.push(element[i][0]);
        }
      }
    }
    return keys
  }
  values(){
    const values = [];
    for (let index = 0; index < this.buckets.length; index++) {
      const element = this.buckets[index];
      if (element) {
        for (let i = 0; i < element.length; i++) {
          values.push(element[i][1]);
        }
      }
    }
    return values
  }

  entries(){
    const entries = [];
    for (let index = 0; index < this.buckets.length; index++) {
      const element = this.buckets[index];
      if (element) {
        for (let i = 0; i < element.length; i++) {
          entries.push(element[i]);
        }
      }
    }
    return entries
  }
}

const myMap = new HashMap();
myMap.set("name", "Mo");
console.log(myMap);
