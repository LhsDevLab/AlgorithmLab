function solution(numbers) {
	let res = new Set();
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			res.add(numbers[i] + numbers[j]);
		}
	}
	res = Array.from(res);
	res.sort((a, b) => a - b);

	return res;
}
