function solution(s) {
	const answer = [];
	const lastPos = {};
	for (let idx in s) {
		idx = parseInt(idx);
		const c = s.charAt(idx);
		answer.push(lastPos[c] === undefined ? -1 : idx - lastPos[c]);
		lastPos[c] = idx;
	}
	return answer;
}

solution("banana");
