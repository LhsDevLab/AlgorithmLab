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

function solution(r1, r2) {
	let answer = 0;
	function getHeight(x, r) {
		return x > r ? 0 : Math.sqrt(r * r - x * x);
	}
	for (let x = 0; x <= r2; x++) {
		const [y1, y2] = [getHeight(x, r1), getHeight(x, r2)];
		answer += Math.floor(y2) - Math.ceil(y1) + 1;
	}

	return (answer - (r2 - r1 + 1)) * 4;
}

console.log(solution(2, 3));
