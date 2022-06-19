const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readItem() {
		return parseInt(this.input[this.index++]);
	},
	readList() {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const [N, arr, S] = [reader.readItem(), reader.readList(), reader.readItem()];
