function findMax(arr,k){
    dq = [];
    for(let i = 0;i<arr.length ; i++ ){
        if(dq.length!=0 && i-k==dq[0] ){
            dq.shift();
        }
        while(dq.length!=0 && arr[dq[dq.length-1]]<arr[i]){
            dq.pop();
        }
        dq.push(i);
        if(i>= k-1) {
            console.log(arr[dq[0]]) 
        };
    }
}

findMax([1,3,-1,-3,5,3,6,7],3)