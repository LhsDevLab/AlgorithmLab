const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(solution(line) == true ? 'True' : 'False');
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(line){
    let stack = [];
    for (let c of line){
        switch(c){
            case(']'):
            if (stack.pop() != '[')
                return false;
            break;
            case('}'):
            if (stack.pop() != '{')
                return false;
            break;
            case(')'):
            if (stack.pop() != '(')
                return false;
            break;
            default:
                stack.push(c);
        }
    }
    return true;
}