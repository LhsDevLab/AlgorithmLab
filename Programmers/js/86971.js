function solution(n, wires) {
	const countUp = Array.from({ length: n + 1 }, () => 0);
	const tree = Array.from({ length: n + 1 }, () => new Set());
	const parent = Array.from({ length: n + 1 }, () => -1);
	for (let [a, b] of wires) {
		tree[a].add(b);
		tree[b].add(a);
	}
	function travel(node) {
		let res = 1;
		for (let c of tree[node]) {
			if (c == parent[node]) continue;
			parent[c] = node;
			res += travel(c);
		}
		countUp[node] = res;
		return res;
	}
	travel(1);
	let res = Infinity;
	for (let i = 2; i <= n; i++) {
		let temp = Math.abs(countUp[1] - countUp[i] * 2);
		res = res > temp ? temp : res;
	}
	console.log(res);
	return res;
}
