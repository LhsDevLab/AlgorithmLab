let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let max = 0;
let N = parseInt(input[0]);
let cases = input.slice(1,N+1).map(e=>{
    let temp = parseInt(e);
    if (temp > max) max = temp;
    return temp;
});
let preset = [[1,0],[0,1]];

function add(a,b){
    return [a[0]+b[0],a[1]+b[1]];
}
for(let i=2; i<=max; i++){
    preset[i] = add(preset[i-1],preset[i-2]);
};

cases.forEach(e=>{
    console.log(preset[e].join(' '));
});