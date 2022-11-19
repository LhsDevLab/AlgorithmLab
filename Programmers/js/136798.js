function solution(number, limit, power) {
	let preCount = new Array(number + 1).fill(0);
	for (let i = 1; i <= number; i++) {
		for (let j = i; j <= number; j += i) {
			preCount[j] += 1;
		}
	}
	return preCount.map((e) => (e > limit ? power : e)).reduce((a, c) => a + c);
}

let temp = solution(5, 3, 2);

console.log(temp);
