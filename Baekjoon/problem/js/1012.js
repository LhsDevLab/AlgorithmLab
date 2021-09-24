let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let n = parseInt(input.shift());

for(n; n>0;n--){
    const [w,h,k] = input.shift().split(' ').map(e=>{return parseInt(e)});
    const stack = [];
    const idxing_x = [];
    const idxing_y = [];

    for(let i=0; i<w; i++){
        idxing_x[i] = new Set();
    }
    for(let i=0; i<h; i++){
        idxing_y[i] = new Set();
    };
    
    for(let i=0; i<k; i++){
        const [x,y] = input.shift().split(' ').map(e=>{return parseInt(e)});
        stack.push([x,y]);
        idxing_x[x].add(y);
        idxing_y[y].add(x);
    }

    console.log(stack);
    console.log(idxing_x);
    console.log(idxing_y);
}
