const primeGenerator = {
	num: 1,
	list: [],
	next() {
		while (!this.isPrime(++this.num));
		this.list.push(this.num);
		return this.num;
	},
	isPrime(num) {
		const rt = Math.sqrt(num);
		for (let e of this.list) {
			if (e > rt) break;
			if (num % e == 0) return false;
		}
		return true;
	},
};
for (let i = 0; i < 10; i++) {
	console.log(primeGenerator.next());
}
