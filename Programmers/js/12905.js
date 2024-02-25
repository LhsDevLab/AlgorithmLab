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

function solution(board) {
	const [HEIGHT, WIDTH] = [board.length, board[0].length];
	const DP = board.map((e) => e.slice());
	let res = DP[0][0];
	for (let i = 1; i < HEIGHT; i++) {
		for (let j = 1; j < WIDTH; j++) {
			if (DP[i][j] !== 1) {
				continue;
			}
			DP[i][j] =
				Math.min(DP[i - 1][j - 1], DP[i - 1][j], DP[i][j - 1]) + 1;
			if (DP[i][j] > res) res = DP[i][j];
		}
	}
	return res * res;
}
/*------------------------------------*/
const cases = [
	[
		[0, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
	],
	[[1]],
	//Array.from({ length: 1000 }, () => Array.from({ length: 1000 }, () => 0)),
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(cases[idx]));
}
