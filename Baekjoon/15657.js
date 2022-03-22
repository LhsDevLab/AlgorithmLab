const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(){
        return this.readLine().split(" ").map(e=>parseInt(e));
    }
}
let [N,M] = reader.readList();
let arr = reader.readList();
arr.sort();
let res = [];
function func(start){
    if (res.length == M){
        console.log(res.join(' '));
        return;
    }else{
        for (let i=start; i<N;i++){
            res.push(arr[i]);
            func(i);
            res.pop();
        }
    }
}
func(0);