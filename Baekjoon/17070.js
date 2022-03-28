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
let N = parseInt(reader.readLine());
const dirSet = [[0,1],[1,1],[1,0]];
const DP = Array.from({length:N},()=>
    Array.from({length:N}, ()=>[0,0,0]));
DP[0][1][0] = 1;
const room = [];
for (let i=0; i<N; i++)
    room.push(reader.readList());
function move(pos,dir){
    let [a,b] = dirSet[dir];
    return [pos[0]+a,pos[1]+b];
}
function check(pos){
    try{
        if (room[pos[0]][pos[1]] == 0)
            return true;
    }catch(e){}
    return false;
}
function validDir(pos,dir){
    let res = new Set();
    if (check(move(pos,0)))
        res.add(0);
    if (check(move(pos,2)))
        res.add(2);
    if (res.size == 2 && check(move(pos,1)))
        res.add(1);
    if (dir == 0)
        res.delete(2);
    if (dir == 2)
        res.delete(0);
    return res;
}
let queue = [[[0,1],0]];
while(queue.length != 0){
    let [pos,dir] = queue.pop();
    for (let e of validDir(pos,dir)){
        let next = move(pos,e)
        DP[next[0]][next[1]][e] += DP[pos[0]][pos[1]][dir];
        queue.push([next,e]);
    }
}
for(let e of DP){
    console.log(e.map(e=>e.toString()).join(' - '));
}
console.log(DP[N-1][N-1].reduce((a,c)=>a+c));
