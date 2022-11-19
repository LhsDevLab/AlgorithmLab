function greatestCommonFactor(a, b) {
	while (b != 0) {
		c = a % b;
		a = b;
		b = c;
	}
	return a;
}
function LeastCommonMultiple(a, b) {
	return (a * b) / greatestCommonFactor(a, b);
}
