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

function solution(maps) {
	var answer = [];
	const [HEIGHT, WIDTH] = [maps.length, maps[0].length];
	const Marking = Array.from({ length: HEIGHT }, () =>
		Array.from({ length: WIDTH }, () => null)
	);
	function travel(i, j) {
		const island_num = answer.length;
		answer[island_num] = 0;
		const dfs = [[parseInt(i), parseInt(j)]];
		while (dfs.length !== 0) {
			const [i, j] = dfs.pop();
			let food = 0;
			try {
				food = maps[i].charAt(j);
				if (food === undefined || food === "X") continue;
				food = parseInt(food);
			} catch (e) {
				continue;
			}

			if (Marking[i][j] === null) {
				Marking[i][j] = island_num;
				answer[island_num] += food;
				for (const [a, b] of [
					[i, j + 1],
					[i - 1, j],
					[i, j - 1],
					[i + 1, j],
				]) {
					dfs.push([a, b]);
				}
			}
		}
	}
	for (let i in maps) {
		for (let j in maps[i]) {
			if (maps[i].charAt(j) !== "X" && Marking[i][j] === null) {
				travel(i, j);
			}
		}
	}
	answer.sort((a, b) => a - b);
	return answer.length === 0 ? [-1] : answer;
}

/*------------------------------------*/
const cases = [
	["X591X", "X1X5X", "X231X", "1XXX1"],
	["1X3", "X54", "7X9"],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(cases[idx]));
}
