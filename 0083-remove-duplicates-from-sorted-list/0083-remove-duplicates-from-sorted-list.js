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
var deleteDuplicates = function(head) {
    const tempNums = [];
    
    while (head) {
        tempNums.unshift(head.val);
        head = head.next;
    }
    
    const filteredInts = Array.from(new Set(tempNums));
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