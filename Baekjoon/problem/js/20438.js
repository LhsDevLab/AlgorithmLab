let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [N,K,Q,M] = input[0].split(' ').map(e=>{return parseInt(e)});
const sleeps = input[1].split(' ').map(e=>{return parseInt(e)}); 
let targets = input[2].split(' ').map(e=>{return parseInt(e)});
targets = targets.filter(e=>!sleeps.includes(e));

const preSum = [0,0,0];

for(let i=3; i<=N+2;i++){
    preSum[i] = preSum[i-1];
    if (sleeps.includes(i))
        continue;
    for(t of targets){
        if (i%t == 0){
            preSum[i] += 1;
            break;
        }
    }
}
let res = '';
for(let i=3; i<3+M; i++){
    let [start,end] = input[i].split(' ').map(e=>parseInt(e));
    res += end-start+1-(preSum[end]-preSum[start-1])+'\n';
}
console.log(res.substr(0,res.length-1));