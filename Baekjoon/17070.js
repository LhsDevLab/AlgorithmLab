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
function check(r,c){
    try{
        if (room[r][c] == 0)
            return true;
    }catch(e){}
    return false;
}
function validDir(r,c,dir){
    let res = new Set();

    if (check(r,c+1))
        res.add(0);
    if (check(r+1,c))
        res.add(2);
    if (res.size == 2 && check(r+1,c+1))
        res.add(1);
    if (dir == 0)
        res.delete(2);
    if (dir == 2)
        res.delete(0);
    return res;
}
let queue = [[0,1,0]];
while(queue.length != 0){
    console.log(queue)
    let [r,c,dir] = queue.pop();
    for (let e of validDir(r,c,dir)){
        let [a,b] = dirSet[e];
        a += r;
        b += c;
        DP[a][b][e] += DP[r][c][dir];
        queue.push([a,b,e]);
    }
}
console.log(DP[N-1][N-1].reduce((a,c)=>a+c));
