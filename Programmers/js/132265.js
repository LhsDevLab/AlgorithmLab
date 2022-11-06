function solution(topping) {
	var answer = 0;
	const COUNT = {};
	for (let e of topping) {
		if (COUNT[e] == undefined) {
			COUNT[e] = 0;
		}
		COUNT[e] += 1;
	}
	const Aset = new Set();
	const Bset = new Set(Object.keys(COUNT).map((e) => parseInt(e)));
	for (let e of topping) {
		Aset.add(e);
		COUNT[e] -= 1;
		if (COUNT[e] == 0) {
			Bset.delete(e);
		}
		if (Aset.size == Bset.size) {
			answer += 1;
		}
	}
	return answer;
}
