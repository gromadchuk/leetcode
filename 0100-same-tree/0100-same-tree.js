const getDeepInfo = (node) => {
    const result = [];

    if (node) {
        result.push(node.val);

        if (node.left || node.right) {
            if (node.left) {
                result.push(...getDeepInfo(node.left));
            } else {
                result.push(null);
            }

            if (node.right) {
                result.push(...getDeepInfo(node.right));
            } else {
                result.push(null);
            }
        }
    }

    return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    const firstNode = getDeepInfo(p);
    const secondNode = getDeepInfo(q);

    return firstNode.join() === secondNode.join();
};