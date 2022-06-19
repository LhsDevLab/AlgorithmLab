const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readList: function () {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const [N, S] = reader.readList();
const list = reader.readList();
let [s, e] = [0, 0];
let res = Infinity;
let sum = 0;
while (e <= N && s <= e) {
	console.log(s, e, res, sum);
	if (sum < S) {
		sum += list[e];
		e += 1;
	} else {
		sum -= list[s];
		s += 1;
	}
	if (sum >= S) res = res > e - s ? e - s : res;
}
console.log(res == Infinity ? 0 : res);
