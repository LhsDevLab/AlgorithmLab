const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ");
    }
}
const N = parseInt(reader.input.shift());
let childs = {};
for (let i=0; i<N; i++){
    let [p,a,b] = reader.read();
    childs[p] = [a,b];
}
function preOrder(root){
    if (root == ".")
        return "";
    let [a,b] = childs[root];
    return root+preOrder(a)+preOrder(b);
}
function inOrder(root){
    if (root == ".")
        return "";
    let [a,b] = childs[root];
    return inOrder(a)+root+inOrder(b);
}
function postOrder(root){
    if (root == ".")
        return "";
    let [a,b] = childs[root];
    return postOrder(a)+postOrder(b)+root;
}
for (let e of [preOrder('A'), inOrder('A'), postOrder('A')])
    console.log(e);