const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    read : function(){
        return this.input[this.index++].split(" ").map(e=>parseInt(e));
    }
}
const n = parseInt(reader.input.shift());
let childs = Array.from({length:n+1}, ()=>new Object());
let root = 1;
for (let i=1; i<n; i++){
    let [p,c,v] = reader.read();
    childs[p][c] = v;
}
let answer = 0;
function DFS(node){
    let keys = Object.keys(childs[node]);
    if (keys.length == 0)
        return 0;
    let leng = [];
    for (let key of keys)
        leng.push(DFS(key)+childs[node][key]);
    let [first, second] = [0,0];
    for (let e of leng){
        if (e > first){
            second = first;
            first = e;
        }
        else if (e > second)
            second = e;
    }
    answer = Math.max(answer,first+second);
    return first;
}
DFS(root);
console.log(answer);