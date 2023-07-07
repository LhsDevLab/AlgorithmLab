const fs = require("fs");
const OUTPUT = "OUTPUT";

fs.writeFileSync(OUTPUT, "", "utf8");
console.log = new Proxy(console.log, {
	apply: function (target, thisArg, argumentsList) {
		target.apply(thisArg, argumentsList);

		const logMessage = argumentsList.join(" ") + "\n";
		fs.appendFileSync(OUTPUT, logMessage, "utf8");
		return true;
	},
});
/*------------------------------------*/

function solution(picks, minerals) {
	let answer = Infinity;
	const CostMap = [
		[1, 1, 1],
		[5, 1, 1],
		[25, 5, 1],
	];
	minerals = minerals.map((e) => ["diamond", "iron", "stone"].indexOf(e));
	function travel(mineralIndex, cost) {
		function routine1(pick) {
			let [nextMineralIndex, nextCost] = [mineralIndex, cost];
			for (let cnt = 5; cnt > 0; cnt--) {
				nextCost += CostMap[pick][minerals[nextMineralIndex++]] ?? 0;
			}
			picks[pick] -= 1;
			travel(nextMineralIndex, nextCost);
			picks[pick] += 1;
		}
		if (
			picks.reduce((a, c) => a + c) === 0 ||
			mineralIndex >= minerals.length
		) {
			answer = answer > cost ? cost : answer;
			return;
		}
		if (picks[0] > 0) {
			routine1(0);
		}
		if (picks[1] > 0) {
			routine1(1);
		}
		if (picks[2] > 0) {
			routine1(2);
		}
	}
	travel(0, 0);

	return answer;
}

/*------------------------------------*/
console.log(
	solution(
		[10, 0, 0],
		[
			"diamond",
			"diamond",
			"diamond",
			"iron",
			"iron",
			"diamond",
			"iron",
			"stone",
		]
	)
);
