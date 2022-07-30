//12901;
function solution(a, b) {
	const monthSet = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const daySet = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
	let dates = b;
	for (let i = 0; i < a - 1; i++) dates += monthSet[i];
	return daySet[dates % 7];
}
