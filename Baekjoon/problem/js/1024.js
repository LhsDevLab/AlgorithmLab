let [N,L] = [6, 6]
//require('fs').readFileSync('/dev/stdin').toString().split(" ").map(e => parseInt(e));
let count = 1;
for (; count<L; count++)
    N -= count;
while(N%count > 0){
    N -= count;
    if (N < count || count == 100 || L > count){
        N = -1;
        break;
    }
    count += 1;
}
if (N < 0)
    console.log(-1);
else{
    N /= count;
    console.log(Array.from({length:count}, (_,i)=>N+i).join(' '));
}