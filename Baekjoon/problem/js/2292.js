let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = 1

let preSum = [1];
let idx = 1;
if (N != 1)
    while(true){
        let newOne = preSum[idx-1]+6*idx;
        idx += 1;
        if (newOne >= N)
            break;
        preSum.push(newOne);
    };
console.log(idx);