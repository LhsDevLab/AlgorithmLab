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

function solution(n, words) {
	var answer = [0, 0];
	const revealed = new Set();

	const TURN_INFO = {
		cycle: 1,
		mem_num: 1,
		next() {
			if (this.mem_num === n) {
				this.cycle += 1;
				this.mem_num = 1;
			} else {
				this.mem_num += 1;
			}
		},
	};
	let last_char = words[0].charAt(0);
	for (const word of words) {
		const [s, e] = [word.charAt(0), word.charAt(word.length - 1)];
		if (last_char !== s || revealed.has(word)) {
			answer = [TURN_INFO.mem_num, TURN_INFO.cycle];
			break;
		}
		revealed.add(word);
		last_char = e;
		TURN_INFO.next();
	}

	return answer;
}

/*------------------------------------*/
const cases = [
	[
		3,
		[
			"tank",
			"kick",
			"know",
			"wheel",
			"land",
			"dream",
			"mother",
			"robot",
			"tank",
		],
	],
	[
		5,
		[
			"hello",
			"observe",
			"effect",
			"take",
			"either",
			"recognize",
			"encourage",
			"ensure",
			"establish",
			"hang",
			"gather",
			"refer",
			"reference",
			"estimate",
			"executive",
		],
	],
	[2, ["hello", "one", "even", "never", "now", "world", "draw"]],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
