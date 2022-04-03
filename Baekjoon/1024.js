let [N,L] = require('fs').readFileSync('input.txt').toString().split(" ").map(e => parseInt(e));
//readFileSync('/dev/stdin')
let count = 1;
for (; count<L; count++)
    N -= count;
while(N%count != 0){
    N -= count;
    if (N < count){
        N = -1;
        break;
    }
    count += 1;
}
if (N == -1)
    console.log(-1);
else{
    N /= count;
    console.log(Array.from({length:count}, (_,i)=>N+i).join(' '));
}