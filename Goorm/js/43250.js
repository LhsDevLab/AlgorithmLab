const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on("line", function(line) {
    input.push(line.split(' ').map(e=>parseInt(e)));
    if (input.length == 3)
	    rl.close();
}).on("close", function() {
    console.log(solution(input));
	process.exit();
});
function solution([[a,b],arrA,arrB]){
    let res = [];
    while(true){
        if (arrA[0] === undefined){
            res.push(...arrB);
            break;
        }
        if (arrB[0] === undefined){
            res.push(...arrA);
            break;
        }
        res.push(arrA[0] > arrB[0] ? arrB.shift() : arrA.shift());
    }
    return res.join(' ')+' ';
}