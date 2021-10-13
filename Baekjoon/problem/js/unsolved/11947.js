const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line)=>{
    input.push(parseInt(line));
    if (input.length == input[0]+1){
        rl.close();
    }
}).on('close', ()=>{
    function F(n){
        let res = 10;
        while(res <= n)
            res *= 10;
        return res-1-n;
    }
    input.shift();
    input.forEach(e=>{
        let target = 10;
        while(target <= e)
            target *= 10;
        target /= 2;
        if (e < target) target = e;
        console.log(target*F(target));
    });    
});