const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ").map(e=>parseInt(e));
    }
}
const [N,E] = reader.read();
const graph = Array.from({length:N+1},()=>Array.from({length:N+1}, ()=>Infinity));
for (let i=0; i<E; i++){
    let [a,b,c] = reader.read();
    graph[a][b] = c;
    graph[b][a] = c;
}
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
graph.shift();
graph.forEach(e=>e.shift());
const [v1,v2] = reader.read().map(e=>e-1);
let [len1,len2] = [Dijkstra(v1,graph),Dijkstra(v2,graph)];
let res = len1[v2]+Math.min(len1[0]+len2[N-1],len1[N-1]+len2[0]);
console.log(res == Infinity ? -1 : len1[v2]+Math.min(len1[0]+len2[N-1],len1[N-1]+len2[0]));