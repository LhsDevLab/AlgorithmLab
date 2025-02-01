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

function solution(k, tangerine) {
	let answer = 0;

	let CNT = (() => {
		const res = {};
		for (const size of tangerine) {
			res[size] = res[size] ? res[size] + 1 : 1;
		}
		return res;
	})();

	CNT = (() => {
		const res = Object.values(CNT);

		return res.sort((a, b) => a - b);
	})();

	let totSize = 0;
	while (totSize < k) {
		answer += 1;
		totSize += CNT.pop();
	}

	return answer;
}

/*------------------------------------*/
const cases = [
	[6, [1, 3, 2, 5, 4, 5, 2, 3]],
	[4, [1, 3, 2, 5, 4, 5, 2, 3]],
	[2, [1, 1, 1, 1, 2, 2, 2, 3]],
	[2, [1, 2, 2, 2]],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
