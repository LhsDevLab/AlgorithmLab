let [N,L] = require('fs').readFileSync('input.txt').toString().split(" ").map(e => parseInt(e));
//readFileSync('/dev/stdin')
for (let i=1; i<L; i++)
    N -= i;
N /= 3;
console.log(Array.from({length:L}, (_,i)=>N+i).join(' '));