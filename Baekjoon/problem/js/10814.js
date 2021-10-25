let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = parseInt(input[0]);
let list = [];

for(let i=1; i<=N; i++)
    list.push(input[i].split(' '));

list.sort((a,b)=>{
    return parseInt(a[0])-parseInt(b[0]);
});
let res = ''
list.forEach(e=>{
    res += `${e[0]} ${e[1]}\n`;
});
console.log(res.substring(0,res.length-1));