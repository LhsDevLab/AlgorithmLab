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

function solution(sequence, k) {
	let tot = sequence[0];
	let [s, e] = [0, 0];
	const snapShot = [];
	function moveStart() {
		tot -= sequence[s] ?? 0;
		s += 1;
	}
	function moveEnd() {
		e += 1;
		tot += sequence[e] ?? 0;
	}
	while (true) {
		if (tot < k) {
			moveEnd();
		} else if (tot > k) {
			moveStart();
		}

		if (tot === k) {
			snapShot.push([s, e]);
			moveStart();
			moveEnd();
		}

		if (e === sequence.length || s > e) {
			break;
		}
	}
	const minL = snapShot.reduce((a, c) => {
		const res = c[1] - c[0];
		return a > res ? res : a;
	}, Infinity);

	return snapShot.filter((e) => e[1] - e[0] === minL)[0];
}

console.log(solution([1, 1, 1, 1, 1, 1, 3], 3));
