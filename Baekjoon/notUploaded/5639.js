let pre = require('fs').readFileSync('input.txt').toString().split("\r\n").map(e=>parseInt(e));
//let pre = require('fs').readFileSync('/dev/stdin').toString().split("\r\n").map(e=>parseInt(e));
function cvt(s,e){
    if (s >= e)
        return [];
    let n = pre[s];
    for (let i = s;i < e; i++)
        if (pre[i] > n)
            return [...cvt(s+1, i),...cvt(i,e),n];
    return [...cvt(s+1,e),n];
}
console.log(cvt(0,pre.length)); 