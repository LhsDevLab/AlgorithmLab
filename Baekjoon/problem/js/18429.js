const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readList: function () {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const [N, K] = reader.readList();
let res = 0;
function travel(offset, list) {
	if (list.filter((e) => e !== null).length == 0) {
		res += 1;
		return;
	}
	for (let i in list) {
		let v = list[i];
		if (v === null) continue;
		if (offset + v >= 0) {
			list[i] = null;
			travel(offset + v, list);
		}
		list[i] = v;
	}
}
travel(
	0,
	reader.readList().map((e) => e - K)
);

console.log(res);
