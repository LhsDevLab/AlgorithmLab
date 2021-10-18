let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [N, M] = input[0].split(' ').map(e=>parseInt(e));
const board = input.slice(1,N+1);
const preSet = {};
preSet['W'] = Array.from({length:8},(_,idx)=> idx%2 == 0 ? 'WBWBWBWB' : 'BWBWBWBW');
preSet['B'] = Array.from({length:8},(_,idx)=> idx%2 == 1? 'WBWBWBWB' : 'BWBWBWBW');

let res = Infinity;
function Count(row,col){
    let [countB,countW] = [0,0];
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if (preSet['B'][i].charAt(j) != board[row+i].charAt(col+j))
                countB += 1;
            if (preSet['W'][i].charAt(j) != board[row+i].charAt(col+j))
                countW += 1;
            if (countB >= res && countW >= res)
                return countW;
        }
    }
    return Math.min(countB,countW);
}

for(let i=0; i<=N-8; i++){
    for(let j=0; j<=M-8; j++){
        let temp = Count(i,j);
        if (res > temp) res = temp;
    }
}

console.log(res);