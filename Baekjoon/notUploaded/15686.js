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
let [N,M] = reader.readList();
let board = [];
let pos = [0,[],[]];
for (let i=0; i<N; i++)
    board.push(reader.readList());
for (let i=0; i<N; i++){
    for (let j=0; j<N; j++){
        if (board[i][j] != 0)
            pos[board[i][j]].push([i,j]);
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
let dist = [];
for (let [a,b] of pos[1]){
    let temp = [];
    for (let [c,d] of pos[2])
        temp.push(Math.abs(a-c)+Math.abs(b-d));
    dist.push(temp);
}
let cases = getCombinationIndex(pos[2].length,M);
let answer = cases.reduce((a,idxs)=>{
    let res = 0;
    for (let e of dist){
        let mini = Infinity;
        for (let i of idxs){
            if (e[i] < mini)
                mini = e[i];
        }
        res += mini;
    }
    return a > res ? res : a;
},Infinity);
console.log(answer)