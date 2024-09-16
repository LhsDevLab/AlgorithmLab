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
	function gcd(p, q) {
		if (q == 0) return p;
		return gcd(q, p % q);
	}
	function lcm(p, q) {
		return p*q / gcd(p,q);
	}
	return n.reduce((a,c)=>{
		return lcm(a,c);
	});
}

/*------------------------------------*/
const cases = [
	[2, 6, 8, 14],
	[1, 2, 3],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(cases[idx]));
}
