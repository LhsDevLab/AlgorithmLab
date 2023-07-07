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

function solution(plans) {
	const Results = [];
	function toMin(time) {
		const [hh, mm] = time.split(":").map((e) => parseInt(e.trim()));
		return hh * 60 + mm;
	}
	const queue = {
		list: [],
		add([task, cost]) {
			this.list.push([task, cost]);
		},
		doTask(time) {
			while (time > 0 && this.list.length > 0) {
				let [task, cost] = this.list.pop();
				if (cost > time) {
					cost -= time;
					this.list.push([task, cost]);
					break;
				} else {
					time -= cost;
					Results.push(task);
				}
			}
		},
	};
	let curTime = null;
	let onDoing = [null, null];
	plans = plans.map((e) => [e[0], toMin(e[1]), parseInt(e[2])]);
	plans.push(["end", Infinity, 0]); // 마무리용
	plans.sort((a, b) => a[1] - b[1]);
	for (const [task, start, cost] of plans) {
		if (curTime === null) {
			curTime = start;
			onDoing = [task, cost];
			continue;
		}

		let remain = start - curTime;
		curTime = start;

		if (remain >= onDoing[1]) {
			Results.push(onDoing[0]);
			remain -= onDoing[1];
			queue.doTask(remain);
		} else {
			onDoing[1] -= remain;
			queue.add(onDoing);
		}

		onDoing = [task, cost];
	}

	return Results;
}

console.log(
	solution([
		["science", "12:40", "50"],
		["music", "12:20", "40"],
		["history", "14:00", "30"],
		["computer", "12:30", "100"],
	])
);
