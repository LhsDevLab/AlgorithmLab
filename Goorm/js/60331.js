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

function solution(N){
    let strs = Array.from({length:N},()=>Array.from({length:N},()=>' '));
    for(let i=0; i<=Math.floor(N/2); i += 2 ){
        let size = N-i*2;
        for(let j=0; j<size; j++){
            strs[i][i+j] = '#';
            strs[i+j][i] = '#';
            strs[i+size-1][i+j] = '#';
            strs[i+j][i+size-1] = '#';
        }
    }
    for(let i=0; i<Math.floor(N/2); i++){
        strs[i+1][i] = strs[i+1][i] == '#' ? ' ' : '#';
    }
    return strs.map(e=>e.join(' ')+' ').join('\n');
}