/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    const tempInts = [];

    while (head) {
        tempInts.push(head.val);
        head = head.next;
    }

    let result = null;

    for (let i = 0; i < tempInts.length; i++) {
        result = new ListNode(tempInts[i], result);
    }

    return result;
};