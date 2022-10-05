function solution(rectangle, characterX, characterY, itemX, itemY) {
	let answer = Infinity;
	const SIZE = 21;
	const BOARD = Array.from({ length: SIZE }, () =>
		Array.from({ length: SIZE }, () => 0)
	);
	[characterX, characterY, itemX, itemY] = [
		characterX,
		characterY,
		itemX,
		itemY,
	].map((e) => e * 2);
	rectangle = rectangle.map((e) => e.map((e) => e * 2));
	for (let [a, b, c, d] of rectangle) {
		for (let i = a; i <= c; i++) {
			BOARD[i][b] = 1;
			BOARD[i][d] = 1;
		}
		for (let i = b; i <= d; i++) {
			BOARD[a][i] = 1;
			BOARD[c][i] = 1;
		}
	}
	// for (let e of BOARD) {
	// 	console.log(e.map((e) => (e == 1 ? "*" : ".")).join(" "));
	// }
	let stack = [[0, 0]];
	BOARD[0][0] = -1;
	while (stack.length !== 0) {
		let [x, y] = stack.pop();
		for (let [a, b] of [
			[x, y + 1],
			[x + 1, y],
			[x, y - 1],
			[x - 1, y],
		]) {
			if (a < 0 || b < 0 || a === SIZE || b === SIZE) continue;
			if (BOARD[a][b] === 1) {
				BOARD[a][b] = 2;
			} else if (BOARD[a][b] === 0) {
				stack.push([a, b]);
				BOARD[a][b] = -1;
			}
		}
	}
	for (let e of BOARD) {
		console.log(e.map((e) => (e == 2 ? "*" : ".")).join(" "));
	}
	stack = [[characterX, characterY, 0]];
	while (stack.length !== 0) {
		let [x, y, count] = stack.pop();
		let offset = 1;
		BOARD[x][y] = 1;
		let list = [
			[x + 1, y],
			[x, y + 1],
			[x - 1, y],
			[x, y - 1],
		];
		let flag = false;
		for (let [a, b] of list) {
			if (a === itemX && b === itemY) {
				answer = Math.min(answer, count + offset);
				flag = true;
			}
		}
		if (flag) continue;
		list = [
			[x + 1, y],
			[x, y + 1],
			[x - 1, y],
			[x, y - 1],
		].filter(([a, b]) => {
			return (
				!(a < 0 || b < 0 || a === SIZE || b === SIZE) &&
				BOARD[a][b] === 2
			);
		});
		if (list.length === 0) {
			list = [
				[x - 1, y + 1],
				[x + 1, y + 1],
				[x + 1, y - 1],
				[x - 1, y - 1],
			].filter(([a, b]) => {
				return (
					!(a < 0 || b < 0 || a === SIZE || b === SIZE) &&
					BOARD[a][b] === 2
				);
			});
			offset = 2;
		}
		for (let [a, b] of list) {
			if (a === itemX && b === itemY) {
				answer = Math.min(answer, count + offset);
				break;
			}
			stack.push([a, b, count + offset]);
		}
	}
	console.log(answer / 2);
	return answer / 2;
}

solution(
	[
		[1, 1, 3, 3],
		[2, 2, 4, 4],
	],
	1,
	1,
	4,
	4
);
