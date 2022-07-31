function solution(k, dungeons) {
	let res = -1;
	function func(energy, remain) {
		if (dungeons.length - remain.size > res) {
			res = dungeons.length - remain.size;
		}
		for (let e of Array.from(remain)) {
			let [a, b] = dungeons[e];
			if (energy >= a) {
				energy -= b;
				remain.delete(e);
				func(energy, remain);
				remain.add(e);
				energy += b;
			}
		}
	}
	func(k, new Set(Array.from({ length: dungeons.length }, (_, i) => i)));
	return res;
}
solution(80, [
	[80, 20],
	[50, 40],
	[30, 10],
]);
