function solution(game_board, table) {
	let answer = 0;
	table = table.map((e) => e.map((e) => (e == 1 ? 0 : 1)));

	function mold(board, pos) {
		let [rMinus, cMinus] = [Infinity, Infinity];
		let res = [];
		function switchOn(r, c) {
			while (res.length <= r) res.push([]);
			res[r][c] = 1;
		}
		let stack = [pos];
		while (stack.length !== 0) {
			let [r, c] = stack.pop();
			if (r < rMinus) rMinus = r;
			if (c < cMinus) cMinus = c;
			switchOn(r, c);
			board[r][c] = 1;
			for (let [a, b] of [
				[r + 1, c],
				[r, c + 1],
				[r - 1, c],
				[r, c - 1],
			]) {
				if (board[a] !== undefined && board[a][b] === 0)
					stack.push([a, b]);
			}
		}
		const width = Math.max(...res.map((e) => e.length));
		res = res.map((e) => {
			while (e.length < width) e.push(undefined);
			return e;
		});
		for (let i = 0; i < rMinus; i++) res.shift();
		res.forEach((e) => {
			for (let i = 0; i < cMinus; i++) e.shift();
		});
		res.forEach((e) => {
			for (let i = 0; i < e.length; i++) {
				if (e[i] === undefined) e[i] = 0;
			}
		});
		return res;
	}
	function scanBoard(board) {
		let res = [];
		for (let r = 0; r < board.length; r++) {
			for (let c = 0; c < board[0].length; c++) {
				if (board[r][c] === 0) res.push(mold(board, [r, c]));
			}
		}
		return res;
	}
	function toLine(board, type) {
		let res = "";
		const [h, w] = [board.length, board[0].length];

		switch (type) {
			case 0:
				res = board.map((e) => e.join("")).join(" ");
				break;
			case 1:
				for (let j = w - 1; j >= 0; j--) {
					for (let i = 0; i < h; i++) {
						res += board[i][j];
					}
					res += " ";
				}
				break;
			case 2:
				for (let i = h - 1; i >= 0; i--) {
					for (let j = w - 1; j >= 0; j--) {
						res += board[i][j];
					}
					res += " ";
				}
				break;
			case 3:
				for (let j = 0; j < w; j++) {
					for (let i = h - 1; i >= 0; i--) {
						res += board[i][j];
					}
					res += " ";
				}
				break;
		}
		return res.trim();
	}
	let [gamePieces, tablePieces] = [scanBoard(game_board), scanBoard(table)];
	tablePieces = tablePieces.map(
		(e) => new Set([toLine(e, 0), toLine(e, 1), toLine(e, 2), toLine(e, 3)])
	);
	for (let piece of gamePieces) {
		piece = toLine(piece, 0);
		for (let i = 0; i < tablePieces.length; i++) {
			const target = tablePieces[i];
			if (target === null) continue;
			if (target.has(piece)) {
				let e = Array.from(tablePieces[i]).pop();
				for (let i = 0; i < e.length; i++) {
					if (e.charAt(i) === "1") answer += 1;
				}
				tablePieces[i] = null;
				break;
			}
		}
	}
	return answer;
}

solution(
	[
		[1, 1, 0, 0, 1, 0],
		[0, 0, 1, 0, 1, 0],
		[0, 1, 1, 0, 0, 1],
		[1, 1, 0, 1, 1, 1],
		[1, 0, 0, 0, 1, 0],
		[0, 1, 1, 1, 0, 0],
	],
	[
		[1, 0, 0, 1, 1, 0],
		[1, 0, 1, 0, 1, 0],
		[0, 1, 1, 0, 1, 1],
		[0, 0, 1, 0, 0, 0],
		[1, 1, 0, 1, 1, 0],
		[0, 1, 0, 0, 0, 0],
	]
);
