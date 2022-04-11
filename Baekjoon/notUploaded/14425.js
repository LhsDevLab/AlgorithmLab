const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
}
let answer = 0;
let [N,M] = reader.readLine().split(' ').map(e=>parseInt(e));
function add(obj, key){
    if (obj[key] == undefined)
        obj[key] = {};
    return obj[key];
}
const Trie = {};
for (let i=0; i<N; i++){
    let target = Trie;
    for (let c of reader.readLine())
        target = add(target, c);
}
for (let i=0; i<M; i++){
    let target = Trie;
    for (let c of reader.readLine()){
        if (target == undefined){
            target = {t:0};
            break;
        }
        target = target[c];
    }
    if (Object.keys(target).length == 0)
        answer += 1;
}
console.log(answer);