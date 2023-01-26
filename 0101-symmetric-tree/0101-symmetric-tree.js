const checkBranch = (leftNode, rightNode) => {
    if (!leftNode && !rightNode) {
        return true;
    }
    
    if (!leftNode || !rightNode) {
        return false;
    }
    
    if (leftNode.val !== rightNode.val) {
        return false;
    }
    
    if (!checkBranch(leftNode.left, rightNode.right)) {
        return false;
    }
    
    if (!checkBranch(leftNode.right, rightNode.left)) {
        return false;
    }
    
    return true;
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
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    return checkBranch(root.left, root.right);
};