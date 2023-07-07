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

function solution(players, callings) {
	const ranking = Object.fromEntries(players.map((e, i) => [e, i]));

	function doCall(name) {
		const idx = ranking[name];
		const frontName = players[idx - 1];
		ranking[name] = idx - 1;
		ranking[frontName] = idx;
		players[idx] = frontName;
		players[idx - 1] = name;
	}
	for (const name of callings) {
		doCall(name);
	}
	return players;
}
console.log(
	solution(
		["mumu", "soe", "poe", "kai", "mine"],
		["kai", "kai", "mine", "mine"]
	)
);
