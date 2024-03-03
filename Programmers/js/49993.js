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

function solution(skill, skill_trees) {
	var answer = 0;
	const onTree = new Set(skill);

	function check(tree) {
		let level = 0;

		for (const e of tree) {
			if (onTree.has(e)) {
				if (skill.charAt(level) === e) {
					level += 1;
				} else {
					return false;
				}
			}
		}
		return true;
	}
	for (const tree of skill_trees) {
		if (check(tree)) {
			answer += 1;
		}
	}

	return answer;
}

/*------------------------------------*/
const cases = [["CBD", ["BACDE", "CBADF", "AECB", "BDA"]]];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
