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
    let line = [];
    for(let i=range[0]; i<=range[1]; i++)
        line.push(i);
    line = new Set(line);

    targets.forEach(target=>{
        const size = target;
        while(true){
            if (sleeps.includes(target) === true)
                break;
            else{
                if (target >= range[0] && target <= range[1]){
                    line.delete(target);
                    target += size;
                }
                else
                    break;
            }
        }
    });
    console.log(line.size);
}