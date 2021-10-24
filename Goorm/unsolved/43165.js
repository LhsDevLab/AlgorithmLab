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

function solution(width, factor){
    let res = 0;

    let N = Math.floor(width/2);

    for(let i=0; i<=N; i++){
        let one = width-2*i;
        let two = i;
        console.log([one, two],(one*two+1)*(2**two));
        res += (one*two+1)*(2**two);
    }

    return res%factor;
}