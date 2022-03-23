const reader = {
    input : require('fs').readFileSync('input.txt').toString(),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    readList : function(){
        return this.input.split(" ").map(e=>parseInt(e));
    }
}
const visited = new Set();
let [N,M] = reader.readList();
let queue = [N];
function process(arr){
    let res = [];
    for (let E of arr){
        for (let e of [E*2, E*10+1]){
            if (e == M)
                return true;
            else if (!visited.has[e] && e < M){
                visited.add(e);
                res.push(e);
            }
        }
    }
    return res;
}
let count = 0;
for (; queue.length != 0;count++){
    queue = process(queue);
    if (queue === true){
        console.log(count+2);
        break;
    }else if (queue.length == 0){
        console.log(-1);
        break;
    }
}