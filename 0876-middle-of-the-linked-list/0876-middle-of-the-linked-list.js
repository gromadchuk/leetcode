const calcTargetMedium = (head) => {
    let targetLength = 0;

    while (head.next) {
        targetLength++;
        head = head.next;
    }

    return Math.ceil(targetLength / 2);
}

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
const middleNode = function(head) {
    const targetMedium = calcTargetMedium(head);

    for (let i = 0; i < targetMedium; i++) {
        head = head.next;
    }

    return head;
};