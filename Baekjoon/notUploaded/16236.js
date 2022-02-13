const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const N = parseInt(input[0]);
let board = input.slice(1,N+1).map(e=>e.split(" "));
let shark = {
    size : 2,
    eatCount : 0,
    move : 0,
    eat : function(pos,mv){
        this.move += mv;
        this.pos = pos;
        this.eatCount += 1;
        if (this.eatCount == this.size){
            this.eatCount = 0;
            this.size += 1;
        }
    }
}
for (let i=0; i < N; i++){
    for (let j=0; j<N; j++){
        board[i][j] = parseInt(board[i][j]);
        if (board[i][j] == 9){
            shark.pos = [i,j];
            board[i][j] = 0;
        }
    }
}
function eatClosest(){
    let res = 0;
    let queue = [shark.pos];
    let visited = Array.from({length:N},()=>[]);
    visited[shark.pos[0]][shark.pos[1]] = true;
    for (;queue.length != 0;res += 1){
        let next = [];
        for (let [r,c] of queue){
            if (board[r][c] != 0 && board[r][c] < shark.size){
                board[r][c] = 0;
                shark.eat([r,c],res);
                return true;
            }
            for (let [i,j] of [[r-1,c],[r,c-1],[r,c+1],[r+1,c]]){
                try{
                    if (visited[i][j] == true)
                        continue;
                }catch{
                    continue;
                }
                visited[i][j] = true;
                if (board[i][j] <= shark.size)
                    next.push([i,j]);
            }
        }
        next.sort((a,b)=>(a[0]-b[0])*100 + (a[1]-b[1]));
        queue = next;
    }
    return false;
}
while (eatClosest());
console.log(shark.move);