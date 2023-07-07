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
function solution(park, routes) {
	const [H, W] = [park.length, park[0].length];
	const DIR = {
		N: [-1, 0],
		E: [0, 1],
		S: [1, 0],
		W: [0, -1],
	};
	function check(x, y) {
		try {
			if (["S", "O"].includes(park[x].charAt(y))) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	const Dog = {
		x: -1,
		y: -1,
		doTask(opr) {
			let [dir, len] = opr.split(" ");
			[dir, len] = [DIR[dir], parseInt(len)];
			let [x, y] = [this.x, this.y];
			for (; len > 0; len--) {
				x += dir[0];
				y += dir[1];
				if (check(x, y) === false) return false;
			}
			this.x = x;
			this.y = y;
		},
	};

	for (let [x, flag] = [0, true]; x < H && flag; x++) {
		for (let y = 0; y < W; y++) {
			if (park[x].charAt(y) === "S") {
				Dog.x = x;
				Dog.y = y;
				flag = false;
			}
		}
	}
	routes.forEach((e) => Dog.doTask(e));
	return [Dog.x, Dog.y];
}
console.log(solution(["OSO", "OOO", "OXO", "OOO"], [("E 2", "S 3", "W 1")]));
