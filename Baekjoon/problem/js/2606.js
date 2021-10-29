let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = parseInt(input[0]);
let M = parseInt(input[1]);
let nodes = Array.from({length:N},()=>[]);
let currupted =Array.from({length:N},()=>false);

for(let i=2; i<M+2; i++){
    let [a,b] = input[i].split(' ').map(e=>parseInt(e)-1);
    nodes[a].push(b); nodes[b].push(a);
}

let stack = [0];
currupted[0] = true;
let res = 0;

while(stack.length != 0){
    let list = nodes[stack.pop()];
    for(let node of list){
        if (currupted[node] === false){
            currupted[node] = true;
            stack.push(node);
            res += 1;
        }
    }
}
console.log(res);