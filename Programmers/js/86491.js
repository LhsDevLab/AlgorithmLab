function solution(sizes) {
	let [A, B] = [[], []];
	sizes.forEach(([a, b]) => {
		if (a > b) {
			A.push(a);
			B.push(b);
		} else {
			A.push(b);
			B.push(a);
		}
	});
	return Math.max(...A) * Math.max(...B);
}
solution([
	[60, 50],
	[30, 70],
	[60, 30],
	[80, 40],
]);
