function maxSumSub(arr,windowSize){
    let windowSum = arr[0]+arr[1]+arr[2];
   // let maxArray = [arr[0],arr[1],arr[2]];
    for(let index = 3; index<arr.length;index++){
       let currSum = windowSum + arr[index]- arr[index-windowSize];
       console.log(currSum,'curr');
       if(currSum>windowSum) { 
       // console.log("here");
        windowSum = currSum;  
       }
    }
  //  console.log(maxArray);
    return windowSum;
}

let result = maxSumSub([10,2,3,4,5],3);
console.log(result);