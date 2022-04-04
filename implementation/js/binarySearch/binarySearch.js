function binSearch(start, end, condi){
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (condi(mid))
            start = mid+1;
        else
            end = mid;
    }
    return end;
}
function lowerBound(arr, target){
    return binSearch(0,arr.length,(i)=>{
        return arr[i] < target;
    })-1;
}
function upperBound(arr, target){
    return binSearch(0,arr.length,(i)=>{
        return arr[i] <= target;
    });
}
function findTarget(arr, target){
    let res = binSearch(0,arr.length,(i)=>{
        return arr[i] < target;
    });
    return arr[res] == target ? res : false;
}
let arr = [1,1,1,1,3,5,5,6,7,8,9];
console.log(arr);
let temp = [lowerBound(arr , 5), upperBound(arr , 5), findTarget(arr , 5)];
for (let e of temp){
    console.log("i:",e, "v",arr[e]);
}