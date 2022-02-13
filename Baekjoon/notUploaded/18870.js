let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let list = input[1].split(" ").map(e=>parseInt(e));
let set = Array.from(new Set(list));
set.sort((a,b)=>a-b);
let index = {};
for (let i in set)
    index[set[i]] = i;
console.log(list.map(e=>index[e]).join(" "));
