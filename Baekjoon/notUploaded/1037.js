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
reader.readLine();
let list = reader.readList();
let [M,m] = [0, Infinity];
for (let e of list){
    if (M < e)
        M = e;
    if (m > e)
        m = e;
}
console.log(M*m);