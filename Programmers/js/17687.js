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

function solution(n, t, m, p) {
	let string_concat = "";
	for (let num = 0; string_concat.length < m * t; num++) {
		string_concat = string_concat.concat(num.toString(n));
	}
	const res = [];
	let idx = p - 1;
	while (res.length < t) {
		res.push(string_concat.charAt(idx));
		idx += m;
	}
	return res.join("").toUpperCase();
}

/*------------------------------------*/
const cases = [
	[2, 4, 2, 1],
	[16, 16, 2, 1],
	[16, 16, 2, 2],
	[15, 1000, 100, 57],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
