const reader = {
	input: require("fs").readFileSync("input.txt").toString().split("\r\n"),
	// input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
	index: 0,
	readItem() {
		return BigInt(this.input[this.index++]);
	},
	readList() {
		return this.input[this.index++].split(" ").map((e) => parseInt(e));
	},
};
const segementTree = {
	parent(node) {
		return parseInt((node - 1) / 2);
	},
	childs(node) {
		return [node * 2 + 1, node * 2 + 2];
	},
	init(arr) {
		this.tree = [];
		this.size = arr.length;
		let [childs, tree] = [this.childs, this.tree];
		function func(start, end, idx) {
			if (start == end) {
				tree[idx] = arr[start];
				return;
			}
			let [a, b] = childs(idx);
			let mid = parseInt((start + end) / 2);
			func(start, mid, a);
			func(mid + 1, end, b);
			tree[idx] = tree[a] + tree[b];
		}
		func(0, this.size - 1, 0);
	},
	sum(left, right) {
		function func(start, end, idx) {
			if (left > end || right < start) return 0n;
			if (left <= start && end <= right) return this.tree[idx];
			let [a, b] = this.childs(idx);
			let mid = parseInt((start + end) / 2);
			return func(start, mid, a) + func(mid + 1, end, b);
		}
		func = func.bind(this);
		return func(0, this.size - 1, 0);
	},
	update(target, offset) {
		function func(start, end, idx) {
			if (target < start || target > end) return;
			this.tree[idx] += offset;
			if (target == start && target == end) return;
			let [a, b] = this.childs(idx);
			let mid = parseInt((start + end) / 2);
			func(start, mid, a);
			func(mid + 1, end, b);
		}
		func = func.bind(this);
		func(0, this.size - 1, 0);
	},
};
const [N, M, K] = reader.readList();
const arr = Array.from({ length: N }, () => reader.readItem());
segementTree.init(arr);
for (let i = 0; i < M + K; i++) {
	let [a, b, c] = reader.readList();
	b -= 1;
	switch (a) {
		case 1:
			c = BigInt(c);
			segementTree.update(b, c - arr[b]);
			arr[b] = c;
			break;
		case 2:
			console.log(
				segementTree
					.sum(b, c - 1)
					.toLocaleString("fullwide", { useGrouping: false })
			);
			break;
	}
}
