const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ").map(e=>parseInt(e));
    },
    read2 : function(){
        let res = this.read();
        res.shift();
        return res;
    }
}
const clusterList = [];
const [N,M] = reader.read();
let knowns = new Set(reader.read2());
for (let e of knowns)
    clusterList[e] = knowns;
const partys = [];
for (let i=0; i<M; i++)
    partys.push(reader.read2());
for (let list of partys){
    let subs = new Set();
    let next = new Set();
    for (let e of list){
        if (clusterList[e] != undefined)
            subs.add(clusterList[e]);
        else
            next.add(e);
    }
    for (let c of subs){
        for (let e of c)
            next.add(e);
    }
    for (let e of next)
        clusterList[e] = next;
}
let res = 0;
knowns = clusterList[Array.from(knowns)[0]];
for (let p of partys){
    if (knowns !== clusterList[p.pop()])
        res += 1;
}
console.log(res);
