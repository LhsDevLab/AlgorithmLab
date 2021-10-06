let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input[0]);
const parents = input[1].split(' ').map(e=>{return parseInt(e)});
const remove_target = input[2];

let nodes = [];

for(let i=0; i<N; i++){
    nodes[i] = {
        parent:parents[i],
        childs:[],
    }
}
for(let i=0; i<N; i++){
    if (parents[i] != -1)
        nodes[parents[i]].childs.push(i);
}
function removeNode(node){
    const stack = [];
    let target = node;
    while(target != undefined){
        nodes[target].childs.forEach(e=>{
            stack.push(e);
        });
        nodes[target] = null;
        target = stack.pop();
    }
};
removeNode(remove_target);
let res = 0;
nodes.forEach(e=>{
    try{
        let remain = [];
        e.childs.forEach(e=>{
            if (nodes[e] != null)
                remain.push(e);
        });
        e.childs = remain;
        if (e.childs.length == 0)
            res += 1;
    }
    catch(err){};
});

console.log(res);