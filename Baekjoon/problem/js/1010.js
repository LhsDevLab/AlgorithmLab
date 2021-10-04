let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const n = parseInt(input.shift());

function factorial(n){
    let res = 1;
    for(let i=2; i<=n; i++){
        res *= i;
    };
    return res;
}

for(let i=0; i<n; i++){
    const [r,n] = input[i].split(' ').map(e=>{return parseInt(e)});
    console.log(Math.round(factorial(n)/(factorial(n-r)*factorial(r))));
}