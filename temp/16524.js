let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\r\n");

let list = {};
for(let i=1; i<=parseInt(input[0]); i++){
    let split = input[i].split('@');
    split[0] = split[0].split('+')[0].split('.').join('');
    list[split[0]+'@'+split[1]] = true;
}
console.log(Object.keys(list).length);