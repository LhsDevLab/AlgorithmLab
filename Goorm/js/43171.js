// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(Data){
    let res = 0;
    for(c of Data)
        if (c > res) res = parseInt(c);

    while(true){
        res += 1;
        let temp = 0;
        for(let i=0; i<Data.length;i++){
            temp += Data.charAt(Data.length-i-1)*(res**i);
        }
        if (Number.isInteger(Math.sqrt(temp)) == true)
            break;
    }
    return res;
}