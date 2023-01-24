/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const getNumber = (node) => {
    let tempInts = [];
    let tempHead = node;
    
    while (tempHead) {
        tempInts.unshift(tempHead.val);
        tempHead = tempHead.next;
    }
    
    return tempInts.reverse();
};

const sum = (n1, n2) => {
    const max = Math.max(n1.length, n2.length);
    const result = [];
    let carryover = 0;
    
    for (let i = 0; i < max; i++) {
        let itSum = (n1[i] || 0) + (n2[i] || 0) + carryover;
        
        if (itSum >= 10) {
            carryover = 1;
            itSum -= 10;
        } else {
            carryover = 0;
        }
        
        result.push(itSum);
    }
    
    if (carryover) {
        result.push(1);
    }
    
    return result.reverse();
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    const sumList = sum(getNumber(l1), getNumber(l2));
    
    let result = null;
    
    for (let i = 0; i < sumList.length; i++) {
        if (i === 0) {
            result = new ListNode(+sumList[i]);
        } else {
            result = new ListNode(+sumList[i], result);
        }
    }
    
    return result;
};