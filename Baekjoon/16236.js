const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const N = parseInt(input[0]);
let board = input.slice(1,N+1).map(e=>e.split(" "));
let shark = {
    size : 2,
}
for (let i=0; i < N; i++){
    for (let j=0; j<N; j++){
        board[i][j] = parseInt(board[i][j]);
        if (board[i][j] == 9)
            shark.pos = [i,j];
    }
}
function getClosest(){
    
}
console.log(board)
console.log(shark)