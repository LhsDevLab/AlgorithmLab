function clustering(num) {
	const mem = [-1];
	function func(n) {
		if (mem[n] !== undefined) return mem[n];
		let res = new Set([n].toString());
		for (let i = 1; i < n; i++) {
			let temp = func(i);
			for (let e of temp) {
				e = e.split(",");
				res.add([...e, n - i].sort((a, b) => a - b).toString());
			}
		}
		mem[n] = res;
		return res;
	}
	return Array.from(func(num)).map((e) => e.split(","));
}
