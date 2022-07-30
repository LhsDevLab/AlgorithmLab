function solution(n, info) {
	const count = Array.from({ length: n + 1 }, () => []);
	info.pop();
	for (let i in info) {
		if (info[i] != n) count[info[i] + 1].unshift(10 - i);
	}
	function clustering(num) {
		const mem = [-1];
		function func(n) {
			if (mem[n] !== undefined) return mem[n];
			let res = new Set([n].toString());
			for (let i = 1; i < n; i++) {
				let temp = func(i);
				for (let e of temp) {
					e = e.split(",");
					res.add([...e, n - i].sort((a, b) => a - b).toString());
				}
			}
			mem[n] = res;
			return res;
		}
		return Array.from(func(num)).map((e) =>
			e.split(",").map((e) => parseInt(e))
		);
	}
	let clusters = clustering(n);
	let res = [-1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
	for (let list of clusters) {
		let cloneCount = Array.from({ length: n + 1 }, (_, idx) =>
			count[idx].slice()
		);
		let scoreBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n];
		for (let e of list) {
			if (cloneCount[e].length != 0) {
				let n = cloneCount[e].pop();
				scoreBoard[10] -= e;
				scoreBoard[10 - n] = e;
			} else continue;
		}
		let offset = 0;
		for (let i in scoreBoard) {
			if (scoreBoard[i] == 0 && info[i] == 0) continue;
			offset += scoreBoard[i] < info[i] ? i - 10 : 10 - i;
		}
		if (res[0] < offset) {
			res = [offset, scoreBoard];
		} else if (offset > 0 && res[0] == offset) {
			for (let i = 10; i >= 0; i--) {
				if (scoreBoard[i] > res[1][i]) {
					res = [offset, scoreBoard];
					break;
				} else if (res[1][i] > scoreBoard[i]) break;
			}
		}
	}
	return res[0] > 0 ? res[1] : [-1];
}
console.log(solution(3, [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0]));
