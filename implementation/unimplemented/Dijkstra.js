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

console.log(Dijkstra( 0,
    [
        [ Infinity, 4, 2, 7 ],
        [ 1, Infinity, 5, Infinity ],
        [ 2, Infinity, Infinity, 4 ],
        [ Infinity, 3, Infinity, Infinity ]
    ]
));