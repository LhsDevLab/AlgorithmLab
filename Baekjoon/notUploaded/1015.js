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
list = list.map((e,i)=>[e,i]);
list.sort((a,b)=>a[0]==b[0] ? a[1]-b[1] : a[0]-b[0]);
let answer = [];
for (let i in list)
    answer[list[i][1]] = i;
console.log(answer.join(' '));