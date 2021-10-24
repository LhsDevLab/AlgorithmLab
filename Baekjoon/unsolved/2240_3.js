let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [t,w] = input[0].split(' ').map(e=>{return parseInt(e)});
const order = input.slice(1);

const massList = [];
let res = t;
let total = {'1':0, '2':0};
(()=>{
    let loc = '1';
    let count = 0;
    
    order.forEach(e=>{
        if (e != loc){
            total[loc] += count;
            loc = e;
            massList.push(count);
            count = 1;
        }
        else
            count += 1;
    });
    total[loc] += count;
    massList.push(count);
})();
if (w == 0) {
    console.log(total['1']);
    return;
};

const lastMass = massList[massList.length-1];
massList.shift();

massList.sort((a,b)=>{return a-b})
let total_move = massList.length-1-w;

while(total_move > 0){
    let min = massList.shift();
    if (min == lastMass && !massList.includes(lastMass)){
        res -= min;
        total_move -= 1;
    }
    else{
        res -= min;
        total_move -= 2;
    }
}

console.log(res);



