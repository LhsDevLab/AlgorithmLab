function solution(arr) {
	let preNum = -1;
	let res = [];
	for (let e of arr) {
		if (e != preNum) {
			res.push(e);
			preNum = e;
		}
	}
	return res;
}
