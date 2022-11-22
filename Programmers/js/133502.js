function solution(ingredient) {
	const Maker = {
		stack: [],
		count: 0,
		push(ing) {
			this.stack.push(ing);
			if (ing === 1 && this.stack.length >= 4) {
				const burger = [1, 2, 3, 4].map(() => this.stack.pop());
				burger.reverse();
				if (burger.join("") === "1231") {
					this.count += 1;
				} else {
					for (let e of burger) {
						this.stack.push(e);
					}
				}
			}
		},
	};
	for (let e of ingredient) {
		console.log(Maker.stack);
		Maker.push(e);
	}
	return Maker.count;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
