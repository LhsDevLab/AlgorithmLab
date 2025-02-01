const fs = require("fs");
const OUTPUT = "OUTPUT";

fs.writeFileSync(OUTPUT, "", "utf8");
console.log = new Proxy(console.log, {
	apply: function (target, thisArg, argumentsList) {
		target.apply(thisArg, argumentsList);

		const logMessage =
			argumentsList.map((e) => JSON.stringify(e, null, 2)).join(" ") +
			"\n";
		fs.appendFileSync(OUTPUT, logMessage, "utf8");
		return true;
	},
});
/*------------------------------------*/

function solution(want, number, discount) {
	let answer = 0;
	number = Object.fromEntries(want.map((e, i) => [e, number[i]]));
	const stack = {};
	let [start, end] = [0, 9];
	function add(item) {
		if (stack[item] === undefined) stack[item] = 1;
		else stack[item] += 1;
	}
	function move() {
		const [A, B] = [discount[start++], discount[++end]];
		if (B === undefined) return false;
		add(B);
		stack[A] -= 1;
		return true;
	}
	function check() {
		for (const key of want) {
			if (stack[key] !== number[key]) return;
		}
		answer += 1;
		return;
	}
	for (let i = start; i <= end; i++) {
		add(discount[i]);
	}
	check();
	while (move()) {
		check();
	}
	return answer;
}
/*------------------------------------*/
const cases = [
	[
		["banana", "apple", "rice", "pork", "pot"],
		[3, 2, 2, 2, 1],
		[
			"chicken",
			"apple",
			"apple",
			"banana",
			"rice",
			"apple",
			"pork",
			"banana",
			"pork",
			"rice",
			"pot",
			"banana",
			"apple",
			"banana",
		],
	],
	[
		["apple"],
		[10],
		[
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
		],
	],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
