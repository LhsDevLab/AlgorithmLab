let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = parseInt(input[0]);
let list = input.slice(1,N+1).map(e=>e.split(' ').map(e=>parseInt(e)));
list.sort((a,b)=>a[0] == b[0] ? a[1]-b[1] : a[0]-b[0]);

let count = 0;
let endTime = 0;

for (let [s,e] of list){
    if (endTime <= s){
        count += 1;
        endTime = e;
    } 
    else if (endTime > e)
        endTime = e;
}

console.log(count);