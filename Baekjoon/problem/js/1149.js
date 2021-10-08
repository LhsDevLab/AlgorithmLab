let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = parseInt(input[0]);
let Costs = input.slice(1,N+1).map(e=>e.split(' ').map(e=>parseInt(e)));

let lastMin = Costs[0].slice();

for(let i=1; i<N; i++){
    let Minsum = [
        Math.min(lastMin[1],lastMin[2]) + Costs[i][0],
        Math.min(lastMin[0],lastMin[2]) + Costs[i][1],
        Math.min(lastMin[0],lastMin[1]) + Costs[i][2],
    ];
    lastMin = Minsum;
}

console.log(Math.min.apply(null,lastMin));