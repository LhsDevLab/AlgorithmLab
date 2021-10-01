let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let n = parseInt(input.shift());

for(n; n>0;n--){
    const [w,h,k] = input.shift().split(' ').map(e=>{return parseInt(e)});
    const target = [];
    const board = [];
    let res = 0;

    function checkAndAdd(stack,[x,y]){
        if (x < 0 || y < 0 || x >= w || y >= h)
            return;
        stack.push([x,y])
    }
    function addAdjacent(stack,[x,y]){
        checkAndAdd(stack,[x-1,y]);
        checkAndAdd(stack,[x+1,y]);
        checkAndAdd(stack,[x,y+1]);
        checkAndAdd(stack,[x,y-1]);
    }
    for(let i=0; i<w; i++){
        board[i] = [];
    }
    
    for(let i=0; i<k; i++){
        const [x,y] = input.shift().split(' ').map(e=>{return parseInt(e)});
        target.push([x,y]);
        board[x][y] = true;
    }
    
    while(target.length > 0){
        const [x,y] = target.pop();
        if (board[x][y] === undefined) continue;
        else {
            const stack = [];
            res += 1;
            addAdjacent(stack,[x,y]);
            while(stack.length > 0){
                const [x,y] = stack.pop();
                if (board[x][y] === undefined) continue;
                else{
                    board[x][y] = undefined;
                    addAdjacent(stack,[x,y]);
                }
            }
        }
    };
    console.log(res);
}
