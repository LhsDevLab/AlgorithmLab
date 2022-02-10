function FloydWarshall(conn){
    size = conn.length;
    for (let _ of conn){
        let isPlain = true;
        for (let node=0; node<size; node++){
            for (let i=0; i<size; i++){
                for (let j=0; j<size; j++){
                    let temp = conn[i][node] + conn[node][j];
                    if (conn[i][j] > temp){
                        conn[i][j] = temp;
                        isPlain = false;
                    }
                }
            }
        }
        if (isPlain)
            return conn;
    }
    return true;
}
console.log(FloydWarshall(
    [[100, 1, 100, 100],
     [100, 100, 1, 1],
     [100, 100, 100, 1],
     [100, 100, 100, 100],]
));