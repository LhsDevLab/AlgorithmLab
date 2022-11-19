function solution(k, m, score) {
	let answer = 0;
	const count = Array(k + 1).fill(0);
	for (let e of score) count[e] += 1;
	let stacked = 0;
	for (let i = k; i > 0; i--) {
		stacked += count[i];
		answer += parseInt(stacked / m) * i * m;
		stacked = stacked % m;
	}
	return answer;
}
