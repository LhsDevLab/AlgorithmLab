function solution(rectangle, characterX, characterY, itemX, itemY) {
	let answer = 0;
	const dirSet = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];
	const BOARD = Array.from({ length: 11 }, () =>
		Array.from({ length: 11 }, () => [0, 0, 0, 0, false])
	);
	function switchOn(x, y, targets) {
		BOARD[x][y][4] = true;
		for (let e of targets) BOARD[x][y][e] = 1;
	}
	for (let [a, b, c, d] of rectangle) {
		switchOn(a, b, [1, 2]);
		switchOn(a, d, [2, 3]);
		switchOn(c, b, [0, 1]);
		switchOn(c, d, [0, 3]);
		for (let i = a + 1; i < c; i++) {
			switchOn(i, b, [0, 2]);
			switchOn(i, d, [0, 2]);
		}
		for (let i = b + 1; i < d; i++) {
			switchOn(a, i, [1, 3]);
			switchOn(c, i, [1, 3]);
		}
	}
	const player = {
		x: characterX,
		y: characterY,
		dir: (() => {
			for (let i = 0; ; i++)
				if (BOARD[characterX][characterY][i] == 1) return (i + 1) % 4;
		})(),
		move() {
			this.dir = (this.dir + 3) % 4;

			if (BOARD[this.x][this.y][4] === false) return false;
			while (true) {
				if (BOARD[this.x][this.y][this.dir] === 1) {
					BOARD[this.x][this.y][4] = false;
					this.x += dirSet[this.dir][0];
					this.y += dirSet[this.dir][1];
					return true;
				}
				this.dir = (this.dir + 1) % 4;
			}
		},
	};
	function print() {
		for (let e of BOARD) {
			console.log(e.join("\t"));
		}
		console.log();
	}
	for (let i = 1; player.move(); i++) {
		console.log(player);
		print();
		if (player.x == itemX && player.y == itemY) {
			answer = i;
		}
		if (player.x == characterX && player.y == characterY) {
			answer = Math.min(answer, i - answer);
		}
	}
	return answer;
}

console.log(
	solution(
		[
			[1, 1, 8, 4],
			[2, 2, 4, 9],
			[3, 6, 9, 8],
			[6, 3, 7, 7],
		],
		9,
		7,
		6,
		1
	)
);
