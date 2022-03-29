const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(){
        return this.readLine().split(" ").map(e=>parseInt(e));
    }
}
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
function solution(vecSet){
    let res = Infinity;
    const size = vecSet.length;
    let base = [0,0];
    for (let [a,b] of vecSet){
        base[0] += a;
        base[1] += b;
    }
    let reverseSet = getCombinationIndex(size, size/2);
    for (let list of reverseSet){
        let [x,y] = base;
        for (let idx of list){
            x -= vecSet[idx][0]*2;
            y -= vecSet[idx][1]*2;
        }
        res = Math.min(res, Math.sqrt(x**2+y**2));
    }
    return res;
}
const T = parseInt(reader.readLine());
for (let i=0; i < T; i++){
    const N = parseInt(reader.readLine());
    let vecSet = [];
    for (let j=0;j<N; j++)
        vecSet.push(reader.readList());
    console.log(solution(vecSet));
}