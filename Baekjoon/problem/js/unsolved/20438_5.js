let fs = require('fs');
let input = fs.readFileSync('input2.txt').toString().split("\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");
console.time('time');
const [n,l,q,m] = input[0].split(' ').map(e=>{return parseInt(e)});
const sleeps = input[1].split(' ').map(e=>{return parseInt(e)}); 
const targets = input[2].split(' ').map(e=>{return parseInt(e)});
const ranges = [];
let start = Infinity; let end = 0;
for(let i=0; i<m; i++){
    ranges[i] = input[3+i].split(' ').map(e=>{return parseInt(e)});
    if (ranges[i][0] < start)
        start = ranges[i][0];
    if (ranges[i][1] > end)
        end = ranges[i][1]
}
const checkList = [];
for(let i=3; i<=end;i++){
    checkList[i] = true;
}
const nonsleep = [];

console.timeEnd('time');