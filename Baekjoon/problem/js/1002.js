let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const k = parseInt(input[0]);
const cases = input.slice(1,k+1).map(e=>{
    return e.split(' ').map(e=>{return parseInt(e)});
});

function distance(a,b){
    return Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2);
}
cases.forEach(e=>{
    let a = e.slice(0,3);
    let b = e.slice(3,6);
    let dist = distance(a,b);

    let [long,short] = a[2]>b[2] ? [a,b] : [b,a];
    
    if (JSON.stringify(long) == JSON.stringify(short)){
        console.log(-1);
    }
    else if (dist >= long[2]){
        let temp = long[2]+short[2];
        if (dist > temp)
            console.log(0);
        else if (dist == temp)
            console.log(1);
        else
            console.log(2);
    }
    else{
        let temp = dist+short[2];
        if (long[2]<temp)
            console.log(2)
        else if(long[2] == temp)
            console.log(1)
        else
            console.log(0)
    }
});