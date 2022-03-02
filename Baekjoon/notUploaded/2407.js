const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    read : function(){
        return this.input[this.index++].split(" ").map(e=>parseInt(e));
    }
}
let [n,m] = reader.read();
let res = BigInt(1);
for (let i=0; i<m; i++)
    res *= BigInt(n-i);
for (let i=m; i>0; i--)
    res /= BigInt(i);

console.log(res.toString());