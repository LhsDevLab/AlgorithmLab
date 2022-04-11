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
const Arr = reader.readList();
function getCases(start, end){
    let count = {
        values : {},
        add : function(v){
            if (this.values[v] == undefined)
                this.values[v] = 1;
            else 
                this.values[v] += 1;
        }
    }
    function travel(idx, total){
        if (idx > end){
            count.add(total);
            return;
        }
        travel(idx+1, total);
        travel(idx+1, total+Arr[idx]);
    }
    travel(start,0);
    return count.values;
}
let answer = S == 0 ? -1 : 0;
const Half = parseInt((Arr.length-1)/2);
let [L,R] = [getCases(0, Half), getCases(Half+1, Arr.length-1)];
for (let v of Object.keys(L)){
    let r = R[S-v] == undefined ? 0 : R[S-v];
    answer += r*L[v];
};
console.log(answer);