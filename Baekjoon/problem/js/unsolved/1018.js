let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [N, M] = input[0].split(' ').map(e=>parseInt(e));
const board = input.slice(1,N+1);

let res = Infinity;
function Count(row,col){
    let count = 0;
    const starting = board[row][col];
    const contrast = starting == 'W' ? 'B' : 'W';
    for(let i= row; i<row+8; i += 2){
        for(let j=col; j<col+8; j+=2){
            if (board[i][j] != starting) count += 1;
            if (board[i][j+1] != contrast) count+= 1;
            if (count > res) return count;
        }
    }
    for(let i= row+1; i<row+8; i += 2){
        for(let j=col; j<col+8; j+=2){
            if (board[i][j] != contrast) count += 1;
            if (board[i][j+1] != starting) count+= 1;
            if (count > res) return count;
        }
    }
    return count;
}

for(let i=0; i<=N-8; i++){
    for(let j=0; j<=M-8; j++){
        let temp = Count(i,j);
        if (res > temp) res = temp;
    }
}

console.log(res);