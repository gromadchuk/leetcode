/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
    let tempInts = [];
    
    while (lists.length) {
        let tempHead = lists.pop();
        
        while (tempHead) {
            tempInts.push(tempHead.val);
            tempHead = tempHead.next;
        }
    }
    
    tempInts.sort((a, b) => b - a);
    
    if (!tempInts.length) {
        return null;
    }
    
    let result = null;

    for (let i = 0; i < tempInts.length; i++) {
        result = new ListNode(tempInts[i], result);
    }

    return result;
};