// // Print all subArray of a given array 
// let arr=[1,2,3];
// for (let index = 0; index <arr.length; index++) {
//     // find the length
//     for (let j = index; j < arr.length; j++) {
//         let lrr = [];
//        for (let k = index; k <=j; k++) {
//          lrr.push(arr[k])
//         }
//         console.log(lrr);
//     }
    
// }



function  findAllSubArray(data){

    for (let elementPickedAt = 0; elementPickedAt < data.length; elementPickedAt++) { 
        for (let subArrMaxLength = elementPickedAt; subArrMaxLength < data.length; subArrMaxLength++) {
            let subArray = [];
            for (let index = elementPickedAt; index <= subArrMaxLength; index++) {
               subArray.push(data[index]);
            }
            console.log(subArray);
        }
    }
}
//findAllSubArray([1,2,3]);


// function  findAllSubArraySumMax(data){

//     let max = Number.NEGATIVE_INFINITY;
//     for (let elementPickedAt = 0; elementPickedAt < data.length; elementPickedAt++) { 
//         for (let subArrMaxLength = elementPickedAt; subArrMaxLength < data.length; subArrMaxLength++) {
//             let currentSum = 0;
//             for (let index = elementPickedAt; index <= subArrMaxLength; index++) {
//                currentSum +=data[index];
//             }
//             max = max<currentSum?currentSum:max;
//         }
//     }
//     return max;
// }
// let maximumSum = findAllSubArraySumMax([-2,1,-3,4,-1,2,1,-5,4]);
// console.log(maximumSum);


// function  findAllSubArrayNSQ(data){
//     let max = Number.NEGATIVE_INFINITY;
//    for(let  i = 0;i< data.length;i++){
//     let subArray = [];
//     let currentSum = 0;
//     for(let j = i;j<data.length;j++){
//         currentSum += data[j]
//         max = currentSum>max?currentSum:max;
//     }
//     console.log(subArray);
//    }
//    console.log(max);
// }
// findAllSubArrayNSQ([-2,1,-3,4,-1,2,1,-5,4])

// Single pass theory for subarray introduction
// function  maximumProductSubArray(data){
//     let max = Number.NEGATIVE_INFINITY;
//    for(let  i = 0;i< data.length;i++){
//     let subArray = [];
//     let currentSum = 0;
//     for(let j = i;j<data.length;j++){
//         currentSum += data[j]
//         max = currentSum>max?currentSum:max;
//     }
//     console.log(subArray);
//    }
//    console.log(max);
// }
// findAllSubArrayNSQ([-2,1,-3,4,-1,2,1,-5,4])


function findMaximumProductSubarray(data){
    let max = Number.NEGATIVE_INFINITY;
    let prefix = 1;
    let sufix = 1;
    for(let i = 0 ;i<data.length ; i++){
        if  ( prefix ==0 ) prefix =1;
        if(sufix == 0) sufix =1;
        prefix = prefix * data[i];
        sufix = sufix * data[data.length -i -1];
        let currentMax =  prefix>sufix?prefix:sufix;
        max = currentMax>max?currentMax:max;
    }
    return max;
}

let result = findMaximumProductSubarray([2,3,-2,4]);
console.log(result);

// https://www.youtube.com/watch?v=hnswaLJvr6g&t=962s&ab_channel=takeUforward explanation
// leet code https://leetcode.com/problems/maximum-product-subarray/ 152