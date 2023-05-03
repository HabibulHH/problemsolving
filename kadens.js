
function kadens(arr){
    let maxSofar = arr[0];
    let maxAtthisPoint = arr[0];
    for(let i =1;i< arr.length;i++){
        maxAtthisPoint = Math.max(maxAtthisPoint+arr[i],arr[i]);
        maxSofar = Math.max(maxAtthisPoint,maxSofar);
    }
    return maxSofar;
}

let ans = kadens([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
console.log(ans);

