let [r1,c1,r2,c2] = require('fs').readFileSync('input.txt').toString().split(' ').map(e=>parseInt(e));
//let [r1,c1,r2,c2] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(e=>parseInt(e));

let answer = Array.from({length:(r2-r1+1)},()=>Array.from({length:(c2-c1+1)},()=>0));

const mover = {
    pos : [0,0],
    num : 1,
    dirSet : [],
    size : 0,
    countDown : 0,
    move(){
        if (this.dirSet.length == 0){
            this.pos[1] += 1;
            this.dirSet = [[0,1],[1,0],[0,-1],[-1,0]];
            this.size += 2;
            this.countDown = this.size-1;
        }else{
            let [a,b] = this.dirSet[this.dirSet.length-1];
            this.pos[0] += a;
            this.pos[1] += b;
            this.countDown -= 1;
            if (this.countDown == 0){
                this.dirSet.pop();
                this.countDown = this.size;
            }
        }
        this.num += 1;
    }
}
r2 -= r1; mover.pos[0] -= r1; r1 = 0;
c2 -= c1; mover.pos[1] -= c1; c1 = 0;

let remain = (r2-r1+1)*(c2-c1+1);
while(remain != 0){
    let [r,c] = mover.pos;
    try{
        if (answer[r][c] == 0){
            answer[r][c] = mover.num;
            remain -= 1;
        }
    }catch(e){}
    mover.move();
}
const size = (""+mover.num).length;
for (let row of answer)
    console.log(row.map(e=>{
        e += '';
        return ' '.repeat(size-e.length)+e;
    }).join(' '));