/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const list = [];
    
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    
    const iterations = list.length / 2;
    for (let i = 0; i < iterations; i++) {
        if (list[i] !== list[list.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
};