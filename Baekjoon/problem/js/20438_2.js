let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [n,l,q,m] = input[0].split(' ').map(e=>{return parseInt(e)});
const sleeps = input[1].split(' ').map(e=>{return parseInt(e)}); 
const targets = input[2].split(' ').map(e=>{return parseInt(e)});
const lines = [];

for(let i=3; i<3+m; i++){
    lines.push(input[i].split(' ').map(e=>{return parseInt(e)}));
}

while(lines.length > 0){
    const range = lines.shift();
    const tardy = new Set();

    targets.forEach(target=>{
        if (sleeps.includes(target))//target>range[1] || target<range[0] || 
            return;
        else{
            for(let i=Math.ceil(range[0]/target); i<=Math.floor(range[1]/target); i++){
                if (sleeps.includes(i*target) === false)
                    tardy.add(i*target);
            }
        }
    });
    console.log(range[1]-range[0]+1-tardy.size);
}