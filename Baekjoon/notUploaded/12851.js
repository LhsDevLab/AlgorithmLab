const [N,K] = require('fs').readFileSync('input.txt').toString().split(" ").map(e=>parseInt(e));
//readFileSync('/dev/stdin').toString().split(" "),
const Max = Math.max(N,K*2+1);
let cases = Array.from({length:Max}, ()=>0);
cases[N] = 1;
let current = new Set([N]);
let visited = new Set([N]);
for (let i=0;; i++){
    if (current.has(K)){
        console.log(i);
        console.log(cases[K]);
        break;
    }
    for (let e of current)
        visited.add(e);
    let next = new Set();
    for (let e of current){
        for (let n of (e > K ? [e-1] : [e+1,e-1,e*2])){
            if (n >= 0 && n <= Max && !visited.has(n)){
                next.add(n);
                cases[n] += cases[e];
            }
        }
    }
    current = next;
}