const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on("line", function(line) {
    console.log(solution(parseInt(line)));
	rl.close();
}).on("close", function() {
	process.exit();
});
function solution(n){
    let preSet = [1];
    for(let i=1; i<n; i++)
        preSet[i] = 2*preSet[i-1]+1;
    return preSet[preSet.length-1];
}