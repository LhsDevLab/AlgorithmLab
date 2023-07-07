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

function solution(targets) {
	let answer = 0;
	targets.sort((a, b) => a[1] - b[1]);
	let last = -1;
	for (const [s, e] of targets) {
		if (s >= last) {
			last = e;
			answer += 1;
		}
	}
	return answer;
}

console.log(
	solution([
		[4, 5],
		[4, 8],
		[10, 14],
		[11, 13],
		[5, 12],
		[3, 7],
		[1, 4],
	])
);
