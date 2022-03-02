const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    read : function(){
        return this.input[this.index++].split(" ").map(e=>parseInt(e));
    }
}
const [V,E] = reader.read();
const K = parseInt(reader.input.shift());

const graph = Array.from({length:V+1},()=>Array.from({length:V+1}, ()=>Infinity));
for (let i=0; i<E; i++){
    let [A,B,T] = reader.read();
    graph[A][B] = T;
}
graph.shift();
graph.forEach(e=>e.shift());

function Dijkstra(start, graph){
    const size = graph.length;
    let res = Array.from({length:size},()=>Infinity);
    res[start] = 0;
    let remain = new Set(Array.from({length:size},(_,i)=>i));
    while(remain.size != 0){
        let temp = Array.from(remain);
        let minNode = temp.reduce((a,c)=>{
            return res[a] > res[c] ? c : a;
        },temp.pop());
        remain.delete(minNode);
        temp = graph[minNode];
        for (let i in res)
            res[i] = Math.min(res[i], temp[i]+res[minNode]);
    }
    return res;
}
let res = Dijkstra(K-1, graph);
for (let e of res)
    console.log(e == Infinity ? "INF" : e);