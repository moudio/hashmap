class HashMap {
    constructor(){
        this.loadFactor = 1;
        this.capacity = 16;
        this.buckets = [];
    }

  hash(key) {
   let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }

   return hashCode;
 }


 set(key, value){

 }

}