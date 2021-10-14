let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [N,M] = input[0].split(' ').map(e=>parseInt(e));
let arr = input[1].split(' ').map(e=>parseInt(e));
let Cases = input.slice(2,2+M).map(e=>e.split(' ').map(e=>parseInt(e)));

let preSum = [0];
arr.reduce((a,c)=>{
    preSum.push(a);
    return a+c;
});
preSum.push(preSum[preSum.length-1]+arr[arr.length-1]);

let res = '';
Cases.forEach(([start, end])=>{
    res += preSum[end]-preSum[start-1]+'\n'
});
res = res.substring(0,res.length-1);
console.log(res);