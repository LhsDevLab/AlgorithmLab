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
	let res = Array.from({ length: n }, (_, idx) =>
		Array.from({ length: idx + 1 }, () => null)
	);
	const state = {
		pos: [0, 0],
		current: 1,
		last: ((n + 1) * n) / 2,
		dir: 0,
	};

	const Move = [
		function () {
			//down
			let [i, j] = state.pos;
			i += 1;
			try {
				if (res[i][j] === null) {
					state.pos = [i, j];
					return true;
				}
			} catch (e) {
				return false;
			}
			return false;
		},
		function () {
			//right
			let [i, j] = state.pos;
			j += 1;
			try {
				if (res[i][j] === null) {
					state.pos = [i, j];
					return true;
				}
			} catch (e) {
				return false;
			}
			return false;
		},
		function () {
			//up
			let [i, j] = state.pos;
			i -= 1;
			j -= 1;
			try {
				if (res[i][j] === null) {
					state.pos = [i, j];
					return true;
				}
			} catch (e) {
				return false;
			}
			return false;
		},
	];
	let remain = 1;
	function doTravel() {
		const [i, j] = state.pos;
		if (res[i][j] === null) {
			res[i][j] = state.current++;
		}
		for (let i = 0; i < Move.length; i++) {
			if (Move[state.dir]()) {
				remain += 1;
				break;
			}
			state.dir = (state.dir + 1) % Move.length;
		}
		return;
	}
	while (remain-- > 0) {
		doTravel();
	}
	let temp = [];
	res.reverse();
	while (res.length > 0) {
		const row = res.pop();
		for (let e of row) {
			temp.push(e);
		}
	}

	return temp;
}

/*------------------------------------*/
const cases = [4, 5, 6, 1000];
for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(cases[idx]));
}
