function getCombinationIndex(size, num) {
    let arr = Array.from({length:size-num+1},(_,i)=>[i]);
    if (size < 1)
        return null;
    for (let i=0; i<num-1; i++){
        let next = [];
        for (let e of arr){
            let start = e[e.length-1]+1;
            for (let i=start; i<=size-(num-e.length); i++)
                next.push([...e,i]);
        }
        arr = next;
    }
    return arr;
}
console.log(getCombinationIndex(5,5));
