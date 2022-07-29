const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readItem: function () {
		return parseInt(this.input[this.index++]);
	},
	readList: function () {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const N = reader.readItem();
const state = reader.readList().map((e) => (e == 1 ? true : false));
const C = reader.readItem();

for (let i = 0; i < C; i++) {
	let [g, num] = reader.readList();
	if (g == 1) {
		for (let i = num - 1; i < N; i += num) {
			state[i] = !state[i];
		}
	} else {
		num -= 1;
		state[num] = !state[num];
		for (let i = 1; 0 <= num - i && N > num + i; i++) {
			if (state[num + i] == state[num - i]) {
				state[num + i] = !state[num + i];
				state[num - i] = !state[num - i];
			} else {
				break;
			}
		}
	}
}
const temp = state.map((e) => (e ? 1 : 0));
let res = "";
for (let i = 0; i < temp.length; i++) {
	if (i % 20 == 0) res += "\n";
	res += temp[i] + " ";
}
console.log(res.trim());
