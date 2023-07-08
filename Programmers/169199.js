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
/*------------------------------------*/

function solution(board) {
	let answer = Infinity;
	const [H, W] = [board.length, board[0].length];
	board = ["D".repeat(W), ...board, "D".repeat(W)].map((e) => [
		"D",
		...Array.from(e),
		"D",
	]);
	const DIR = {
		N: [-1, 0],
		E: [0, 1],
		S: [1, 0],
		W: [0, -1],
	};
	const state = {
		G: [],
		R: [],
		next(dir) {
			dir = DIR[dir];
			let [x, y] = this.R;
			while (true) {
				[x, y] = [x + dir[0], y + dir[1]];
				if (board[x][y] === "D") return [x - dir[0], y - dir[1]];
			}
		},
	};
	for (let x = 0; x < H + 2; x++) {
		for (let y = 0; y < W + 2; y++) {
			const tile = board[x][y];
			if (tile === "R") {
				state.R = [x, y];
			} else if (tile === "G") {
				state.G = [x, y];
			}
		}
	}
	function travel(cnt, R) {
		console.log(board.join("\n"));
		const tile = board[R[0]][R[1]];
		if (tile === "G") {
			answer = answer > cnt ? cnt : answer;
			return;
		} else if (tile === "*") {
			return;
		}
		state.R = R;
		for (const dir of "NESW") {
			board[R[0]][R[1]] = "*";
			travel(cnt + 1, state.next(dir));
		}
	}
	travel(0, state.R);
	return answer;
}

/*------------------------------------*/
console.log(solution([".D.D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
