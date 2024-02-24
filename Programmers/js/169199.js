function solution(board) {
	let answer = Infinity;
	const [H, W] = [board.length, board[0].length];

	board = ["D".repeat(W), ...board, "D".repeat(W)].map((e) => [
		"D",
		...Array.from(e),
		"D",
	]);

	const state = {
		G: [],
		DIR: {
			N: [-1, 0],
			E: [0, 1],
			S: [1, 0],
			W: [0, -1],
		},
		minCost: Array.from({ length: board.length }, () =>
			Array.from({ length: board[0].length }, () => Infinity)
		),
		next(R, dir) {
			dir = this.DIR[dir];
			let [x, y] = R;
			while (true) {
				[x, y] = [x + dir[0], y + dir[1]];
				if (board[x][y] === "D") return [x - dir[0], y - dir[1]];
			}
		},
	};

	let R = [0, 0];
	for (let x = 0; x < H + 2; x++) {
		for (let y = 0; y < W + 2; y++) {
			const tile = board[x][y];
			if (tile === "R") {
				R = [x, y];
			} else if (tile === "G") {
				state.G = [x, y];
			}
		}
	}

	function travel(cnt, R) {
		const tile = board[R[0]][R[1]];
		const cost = state.minCost[R[0]][R[1]];
		if (tile === "G") {
			answer = answer > cnt ? cnt : answer;
			return;
		} else if (tile === "*") {
			if (cost > cnt) {
				state.minCost[R[0]][R[1]] = cnt;
			} else {
				return;
			}
		}
		for (const dir of "NESW") {
			board[R[0]][R[1]] = "*";
			travel(cnt + 1, state.next(R, dir));
		}
	}
	travel(0, R);
	return answer === Infinity ? -1 : answer;
}
