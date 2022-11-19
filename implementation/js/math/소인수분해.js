// 소인수 분해

function func(array) {
	let data = array.map((e) => [e, e, {}]);
	let flag;
	for (let i = 2; !flag; i++) {
		flag = true;
		for (let idx in data) {
			let target = data[idx];
			if (flag && target[0] > i) flag = false;

			if (target[0] % i === 0) {
				let temp = 0;
				while (target[0] % i == 0 && target[0] !== 0) {
					temp += 1;
					target[0] /= i;
				}
				target[2][i] = temp;
			}
		}
	}
	return Object.fromEntries(data.map((e) => [e[1], e[2]]));
}

console.log(func(10, 20, 5, 17));
