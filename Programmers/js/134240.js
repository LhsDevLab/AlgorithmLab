function solution(food) {
	food = food.map((e) => parseInt(e / 2));
	let res = [];
	for (let i = 1; i < food.length; i++) {
		res = [...res, ...Array(food[i]).fill(i)];
	}
	return [...res, 0, ...res.reverse()].join("");
}

solution([1, 3, 4, 6]);
