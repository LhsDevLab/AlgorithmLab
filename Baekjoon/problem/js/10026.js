let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input[0]);
let brd = input.slice(1,N+1).map(e=>e.split(""));

function countCluster(types){
    let res = 0;
    let visited = Array.from({length:N},_=>Array.from({length:5},_=>false));
    function scan(r,c){
        let type;
        for (let t of types){
            if (t.test(brd[r][c])){
                type = t;
                break;
            }
        }
        let stack = [[r,c]];
        while (stack.length != 0){
            let [r,c] = stack.pop();
            visited[r][c] = true;
            for (let [i,j] of [[r+1,c],[r-1,c],[r,c+1],[r,c-1]]){
                try{
                    if (!visited[i][j] && type.test(brd[i][j]))
                        stack.push([i,j]);
                }catch(e){}
            }
        }
    }
    for (let r = 0; r<N; r++){
        for (let c = 0; c<N; c++){
            if (!visited[r][c]){
                scan(r,c);
                res += 1;
            }
        }
    }
    return res;
}

console.log(countCluster([/[R]/,/[G]/,/[B]/]));
console.log(countCluster([/[RG]/,/[B]/]));