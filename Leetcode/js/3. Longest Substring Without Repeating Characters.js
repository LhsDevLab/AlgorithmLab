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
		console.log(s.substring(first, i + 1));
		if (Last[char] !== undefined && Last[char] >= first) {
			answer = Math.max(i - first, answer);

			first = Object.values(Last).filter((e) => e > Last[char]);
			first =
				first.length === 0
					? i
					: first.reduce((a, c) => (a < c ? a : c));

			console.log(s.charAt(first), answer);
		}
		Last[char] = i;
		console.log(Last);
	}
	return answer;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
