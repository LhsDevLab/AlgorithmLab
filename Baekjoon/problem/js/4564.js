let fs = require('fs');

let input = 
`95
396
28
4
40
0`.split('\n');//fs.readFileSync('/dev/stdin').toString().split(' ');

let numbers = [];
for(let i=0; i<input.length; i++){
    if (input[i] == '0')
        break;
    numbers[i] = parseInt(input[i]);
}

function makeNew(num){
    let res = 1;
    while(num != 0){
        res *= num%10;
        num = parseInt(num/10);
    };
    return res;
}

numbers.forEach(num=>{
    let res = `${num} `;
    while(num > 9){
        num = makeNew(num);
        res += num+' ';
    };
    console.log(res);
});