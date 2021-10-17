let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();
//let input = fs.readFileSync('/dev/stdin').toString();

let count = parseInt(input);
let res = '';
let str = '*';
for(let i=0; i<count; i++){
    res += str+'\n';
    str += '*';
}
console.log(res.substr(0,res.length-1));