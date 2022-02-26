const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ").map(e=>parseInt(e));
    }
}
const [N,M,X] = reader.read();
const graph = Array.from({length:N+1},()=>Array.from({length:N+1}, ()=>Infinity));
for (let i=0; i<M; i++){
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
let toHome = Dijkstra(X-1,graph);
let toParty = Dijkstra(X-1,(()=>{
    let res = [];
    for (let i in graph){
        let temp = [];
        for (let j in graph)
            temp[j] = graph[j][i];
        res[i] = temp;
    }
    return res;
})());
console.log(toHome.reduce((a,c)=>Math.max(a,c + toParty.shift()),-1));