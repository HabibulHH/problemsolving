function zeroSum(array) {
    let set = new Set();
    set.add(0);
    let currentSum = 0;

    for (let index = 0; index < array.length; index++) {
      currentSum += array[index]
      if(set.has(currentSum)){
        return true;
      }  
      set.add(currentSum);
    }
    return false;
}

let res = zeroSum([4,-3,2,4,-1,-5,7])
console.log(res);