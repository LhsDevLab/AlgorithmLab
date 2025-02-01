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

function solution(params) {
	function getOffset(idx, offset) {
		return params[(idx + offset) % params.length];
	}
	function makeNext(tier) {
		const next = tierData[tier].map((e, i) => {
			const res = e + getOffset(i, tier);
			cases.add(res);
			return res;
		});
		tierData[tier + 1] = next;
	}
	const cases = new Set(params);
	const tierData = { 1: params };

	for (let i = 1; i < params.length - 1; i++) makeNext(i);

	return cases.size + 1;
}

/*------------------------------------*/
const cases = [[[7, 9, 1, 1, 4]]];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
