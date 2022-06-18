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
const Costs = Array.from({ length: N }, () => reader.readList());
console.log(Costs);
