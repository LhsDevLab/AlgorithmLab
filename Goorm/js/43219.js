const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
rl.on("line", function(line) {
    input.push(parseInt(line));
    if (input.length == input[0]+1)
	    rl.close();
}).on("close", function() {
    console.log(solution(input[0],input.slice(1)));
	process.exit();
});
function solution(N,cases){
    let res = 0;
    cases.sort((a,b)=>a-b);
    let num = 1;
    cases.forEach(e=>{
        if (e == num){
            res += 1;
            return;
        }
        else if (e > num){
            num = Math.floor(Math.sqrt(e));
            if (e == num**2)
                res += 1;
        }
    });
    return res;
}