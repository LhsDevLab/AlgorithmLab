let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let board = input.slice(1,parseInt(input[0])+1).map(e=>
    e.split(' ').map(e=>
        e=='0' ? false : true));
function FloydWarshall(conn){
    size = conn.length;
    for (let _ of conn){
        let isPlain = true;
        for (let node=0; node<size; node++){
            for (let i=0; i<size; i++){
                for (let j=0; j<size; j++){
                    conn[i][j] = conn[i][j]||(conn[i][node] && conn[node][j]);
                    isPlain = false;
                }
            }
        }
        if (isPlain)
            return conn;
    }
    return true;
}
FloydWarshall(board);
board.forEach(e=>{
    console.log(e.map(e=>e ? 1 : 0).join(' '));
});