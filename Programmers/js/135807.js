function solution(arrayA, arrayB) {
	let answer = [0];
	function greatestCommonFactor(a, b) {
		while (b != 0) {
			c = a % b;
			a = b;
			b = c;
		}
		return a;
	}
	let [aGCF, bGCF] = [arrayA, arrayB].map((e) =>
		e.reduce((a, c) => greatestCommonFactor(a, c))
	);
	if (
		arrayA.filter((e) => {
			return e % bGCF === 0;
		}).length === 0
	) {
		answer.push(bGCF);
	}
	if (
		arrayB.filter((e) => {
			return e % aGCF === 0;
		}).length === 0
	) {
		answer.push(aGCF);
	}
	return Math.max(...answer);
}

solution([10, 17], [5, 20]);
//solution([10, 20], [5, 17]);
//solution([14, 35, 119], [18, 30, 102]);
