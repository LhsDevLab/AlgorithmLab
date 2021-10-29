// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on("line", function(line) {
    input.push(line);
    if (input.length == 3)
	    rl.close();
}).on("close", function() {
    solution(input[1].split(' ').map(e=>parseInt(e)), ...input[2].split(' ').map(e=>parseInt(e)));
	process.exit();
});

function solution(arr, start, end){
    let preSum = [0];
    arr.reduce((a,c)=>{
        preSum.push(a+c);
        return a+c;
    },0);
    console.log(preSum[end] - preSum[start-1]);
}