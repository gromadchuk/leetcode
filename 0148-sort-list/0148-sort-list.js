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
var sortList = function(head) {
    const tempNums = [];
    
    while (head) {
        tempNums.push(head.val);
        head = head.next;
    }
    
    const filteredInts = tempNums.sort((a, b) => b - a);
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