let [A, B, N] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((e) => parseInt(e));
//require('fs').readFileSync('/dev/stdin').toString();
A = (A % B) * 10;
function next() {
  let res;
  if (A < B) {
    A *= 10;
    res = 0;
  } else {
    res = parseInt(A / B);
    A = (A % B) * 10;
  }
  return res;
}
for (let i = 1; i < N; i++) next();
console.log(next());
