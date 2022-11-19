function solution(k, ranges) {
	let Y = [k];
	let integ = [0];
	for (let x = 1; k != 1; x += 1) {
		if (k % 2 === 0) {
			k /= 2;
		} else {
			k = k * 3 + 1;
		}
		Y[x] = k;
	}
	for (let i = 1; i < Y.length; i++) {
		integ.push(integ[i - 1] + (Y[i - 1] + Y[i]) / 2);
	}

	return ranges.map(([a, b]) => {
		[a, b] = [a, Y.length + b - 1];
		return a > b ? -1 : integ[b] - integ[a];
	});
}

solution(5, [
	[0, 0],
	[0, -1],
	[2, -3],
	[3, -3],
]);
