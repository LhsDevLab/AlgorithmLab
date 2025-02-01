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

function merge(A, B) {
	const res = new Map();
	for (const [Aval, Acnt] of A) {
		for (const [Bval, Bcnt] of B) {
			const val = Aval + Bval;
			const cnt = res.get(val);
			res.set(val, cnt ? cnt + Acnt * Bcnt : Acnt * Bcnt);
		}
	}
	return res;
}
function calculCase(selected, params) {
	let A = null;
	let B = null;
	params.forEach((e, idx) => {
		if (selected.includes(idx)) {
			A = A ? merge(A, params[idx]) : params[idx];
		} else {
			B = B ? merge(B, params[idx]) : params[idx];
		}
	});
	return {
		A: A,
		B: B,
	};
}

function calculeWin(A, B) {
	let [lose, draw, win] = [0, 0, 0];

	for (const [Aval, Acnt] of A) {
		for (const [Bval, Bcnt] of B) {
			if (Aval > Bval) {
				win += Acnt * Bcnt;
			} else if (Aval === Bval) {
				draw += Acnt * Bcnt;
			} else {
				lose += Acnt * Bcnt;
			}
		}
	}

	return win;
}

function solution(params) {
	params = params.map((dice) => {
		const map = new Map();
		for (let n of dice) {
			const cnt = map.get(n);
			map.set(n, cnt ? cnt + 1 : 1);
		}
		return map;
	});

	let mostWin = -Infinity;
	let answer = null;

	function dfs(selected) {
		if (selected.length == params.length / 2) {
			const { A, B } = calculCase(selected, params);
			const Win = calculeWin(A, B);
			if (Win > mostWin) {
				mostWin = Win;
				answer = selected.slice();
			}
			return;
		}

		let i = selected[selected.length - 1];
		i = i ? i + 1 : 0;
		for (i; i < params.length; i++) {
			selected.push(i);
			dfs(selected);
			selected.pop();
		}
	}

	dfs([]);

	return answer.sort((a, b) => a - b).map((e) => e + 1);
}

/*------------------------------------*/
const cases = [
	[
		[
			[1, 2, 3, 4, 5, 6],
			[3, 3, 3, 3, 4, 4],
			[1, 3, 3, 4, 4, 4],
			[1, 1, 4, 4, 5, 5],
		],
	],
	[
		[
			[1, 2, 3, 4, 5, 6],
			[2, 2, 4, 4, 6, 6],
		],
	],
	[
		[
			[40, 41, 42, 43, 44, 45],
			[43, 43, 42, 42, 41, 41],
			[1, 1, 80, 80, 80, 80],
			[70, 70, 1, 1, 70, 70],
		],
	],
	[
		[
			[1, 1, 1, 1, 2, 1],
			[1, 1, 1, 1, 1, 1],
			[1, 1, 1, 2, 2, 1],
			[1, 1, 1, 2, 2, 1],
		],
	],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
