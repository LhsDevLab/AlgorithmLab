const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(...line.split(' ').map(e=>parseInt(e))));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(N,K){
    let res = Array.from({length:N},(e,i)=>i+1);
    let idx = 0;
    for(let i=0; i<N-2; i++){
        idx %= res.length;
        res = [...res.slice(0,idx), ...res.slice(idx+1)];
        idx += K-1;
    }
    return res.join(' ');
};