const reader = {
    input : require('fs').readFileSync('input2.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    read : function(){
        return this.input[this.index++].split(" ").map(e=>parseInt(e));
    }
}
const n = parseInt(reader.input.shift());
const inorder = reader.read();
const postorder = reader.read();
const indexes = [];
let res = [];
for (let i=0; i<n; i++)
    indexes[inorder[i]] = i;
function preOrder(start, end){
    if (start >= end || postorder.length == 0)
        return;
    let root = postorder.pop();
    preOrder(indexes[root]+1, end);
    preOrder(start, indexes[root]);
    res.push(root);
}
preOrder(0,n);
console.log(res.reverse().join(' '));