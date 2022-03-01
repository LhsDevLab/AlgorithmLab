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
console.log(Dijkstra( 0,
    [
        [ Infinity, 4, 2, 7 ],
        [ 1, Infinity, 5, Infinity ],
        [ 2, Infinity, Infinity, 4 ],
        [ Infinity, 3, Infinity, Infinity ]
    ]
));