const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readItem(){
        return parseInt(this.input[this.index++]);
    },
    readList(){
        return this.input[this.index++].split(" ").map(e => parseInt(e));
    }
}
const N = reader.readItem();
let arr = [];
for (let i=0; i<N; i++)
    arr.push(reader.readList());
let [s,e,total] = [Infinity,0,0];
arr.sort((a,b)=>a[1]-b[1]);
for (let [d,t] of arr){
    total += d;
    e = t;
    if (e-s+1 < total)
        s = e-total+1;
}
console.log(s-1);