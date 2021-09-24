let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const n = parseInt(input[0]);
const infos = input.slice(1).map(e=>{
    return e.split(' ').slice(1).map(e=>{return parseInt(e)}).sort((a,b)=>{return b-a});
});

for(let i=0; i<n;i++){
    let max = infos[i][0];
    let min = infos[i][0];
    let gap = 0;
    infos[i].reduce((a,c)=>{
        if (a-c > gap) gap = a-c;
        if (c > max) max = c;
        if (c < min) min = c;
        return c;
    });
    console.log("Class "+(i+1)+" ");
    console.log(`Max ${max}, Min ${min}, Largest gap ${gap}`);
}