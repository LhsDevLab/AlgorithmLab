const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(delimiter){
        delimiter = delimiter == undefined ? " " : delimiter;
        return this.readLine().split(delimiter).map(e=>parseInt(e));
    }
}
const [N,S] = reader.readList();
let count = S == 0 ? -1 : 0;
let arr = reader.readList();
function travel(idx, total){
    if (idx == N){
        if (total == S)
            count += 1;
        return;
    }
    travel(idx+1, total);
    travel(idx+1, total+arr[idx]);
}
travel(0,0);
console.log(count);