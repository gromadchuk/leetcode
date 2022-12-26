/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const tempNums = [];
    
    while (head) {
        tempNums.unshift(head.val);
        head = head.next;
    }
    
    const filteredInts = tempNums.filter(num => num !== val);
    let result = null;

    for (let i = 0; i < filteredInts.length; i++) {
        if (i === 0) {
            result = new ListNode(filteredInts[i]);
        } else {
            const currentResult = result;
            
            result = new ListNode(filteredInts[i]);
            result.next = currentResult;
        }
    }

    return result;
};