function upperBound(start, end, condi){
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (condi(mid))
            start = mid+1;
        else
            end = mid;
    }
    return end;
}
let arr = [1,1,1,1,3,5,5,6,7,8,9];
console.log(upperBound(0,arr.length,(n)=>{
    return n >= 5;
}));