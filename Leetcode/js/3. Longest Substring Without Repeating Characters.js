/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	s = s.concat(s.charAt(s.length - 1));
	let answer = 0;
	let first = 0;
	const Last = {};
	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);
		if (Last[char] !== undefined && Last[char] >= first) {
			answer = Math.max(i - first, answer);

			first = Object.values(Last).filter((e) => e > Last[char]);
			first =
				first.length === 0
					? i
					: first.reduce((a, c) => (a < c ? a : c));
		}
		Last[char] = i;
	}
	return answer;
};
