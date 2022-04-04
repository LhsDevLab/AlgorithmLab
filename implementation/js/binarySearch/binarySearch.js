function lowerBound(arr, target, keys){
    keys = keys === undefined ? (n)=>arr[n] : keys;
    let [start,end] = [0,arr.length];
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (keys(mid) < target)
            start = mid+1;
        else
            end = mid;
    }
    return end-1;
}
function upperBound(arr, target, keys){
    keys = keys === undefined ? (n)=>arr[n] : keys;
    let [start,end] = [0,arr.length];
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (keys(mid) <= target)
            start = mid+1;
        else
            end = mid;
    }
    return end;
}
function findTarget(arr, target, keys){
    keys = keys === undefined ? (n)=>n : keys;
    let [start,end] = [0,arr.length];
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (target == arr[mid])
            return mid;
        else if (arr[mid] < target)
            start = mid+1;
        else
            end = mid;
    }
    return false;
}
let arr = [1,1,1,1,3,5,5,6,7,8,9];
console.log(arr);
let temp = [lowerBound(arr , 5), upperBound(arr , 5), findTarget(arr , 5)];
for (let e of temp){
    console.log("i:",e, "v",arr[e]);
}