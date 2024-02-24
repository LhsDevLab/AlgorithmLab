function solution(arr) {
	const res = [0, 0];
	arr.forEach((e, i, arr) => {
		e.forEach((e, i, arr) => {
			if (i !== 0) arr[i] = arr[i - 1] + e;
		});
		if (i !== 0) {
			let preArr = arr[i - 1];
			arr[i].forEach((e, i, arr) => {
				arr[i] = e + preArr[i];
			});
		}
	});

	function getTotal(start, end) {
		const [sy, sx] = start;
		const [ey, ex] = end;

		let total = arr[ey][ex];
		if (sy > 0) {
			total -= arr[sy - 1][ex];
		}
		if (sx > 0) {
			total -= arr[ey][sx - 1];
		}
		if (sy > 0 && sx > 0) {
			total += arr[sy - 1][sx - 1];
		}
		return total;
	}

	(function travel(start, end) {
		const [sy, sx] = start;
		const [ey, ex] = end;

		if ([sy, sx, ey, ex].filter((e) => e < 0).length !== 0) return;

		const total = getTotal(start, end);
		const maxSum = (ey - sy + 1) * (ex - sx + 1);

		if (total === 0) {
			res[0] += 1;
		} else if (total === maxSum) {
			res[1] += 1;
		} else {
			const [my, mx] = [
				Math.ceil((ey + sy) / 2),
				Math.ceil((ex + sx) / 2),
			];
			travel([sy, sx], [my - 1, mx - 1]);
			travel([sy, mx], [my - 1, ex]);
			travel([my, sx], [ey, mx - 1]);
			travel([my, mx], [ey, ex]);
		}
		return;
	})([0, 0], [arr.length - 1, arr.length - 1]);

	return res;
}

let res = solution([
	[1, 1, 1, 1, 1, 1, 1, 1],
	[0, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 1, 1, 1, 1],
	[0, 1, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 0, 0, 0, 1, 1, 1, 1],
]);
