const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(isPrime(parseInt(line)) ? 'True' : 'False');
	rl.close();
}).on("close", function() {
	process.exit();
});

function isPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i == 0) return false;
    }
    return true;
}