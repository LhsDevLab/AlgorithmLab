let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [R,S] = input[0].split(' ').map(e=>{return parseInt(e)});
const seatInfo = input.slice(1);
let board = Array.from({length:R},()=>{return Array.from({length:S},()=>0)});
let placed = [];

for(let i=0; i<R; i++){
    for(let j=0; j<S; j++){
        try{
            if (seatInfo[i].charAt(j) == 'o')
                placed.push([i,j]);
        }catch(e){}
    }
}
function Add([x,y]){
    try{
        if (board[x][y] !== undefined)
            board[x][y] += 1;
    }catch(e){}
}
placed.forEach(([x,y])=>{
    Add([x+1,y-1]);Add([x+1,y]);Add([x+1,y+1]);
    Add([x,y-1]);Add([x,y+1]);
    Add([x-1,y-1]);Add([x-1,y]);Add([x-1,y+1]);
});

let res = 0;
let max = 0;

placed.forEach(([x,y])=>{
    try{
        res += board[x][y]/2;
        board[x][y] = -1;
    }catch(e){}
});
board.forEach(row=>{
    row.forEach(e=>{
        if (e > max)
            max = e;
    });
});

console.log(res+max);