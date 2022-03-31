function combinationTravel(arr, size , callBack){
    if (Number.isInteger(arr)){
        arr = Array.from({length:arr}, (_,i)=>i);
    }
    function traveler(cur){
        if (cur.length == size){
            cur = cur.map(e=>arr[e]);
            callBack(cur);
            return;
        }
        let start = cur.length == 0 ? 0 : cur[cur.length-1]+1; 
        for (let i = start; i<=arr.length-(size-cur.length); i++){
            cur.push(i);
            traveler(cur);
            cur.pop(i);
        }
    }
    traveler([]);
}
console.log(combinationTravel(5, 2 ,(e)=>console.log(e)));
console.log(combinationTravel([1,2,3,4], 1 ,(e)=>console.log(e)));