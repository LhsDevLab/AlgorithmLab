let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [N,M] = input[0].split(" ").map(e=>parseInt(e));
let maze = input.slice(1, N+1).map(e=>e.split(""));
let distance = Array.from({length:N},_=>Array.from({length:M},_=>N*M));
distance[0][0] = 1;
let stack = [[0,0]];

function spread(r,c){
    let temp = [[r+1,c],[r-1,c],[r,c+1],[r,c-1]];
    let res = [];
    for (let [a,b] of temp){
        try{
            if (maze[a][b] == "1")
                res.push([a,b]);
        }catch{}
    }
    return res;
}
while (stack.length != 0){
    let [r,c] = stack.pop();
    num = distance[r][c] + 1;
    for (let [a,b] of spread(r,c)){
        if (distance[a][b] > num){
            distance[a][b] = num;
            stack.push([a,b]);
        }
    }
}

console.log(distance[N-1][M-1]);