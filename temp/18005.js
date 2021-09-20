let fs = require('fs');
let input = 6;//fs.readFileSync('/dev/stdin').toString().split(' ');

let res = -1;

if (input%2 == 1)
    res = 0;
else{
    input /= 2;
    if (input%2 == 1)
        res = 1;
    else
        res = 2;
}

console.log(res);