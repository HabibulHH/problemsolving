// Total intuition is when we find one max , it can be used as a max for consequitive windoex as well 
// check if all things are at boundary or not 
// now check if the current number is bigger than already existing value. if yes remove all smaller values 
// window q untill that is not empty
// push to the system 
// if i > 3 push it to array 
// for each iteration there will be one max vlaue 


function fn(array,k){
    let dq = [];
    let ans = [];
    for (let index = 0; index < array.length; index++) {
       if(dq.length != 0 && i-k == dq[dq.length-1]) dq.shift();
       while(dq.length!=0 && array[i]>dq[dq.length-1]){
        dq.pop();
       }
       dq.push(i);
       if(i>=k){
        ans.push(i)
       }
    }
}