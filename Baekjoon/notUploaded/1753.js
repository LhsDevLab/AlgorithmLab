const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ").map(e=>parseInt(e));
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
    let queue = [start];
    while (queue.length != 0){
        let node = queue.shift();
        for (let i=0; i < size; i++){
            let temp = graph[node][i]+res[node];
            if (res[i] > temp){
                res[i] = temp;
                queue.push(i);
            }
        }
    }
    return res;
}
let res = Dijkstra(K-1, graph);
for (let e of res)
    console.log(e == Infinity ? "INF" : e);