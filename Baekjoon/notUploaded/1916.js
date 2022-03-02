const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(delimiter){
        delimiter = delimiter == undefined ? " " : delimiter;
        return this.readLine().split(delimiter).map(e=>parseInt(e));
    }
}
let [N,M] = [parseInt(reader.readLine()),parseInt(reader.readLine())];
const graph = Array.from({length:N+1},()=>Array.from({length:N+1}, ()=>Infinity));
for (let i=0; i<M; i++){
    let [A,B,T] = reader.readList();
    graph[A][B] = T < graph[A][B] ? T : graph[A][B];
}
graph.shift();
graph.forEach(e=>e.shift());
let [a,b] = reader.readList();
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
console.log(Dijkstra(a-1,graph)[b-1]);