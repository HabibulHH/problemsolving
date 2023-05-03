function firstDuplicate(a){
   for (let idx = 0; idx < a.length; idx++) {
        if(a[Math.abs(a[idx])-1]<0){
            return Math.abs(a[idx]);
        }else{
            let Vi = a[Math.abs(a[idx])-1];
            a[Math.abs(a[idx])-1] = -a[Math.abs(a[idx])-1];
        }
    }
    return -1;
}
firstDuplicate([2,1,3,5,3,2]);
