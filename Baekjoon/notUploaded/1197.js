const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readLine: function () {
        return this.input[this.index++];
    },
    readList: function () {
        return this.readLine().split(" ").map(e => parseInt(e));
    }
}
const [V, E] = reader.readList();
const edges = [];
let parents = Array.from({length:V+1},()=>-1);
let childs = Object.fromEntries(Array.from({length:V+1},(_,i)=>[i,new Set()]));
for (let i = 0; i < E; i++) {
    edges.push(reader.readList());
};
edges.sort((a, b) => b[2] - a[2]);
let answer = 0;
let flag = true;
while (answer.length != V-1 && flag){
    function setRoot(e,r){
        parents[e] = r;
        childs[r].add(e);
        if (childs[r].size == V)
            flag = false;
    }
    let [a,b,c] = edges.pop();
    let [A,B] = [parents[a], parents[b]];
    if (A == B){
        if (parents[a] === -1){
            setRoot(a,a);
            setRoot(b,a);
            answer += c;
        }
    }else{
        answer += c;
        if (A === -1){
            setRoot(a,B);
        }else if (B === -1){
            setRoot(b,A);
        }else{
            for (let e of childs[B])
                setRoot(e,A);
            childs[B] = new Set();
        }
    }
}
console.log(answer);