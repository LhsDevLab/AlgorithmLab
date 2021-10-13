let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [N,M] = input[0].split(' ').map(e=>{return parseInt(e)});

let A = [];
let B = [];
let C = [];

for(let i=1; i<=N; i++){
    A.push(input[i].split('').map(e=>{return parseInt(e)}));
}
for(let i=N+1; i<=2*N; i++){
    B.push(input[i].split('').map(e=>{return parseInt(e)}));
};
for(let i=2*N+1; i<=3*N; i++){
    C.push(input[i].split('').map(e=>{return parseInt(e)}));
};

console.log(A);
console.log(B);
console.log(C);
