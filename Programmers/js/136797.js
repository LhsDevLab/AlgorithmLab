function solution(numbers) {
	const pos = [
		[3, 1],
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
	];
	function getCost(A, B) {
		if (A === B) return 1;
		[A, B] = [pos[A], pos[B]];
		let [h, w] = [A[0] - B[0], A[1] - B[1]].map((e) => Math.abs(e));
		let [M, m] = [Math.max(h, w), Math.min(h, w)];
		return (M - m) * 2 + m * 3;
	}
	numbers = numbers.split("");
	let current = { "4,6": 0 };
	for (let num of numbers) {
		let temp = Object.keys(current).map((e) => {
			let [l, r] = e.split(",");
			return [l, r, current[`${l},${r}`]];
		});
		current = {};
		for (let [L, R, cost] of temp) {
			function insert(L, R, cost) {
				let key = `${L},${R}`;
				if ((current[key] ? current[key] : Infinity) > cost) {
					current[key] = cost;
				}
			}
			if (L !== num) insert(L, num, cost + getCost(R, num));
			if (R !== num) insert(num, R, cost + getCost(L, num));
		}
	}

	return Math.min(...Object.values(current));
}

let temp = solution("51238");

console.log(temp);
