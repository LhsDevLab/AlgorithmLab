/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const reqList = {};
	for (const idx in nums) {
		const e = nums[idx];
		const req = target - e;
		if (reqList[e]) {
			return [reqList[e], idx];
		}
		reqList[req] = idx;
	}
	return false;
};

const cases = [[[4, 5, 6], 9]];

for (const idx in cases) {
	console.log(`<<case : ${idx + 1}>>`);
	console.log(twoSum(...cases[idx]));
}
