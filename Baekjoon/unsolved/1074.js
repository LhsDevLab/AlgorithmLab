let [N,r,c] = require('fs').readFileSync('input.txt').toString().split(' ').map(e=>parseInt(e));
let answer = 0;
function isInside(start, end){
    if (start[0]<=r && end[0] >= r && start[1]<= c && end[1] >= c)
        return true;
    return false;
}
function func(start,N){
    if (N == 0) return ;
    let len = 2**(N-1);
    let args = [
        [[0,0],[len-1,len-1]],
        [[0,len],[len-1,len*2-1]],
        [[len,0],[len*2-1,len-1]],
        [[len,len],[len*2-1,len*2-1]],
    ];
    for (let [s,e] of args){
        s[0] += start[0];s[1] += start[1];
        e[0] += start[0];e[1] += start[1];
        if (isInside(s,e)){
            func(s,N-1);
            return;
        }
        else
            answer += len**2;
    }
}

func([0,0],N);
console.log(answer);