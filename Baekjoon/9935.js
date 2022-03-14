const [str,bomb] = require('fs').readFileSync('input.txt').toString().split("\r\n");
//readFileSync('/dev/stdin').toString().split("\n"),
let stack = [];
for (let c of str){
    let top = stack[stack.length-1];
    if (Number.isInteger(top)){
        if (c == bomb.charAt(top)){
            let temp = stack.pop()+1;
            if (temp != bomb.length)
                stack.push(temp);
            continue;
        }
    }
    if (c == bomb.charAt(0)){
        if (bomb.length != 1)
            stack.push(1);
    }else{
        stack.push(c);
    }
}
let res = [];
for (let e of stack){
    if (Number.isInteger(e)){
        for (let i=0; i<e; i++)
            res.push(bomb[i]);
    }else{
        res.push(e);
    }
}
console.log(res.join(''));