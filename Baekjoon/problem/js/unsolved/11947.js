let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let k = parseInt(input[0]);
let cases = input.slice(1,k+1).map(e=>{return parseInt(e)});

function F(n){
    let res = 10;
    while(res <= n)
        res *= 10;
    return res-1-n;
}

cases.forEach(e=>{
    let target = 10;
    while(target <= e)
        target *= 10;
    target /= 2;
    if (e < target) target = e;
    console.log(target*F(target));
});
