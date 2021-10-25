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
    let res = BigInt(0);
    factor = BigInt(factor);
    function factorial(n){
        let res = BigInt(1);
        for(let i=2; i<=n; i++)
            res *= BigInt(i);
        return res;
    }

    for(let two=0; two<=width/2; two++){
        let one = width-two*2;
        res += (factorial(one+two)/(factorial(one)*factorial(two)))*BigInt(2**two);
        if (res >= factor)
            res %= factor;
    }
    
    return (res%factor).toString();
}