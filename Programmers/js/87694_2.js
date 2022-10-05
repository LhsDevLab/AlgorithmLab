function solution(rectangle, characterX, characterY, itemX, itemY) {
	let answer = Infinity;
	const dirSet = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];
	const SIZE = 11;
	const BOARD = Array.from({ length: SIZE }, () =>
		Array.from({ length: SIZE }, () => new Set())
	);

	for (let [a, b, c, d] of rectangle) {
		function switchOn(x, y, targets) {
			for (let e of targets) BOARD[x][y].add(e);
		}
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
	for (let e of BOARD) {
		console.log(
			Array.from(
				e.map((e) =>
					(() => {
						e = Array.from(e);
						while (e.length < 4) {
							e.push(" ");
						}
						return e;
					})().join(",")
				)
			).join(" \t ")
		);
	}
	console.log();
	const stack = [
		{
			x: characterX,
			y: characterY,
			dir: null,
			visited: new Set([characterX + "," + characterY]),
			clone() {
				let res = Object.assign({}, this);
				res.visited = new Set(Array.from(this.visited));
				return res;
			},
		},
	];
	while (stack.length !== 0) {
		const player = stack.pop();
		let [x, y] = [player.x, player.y];
		for (let dir of BOARD[x][y]) {
			let [a, b] = [x + dirSet[dir][0], y + dirSet[dir][1]];
			if (a === itemX && b === itemY) {
				if (answer > player.visited.size + 1) {
					//console.log(player);
				}
				answer = Math.min(answer, player.visited.size);
				continue;
			}
			if (player.visited.has(a + "," + b)) continue;
			let next = player.clone();
			[next.x, next.y, next.dir] = [a, b, dir];
			next.visited.add(a + "," + b);
			stack.push(next);
		}
	}
	console.log(answer);
	return answer;
}

solution(
	[
		[1, 1, 7, 4],
		[3, 2, 5, 5],
		[4, 3, 6, 9],
		[2, 6, 8, 8],
	],
	1,
	3,
	7,
	8
);
