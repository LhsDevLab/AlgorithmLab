let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let N = parseInt(input[0]);

for(let i=1;i<=N;i++){
  let [a,b] = input[i].split(' ').map(e=>parseInt(e));
  let res=1;
  for(let j=0;j<b;j++){
    res = (res*a)%10;
  }
  console.log(res == 0 ? 10 : res);
}
