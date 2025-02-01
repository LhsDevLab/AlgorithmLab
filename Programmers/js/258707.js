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

function solution(coin, cards) {
	const start = cards.length / 3;

	const hand = new Set();
	const wait = new Set();

	let round = 0;

	function addToSet(card, target) {
		const pair = cards.length + 1 - card;
		if (target.has(pair)) {
			target.delete(pair);
			round += 1;
		} else {
			target.add(card);
		}
	}
	function useWait() {
		const list = Array.from(wait);
		for (let card of list) {
			const pair = cards.length + 1 - card;
			if (wait.has(pair) && coin >= 2) {
				wait.delete(card);
				wait.delete(pair);
				coin -= 2;
				round += 1;
				return true;
			}
		}
		return false;
	}
	for (let i = 0; i < start; i++) addToSet(cards[i], hand);

	for (
		let i = start;
		coin > 0 && i < start + round * 2 + 2 && i < cards.length;
		i++
	) {
		const card = cards[i];
		const pair = cards.length + 1 - card;
		if (hand.has(pair) && coin >= 1) {
			addToSet(card, hand);
			coin -= 1;
		} else {
			wait.add(card);
		}
		if (i === start + round * 2 + 1) useWait();
	}
	return round + 1;
}

/*------------------------------------*/
const cases = [
	//[4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]],
	//[3, [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 12]],
	//[2, [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7]],
	//[10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]],
	[6, [1, 6, 2, 5, 3, 4]],
];

for (const idx in cases) {
	console.log(`<<case : ${parseInt(idx) + 1}>>`);
	console.log(solution(...cases[idx]));
}
