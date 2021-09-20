let fs = require('fs');

let input = "2 1 2 1 2 1".split(' ');//fs.readFileSync('/dev/stdin').toString().split(' ');

input = input.map(e=>{
    return parseInt(e);
});

const original = [1,1,2,2,2,8];

let res = "";
for(let i=0; i<6; i++){
    res += original[i]-input[i]+" ";
}
console.log(res);