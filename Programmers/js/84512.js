function solution(word) {
	const weight = { A: 0, E: 1, I: 2, O: 3, U: 4 };
	let temp = [781, 156, 31, 6, 1];
	let res = 0;
	for (let i = word.length - 1; i >= 0; i--) {
		res += 1 + temp[i] * weight[word.charAt(i)];
	}
	return res;
}
