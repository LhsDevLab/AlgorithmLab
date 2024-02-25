const fs = require("fs");
const OUTPUT = "OUTPUT";

fs.writeFileSync(OUTPUT, "", "utf8");
console.log = new Proxy(console.log, {
	apply: function (target, thisArg, argumentsList) {
		target.apply(thisArg, argumentsList);

		const logMessage =
			argumentsList.map((e) => JSON.stringify(e, null, 2)).join(" ") +
			"\n";
		fs.appendFileSync(OUTPUT, logMessage, "utf8");
		return true;
	},
});
/*------------------------------------*/

function solution(gems) {
	const answer = [0, gems.length - 1];
	const LIST = new Set(gems);

	let [left, right] = [0, 0];
	const remain_cnt = {};
	const remain_list = new Set([gems[0]]);
	remain_cnt[gems[0]] = 1;

	while (true) {
		if (remain_list.size < LIST.size) {
			right += 1;
			if (right >= gems.length) break;
			if (remain_list.has(gems[right]) === false) {
				remain_cnt[gems[right]] = 0;
				remain_list.add(gems[right]);
			}
			remain_cnt[gems[right]] += 1;
		} else {
			if (
				remain_list.size === LIST.size &&
				answer[1] - answer[0] > right - left
			) {
				answer[0] = left;
				answer[1] = right;
			}
			remain_cnt[gems[left]] -= 1;
			if (remain_cnt[gems[left]] === 0) {
				remain_list.delete(gems[left]);
			}
			left += 1;
		}
	}
	return answer.map((e) => e + 1);
}

/*------------------------------------*/
const cases = [
	["A", "A", "A", "A", "B", "A", "C", "C", "C"],
	["A", "AA", "AA", "AAA", "AA", "A"],
	["A", "B", "B", "B", "C", "D", "D", "D", "D", "D", "D", "D", "B", "C", "A"],
	["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"],
	["AA", "AB", "AC", "AA", "AC"],
	["XYZ", "XYZ", "XYZ"],
	["ZZZ", "YYY", "NNNN", "YYY", "BBB"],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(cases[idx]));
}
