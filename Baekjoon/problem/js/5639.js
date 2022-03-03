let pre = require('fs').readFileSync('input.txt').toString().trim().split("\r\n").map(e=>parseInt(e))
//let pre = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(e=>parseInt(e))
let r = []
function cvt(s,e){
    let n = pre[s]
    if (e-s <= 0)
        return;
    for (let i = s+1;i < e; i++)
        if (pre[i] > n){
            cvt(s+1, i)
            cvt(i,e)
            r.push(n)
            return;
        }
    cvt(s+1,e)
    r.push(n)
}
cvt(0,pre.length)
console.log(r.join('\n'))