const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ");
    }
}
const n = parseInt(reader.input.shift());
const inorder = reader.read();
const postorder = reader.read();
const indexes = [];

for (let i=0; i<n; i++)
    indexes[inorder[i]] = i;
function preOrder(start, end){
    if (start >= end || postorder.length == 0)
        return [];
    let root = [postorder.pop()];
    let rear = preOrder(indexes[root]+1, end);
    let front = preOrder(start, indexes[root]);
    for (let e of front)
        root.push(e);
    for (let e of rear)
        root.push(e);
    return root;
}
console.log(preOrder(0,n).join(' '));