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
	const preSum = Array.from({ length: HEIGHT }, () =>
		Array.from({ length: WIDTH }, () => 0)
	);
	for (const i in board) {
		board[i].reduce((e, a, idx) => {
			a = a + e;
			preSum[i][idx] = a;
			return a;
		}, 0);
	}
	for (let i = 1; i < HEIGHT; i++) {
		for (const j in board[i]) {
			preSum[i][j] += preSum[i - 1][j];
		}
	}
	function isSquare(start, end) {
		const [si, sj] = start.map((e) => e - 1);
		const [ei, ej] = end;
		if (ei === si + 1 && ej === sj + 1) return board[ei][ej] === 1;
		function get(i, j) {
			try {
				return preSum[i][j] ? preSum[i][j] : 0;
			} catch {
				return 0;
			}
		}
		return (
			get(ei, ej) - get(ei, sj) - get(si, ej) + get(si, sj) ===
			(ei - si) * (ej - sj)
		);
	}
	let size = Math.min(HEIGHT, WIDTH) + 1;
	while (--size > 1) {
		for (let i = 0; i <= HEIGHT - size; i++) {
			for (let j = 0; j <= WIDTH - size; j++) {
				if (isSquare([i, j], [i + size - 1, j + size - 1])) {
					return size * size;
				}
			}
		}
	}
	return preSum[HEIGHT - 1][WIDTH - 1] > 0 ? 1 : 0;
}
/*------------------------------------*/
const cases = [
	Array.from({ length: 1000 }, () => Array.from({ length: 1000 }, () => 0)),
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(cases[idx]));
}
