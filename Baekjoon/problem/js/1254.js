const S = require("fs").readFileSync("input.txt").toString().trim();
//require('fs').readFileSync('/dev/stdin').toString();
function scan(s, e) {
	while (s < e) {
		if (S.charAt(s) != S.charAt(e)) return false;
		s += 1;
		e -= 1;
	}
	return true;
}
let [s, e] = [0, S.length - 1];
let res = S.length;
while (!scan(s, e)) {
	s += 1;
	res += 1;
}
console.log(res);
