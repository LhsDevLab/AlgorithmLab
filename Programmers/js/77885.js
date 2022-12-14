//https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
	let answer = [];
	for (let num of numbers) {
		let res = BigInt(num).toString(2).split("");
		res = ["0", ...res];
		let idx = res.length - 1;
		while (true) {
			if (res[idx] === "0") {
				res[idx] = "1";
				break;
			}
			idx -= 1;
		}
		idx += 1;
		while (idx < res.length) {
			if (res[idx] === "1") {
				res[idx] = "0";
				break;
			}
			idx += 1;
		}
		answer.push(parseInt(res.join(""), 2));
	}
	return answer;
}

solution([2, 7]);
