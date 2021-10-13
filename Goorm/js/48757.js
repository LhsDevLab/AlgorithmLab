const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    for(let i=1; i<parseInt(line); i++)
        console.log(i,solution(i+''));
    console.log(solution((parseInt(line)-1)+''));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(input){
    let res = 0;
    let numList = input.split('').map(e=>parseInt(e));
    let preSet = [0];
    for(let i=1; i<input.length; i++)
        preSet[i] = (10**(i-1))*3+preSet[i-1]*10;
    
    let num = numList.shift();
    while(num != undefined){
        res += num*preSet.pop();
        if (num == 3 || num == 6 || num == 9){
            res += numList.length == 0 ? 1 : parseInt(numList.join(''))+1;
            num -= 1;
        }
        res += Math.floor(num/3)*10**numList.length;
        num = numList.shift();
    }
    return res;
}