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
let N = parseInt(reader.readLine());
let answer = 0;
function prize(list){
    count = {};
    for (let e of list)
        count[e] = 0;
    for (let e of list)
        count[e] += 1;
    let arr = [null,[],[],[],[]];
    for (let e of Object.keys(count))
        arr[count[e]].push(parseInt(e));
    if (arr[4].length == 1){
        return 50000+arr[4][0]*5000;
    }else if (arr[3].length == 1){
        return 10000+arr[3][0]*1000;
    }else if (arr[2].length == 2){
        return 2000+(arr[2][0]+arr[2][1])*500;
    }else if (arr[2].length == 1){
        return 1000+(arr[2][0])*100;
    }else{
        return Math.max(...arr[1])*100
    }
}
for (let i=0; i<N; i++){
    let temp = prize(reader.readList());
    if (answer < temp)
        answer = temp;
}
console.log(answer)