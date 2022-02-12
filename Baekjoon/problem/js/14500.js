let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let answer = 0;
let [N,M] = input[0].split(" ").map(e=>parseInt(e)); 
let board = input.slice(1,N+1).map(e=>
    e.split(' ').map(e=>parseInt(e)));
let sumH = Array.from({length:N},()=>[]);
for (let i in board){
    for (let j=0; j<M-1; j++)
        sumH[i][j] = board[i][j]+board[i][j+1];
}
let sumV = Array.from({length:N},()=>[]);
for (let i=0; i<N-1; i++){
    for (let j in board[0])
        sumV[i][j] = board[i][j]+board[i+1][j];
}
function get(arr, r,c){
    try{
        return arr[r][c];
    }catch(e){
        return undefined;
    }
}
for (let r=0; r<N; r++){
    for(let c=0; c<M; c++){
        [
            get(sumH,r,c)+get(sumH,r,c+2),
            get(sumV,r,c)+get(sumV,r+2,c),

            get(sumH,r,c)+get(sumH,r+1,c),

            get(sumV,r,c)+get(sumH,r+2,c),
            get(sumV,r,c+1)+get(sumH,r+2,c),
            get(sumV,r,c)+get(sumH,r,c+1),
            get(sumV,r,c+2)+get(sumH,r,c),
            get(sumH,r,c)+get(sumV,r+1,c+1),
            get(sumH,r,c)+get(sumV,r+1,c),
            get(sumH,r+1,c)+get(sumV,r,c+2),
            get(sumH,r+1,c+1)+get(sumV,r,c),

            get(sumV,r,c)+get(sumV,r+1,c+1),
            get(sumH,r+1,c)+get(sumH,r,c+1),
            get(sumV,r+1,c)+get(sumV,r,c+1),
            get(sumH,r,c)+get(sumH,r+1,c+1),

            get(sumV,r,c+1)+get(board,r,c)+get(board,r,c+2),
            get(sumV,r,c+1)+get(board,r+1,c)+get(board,r+1,c+2),
            get(sumH,r+1,c)+get(board,r,c)+get(board,r+2,c),
            get(sumH,r+1,c)+get(board,r,c+1)+get(board,r+2,c+1),
        ].forEach(e=>{
            if (e > answer)
                answer = e;
        });
    }
}
console.log(answer);