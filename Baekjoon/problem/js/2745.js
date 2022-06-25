let [N, B] = require("fs").readFileSync("input.txt").toString().split(" ");
//require('fs').readFileSync('/dev/stdin').toString().split("\n"),
N = N.split("");
B = parseInt(B);
const dict = {};
for (let i = 0; i < 10; i++) dict[i] = i;
for (let i = 10; i < 36; i++) dict[String.fromCharCode(i + 55)] = i;
let res = 0;
for (let i = 0; N.length != 0; i++) {
	res += Math.pow(B, i) * dict[N.pop()];
}
console.log(res);
