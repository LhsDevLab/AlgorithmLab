const fs = require("fs");
const OUTPUT = "OUTPUT";

fs.writeFileSync(OUTPUT, "", "utf8");
console.log = new Proxy(console.log, {
	apply: function (target, thisArg, argumentsList) {
		target.apply(thisArg, argumentsList);

		const logMessage = argumentsList.join(" ") + "\n";
		fs.appendFileSync(OUTPUT, logMessage, "utf8");
		return true;
	},
});

function solution(name, yearning, photo) {
	const scoreMap = Object.fromEntries(
		name.map((e, idx) => [e, yearning[idx]])
	);
	return photo.map((e) => e.reduce((a, c) => (a += scoreMap[c] ?? 0), 0));
}

console.log(
	solution(
		["may", "kein", "kain", "radi"],
		[5, 10, 1, 3],
		[
			["may", "kein", "kain", "radi"],
			["may", "kein", "brin", "deny"],
			["kon", "kain", "may", "coni"],
		]
	)
);
