let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [n,l,q,m] = input[0].split(' ').map(e=>{return parseInt(e)});
const sleeps = input[1].split(' ').map(e=>{return parseInt(e)}); 
const targets = input[2].split(' ').map(e=>{return parseInt(e)});
const lines = [];

let rangeList = new Set();
for(let i=3; i<3+m; i++){
    let temp = input[i].split(' ').map(e=>{return parseInt(e)});
    rangeList.add(temp[0]-1); rangeList.add(temp[1]);
    lines.push(temp);
}
rangeList = Array.from(rangeList).sort((a,b)=>{return b-a});

let absent = new Set();

targets.forEach(target=>{
    if (sleeps.includes(target))
        return;
    else{
        for(let i=1; i<=Math.floor(rangeList[0]/target); i++){
            if (sleeps.includes(i*target) === false)
                absent.add(i*target);
        }
    }
});

absent = Array.from(absent).sort((a,b)=>{return a-b});

console.log(absent);
const preSumList = [];
preSumList[rangeList[0]] = absent.length;

let target = rangeList.pop();
for(let i=0; i<absent.length; i++){
    if (absent[i] > target){
        preSumList[target] = i;
        target  = rangeList.pop();
        if (target.length == 0) break;
    }
};
console.log(preSumList);

lines.forEach(([start,end])=>{
    console.log(n-(preSumList[end]-preSumList[start-1]));
});