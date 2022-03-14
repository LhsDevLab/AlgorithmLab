function Dijkstra(start, graph){
    const size = graph.length;
    let res = Array.from({length:size},()=>Infinity);
    let previous = [];
    res[start] = 0;
    let remain = new Set(Array.from({length:size},(_,i)=>i));
    while(remain.size != 0){
        let temp = Array.from(remain);
        let minNode = temp.reduce((a,c)=>{
            return res[a] > res[c] ? c : a;
        },temp.pop());
        remain.delete(minNode);
        temp = graph[minNode];
        for (let i in res){
            let newPath = temp[i]+res[minNode];//(temp[i] == undefined ? Infinity : temp[i])+res[minNode]);
            
            if (newPath < res[i]){
                res[i] = newPath;
                previous[i] = minNode;
            }
        }
    }
    return [res,previous];
}
console.log(Dijkstra( 0,
    [
        [ Infinity, 4, 2, 7 ],
        [ 1, Infinity, 5, Infinity ],
        [ 2, Infinity, Infinity, 4 ],
        [ Infinity, 3, Infinity, Infinity ]
    ]
));