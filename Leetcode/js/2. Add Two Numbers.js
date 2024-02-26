/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
	function ListNode(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}

	let up = 0;
	let header = new ListNode();
	let tail = header;

	while (true) {
		if (l1 === null && l2 === null) break;
		const [a1, a2] = [l1 ? l1.val : 0, l2 ? l2.val : 0];

		let temp = a1 + a2 + up;
		up = temp >= 10 ? 1 : 0;
		temp = temp % 10;

		let newNode = new ListNode(temp);
		tail.next = newNode;
		tail = newNode;

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	if (up === 1) {
		let newNode = new ListNode(1);
		tail.next = newNode;
		tail = newNode;
	}
	header = header.next;
	return header;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
