let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

console.log(input);
let count = [0,0];
for(let i=0; i<input.length; i++){
    if (input.charAt(i) == ')'){
        if (count[0] > 0) count[0] -= 1;
        else    count[1] += 1;
    }
    else
        count[0] += 1;
}
console.log(count[0]+count[1]);