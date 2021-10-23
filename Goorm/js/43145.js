const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N = 0;
let res = -1;
let task = [(line)=>{
    N = parseInt(line);
    for(let i=1; i<2*N; i++){
        task.push((line)=>{
            datas.push(line.split(' ').map(e=>parseInt(e)));
        });
    }
}];
let datas = [];
rl.on("line", function(line) {
    task.pop()(line);
    if (task.length == 0){
        solution(datas);
        rl.close();
    }
}).on("close", function() {
	process.exit();
});
function solution(datas){
    function recursive([row,col],sum){
        if (datas[row] == undefined || datas[row][col] == undefined)
            return;
        sum += datas[row][col];
        if (row == 2*N-2 && col == 0 && sum > res){
            res = sum;
            return;
        };
        getChild([row,col]).forEach(e=>{
            recursive(e,sum);
        });
    }
    function getChild([row,col]){
        if (row >= N-1)
            return [[row+1,col-1],[row+1,col]];
        return [[row+1,col],[row+1,col+1]];
    }
    recursive([0,0],0);
    console.log(res);
}