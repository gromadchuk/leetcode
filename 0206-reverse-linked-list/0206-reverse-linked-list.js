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
var reverseList = function(head) {
    if (!head) {
        return head;
    }

    let tempInts = [];
    let tempHead = head;

    while (tempHead) {
        tempInts.push(tempHead.val);
        tempHead = tempHead.next;
    }

    let result = null;

    for (let i = 0; i < tempInts.length; i++) {
        if (i === 0) {
            result = new ListNode(tempInts[i]);
        } else {
            const currentResult = result;
            
            result = new ListNode(tempInts[i]);
            result.next = currentResult;
        }
    }

    return result;
};