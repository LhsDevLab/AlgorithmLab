const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    let res = "";
    for(let i=0; i<(line.length-1)/2;i++)
        res += line.charAt(i)+line.charAt(line.length-i-1);
	console.log(res + (line.length%2 == 0 ? "" : line.charAt(line.length/2)));
	rl.close();
}).on("close", function() {
	process.exit();
});