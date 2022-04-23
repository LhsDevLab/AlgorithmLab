const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readItem() {
        return parseInt(this.input[this.index++]);
    },
    readList() {
        return this.input[this.index++].split(" ").map(e => parseInt(e));
    }
}
const [N,R,Q] = reader.readList();
let connect = {};
function addTo(obj, key, val){
    if (obj[key] == undefined)
        obj[key] = new Set();
    obj[key].add(val)
}
for (let i=1; i<N; i++){
    let [a,b] = reader.readList();
    addTo(connect,a,b);
    addTo(connect,b,a);
}
let childs = Array.from({length:N+1},()=>[]);
function makeTree(node, parent){
    for (let e of connect[node]){
        if (e != parent){
            childs[node].push(e);
            makeTree(e, node);
        }
    }
}
makeTree(R);
let size = [-1];
function countSubtreeNodes(node){
    size[node] = 1;
    for (let e of Array.from(childs[node])){
        countSubtreeNodes(e);
        size[node] += size[e];
    }
}
countSubtreeNodes(R);
for (let i=0; i<Q; i++)
    console.log(size[reader.readItem()]);