function solution(arr) {
	const OPRS = [];
	const NUMS = [];

	for (let i in arr) {
		if (i % 2 == 0) NUMS.push(parseInt(arr[i]));
		else OPRS.push(arr[i]);
	}
	const maxList = Array.from({ length: NUMS.length }, () =>
		Array.from({ length: NUMS.length }, () => null)
	);
	const minList = Array.from({ length: NUMS.length }, () =>
		Array.from({ length: NUMS.length }, () => null)
	);
	for (let i in NUMS) maxList[i][i] = NUMS[i];
	for (let i in NUMS) minList[i][i] = NUMS[i];

	function getMM(start, end) {
		if (maxList[start][end] !== null) {
			return [maxList[start][end], minList[start][end]];
		}
		let max = -Infinity;
		let min = Infinity;
		for (let i = start; i < end; i++) {
			const [L, R] = [getMM(start, i), getMM(i + 1, end)];
			let temp = OPRS[i] == "+" ? L[0] + R[0] : L[0] - R[1];
			max = max < temp ? temp : max;
			temp = OPRS[i] == "+" ? L[1] + R[1] : L[1] - R[0];
			min = min > temp ? temp : min;
		}
		maxList[start][end] = max;
		minList[start][end] = min;
		return [max, min];
	}
	getMM(0, NUMS.length - 1);
	//console.log(maxList);
	return maxList[0][NUMS.length - 1];
}
//console.log(solution(["1", "-", "3", "+", "5", "-", "8"]));
console.log(solution("10 - 5 + 7 + 9 - 20 - 30 + 10".split(" ")));
