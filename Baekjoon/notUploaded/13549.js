const [N, K] = require('fs').readFileSync('input.txt').toString().split(" ").map(e => parseInt(e));
//readFileSync('/dev/stdin').toString().split(" "),
const Max = Math.max(N, K * 2 + 1);
let current = new Set([N]);
let visited = new Set();
for (let i = 0; ; i++) {
    let next = new Set();
    for (let e of current) {
        while (e <= Max && !visited.has(e)){
            next.add(e);
            e *= 2;
        }
    }
    for (let e of next)
        visited.add(e);
    current = next;
    if (current.has(K)) {
        console.log(i);
        break;
    }
    next = new Set();
    for (let e of current) {
        for (let n of [e + 1, e - 1]) {
            if (n >= 0 && n <= Max && !visited.has(n)) {
                next.add(n);
            }
        }
    }
    current = next;
}