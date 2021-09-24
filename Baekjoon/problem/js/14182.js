let fs = require('fs');
let input = 
`10000
50000
2000000
7500000
0`.split('\n');//fs.readFileSync('/dev/stdin').toString().split(' ');

let incomes = [];
for(let i=0; i<input.length; i++){
    if (input[i] == '0')
        break;
    incomes[i] = parseInt(input[i]);
}
function getTax(income){
    if (income <= 1000000){
        return 0;
    }
    else if (income <= 5000000){
        return income/10;
    }
    else{
        return income/5;
    }
}

incomes.forEach(e=>{
    console.log(e-getTax(e));
});
