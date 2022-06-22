const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readLine: function () {
		return parseInt(this.input[this.index++]);
	},
	readList: function () {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const N = reader.readLine();
const arr = reader.readList();
const res = Array.from({ length: N }, () => Infinity);
for (let i = 0; i < N; i++) {
	let count = arr[i];
	let j = 0;
	for (; count != 0; j++) {
		if (res[j] > i) count -= 1;
	}
	while (res[j] != Infinity) j += 1;
	res[j] = i;
}
console.log(res.map((e) => e + 1).join(" "));
