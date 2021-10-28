let fs = require('fs');
let N = parseInt(fs.readFileSync('input.txt').toString());
//'/dev/stdin'

let res = 0;

while(true){
    if (N%5 == 0){
        res += N/5;
        break;
    }
    N -= 3;
    if (N < 0){
        res = -1;
        break;
    }
    res += 1;
};

console.log(res);