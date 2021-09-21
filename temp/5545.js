let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [dough_p, toping_p] = input[1].split(' ').map(e=>{return parseInt(e)});
const toppings = input.slice(3,3+parseInt(input[0])).map(e=>{return parseInt(e)}).sort((a,b)=>{return a-b});

let totalCost = dough_p;
let totalCal = parseInt(input[2]);

let CPC_old = totalCal/totalCost;
while(toppings.length > 0){
    let newTopping = toppings.pop();
    totalCost += toping_p;
    totalCal += newTopping;
    let CPC = totalCal/totalCost;
    if (CPC < CPC_old)
        break;
    CPC_old = CPC;
}
console.log(Math.floor(CPC_old));
