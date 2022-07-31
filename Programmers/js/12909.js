function solution(s) {
	let stack = 0;
	for (let c of s) {
		if (c == "(") stack += 1;
		else {
			if (stack == 0) return false;
			else stack -= 1;
		}
	}
	return stack == 0 ? true : false;
}
solution("()()");
