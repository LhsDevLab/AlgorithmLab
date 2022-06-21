const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readList: function () {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const [A, B] = reader.readList();
const primeGenerator = {
	num: 1,
	list: [],
	next() {
		while (!this.isPrime(++this.num));
		this.list.push(this.num);
		return this.num;
	},
	isPrime(num) {
		const rt = Math.sqrt(num);
		for (let e of this.list) {
			if (e > rt) break;
			if (num % e == 0) return false;
		}
		return true;
	},
};
while (primeGenerator.next() < B / 2);
const primeSet = new Set(primeGenerator.list);
function isUnderPrime(num) {
	let res = 0;
	for (let e of primeGenerator.list) {
		while (num % e == 0 && num != 0) {
			res += 1;
			num /= e;
		}
	}
	return primeSet.has(res) ? true : false;
}
let res = 0;
for (let i = A; i <= B; i++) {
	if (isUnderPrime(i)) res += 1;
}
console.log(res);
