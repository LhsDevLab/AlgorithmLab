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

function solution(n) {
	const preCalcul = (() => {
		const res = [];

		let [i, v] = [0, 0];
		while (v < 1000000) {
			v = Math.pow(2, i);
			res.push(v);
			i += 1;
		}
		res.push(Math.pow(2, i));
		return res.reverse();
	})();

	function getBit(num) {
		let res = 0;
		while (num > 1) {
			const mod = num % 2;
			res += mod;
			num = (num - mod) / 2;
		}
		return res + num;
	}
	const bit = getBit(n);

	for (let i = n + 1; true; i++) {
		if (getBit(i) === bit) return i;
	}
}

/*------------------------------------*/

const cases = [[78], [15]];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
