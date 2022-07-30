function solution(a, b) {
	let res = 0;
	for (let i in a) res += a[i] * b[i];
	return res;
}
