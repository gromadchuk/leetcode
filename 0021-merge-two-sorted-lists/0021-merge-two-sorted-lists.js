const getInts = (node) => {
    const result = [];

    while (node) {
        result.push(node.val);
        node = node.next;
    }

    return result;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    const allInts = [
        ...getInts(list1),
        ...getInts(list2)
    ].sort((a, b) => b - a);

    let result = null;

    for (let i = 0; i < allInts.length; i++) {
        if (i === 0) {
            result = new ListNode(allInts[i]);
        } else {
            const currentResult = result;
            result = new ListNode(allInts[i]);
            result.next = currentResult;
        }
    }

    return result;
};