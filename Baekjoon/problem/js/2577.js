let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let multi = input.slice(0,3).map(e=>parseInt(e)).reduce((a,c) => a*c)+'';
let res = Array.from({length:10},()=>0);
for(c of multi)
    res[c] += 1;
console.log(res.join('\n'));