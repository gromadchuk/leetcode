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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {
    const result = [];
    
    const checkNode = (node, path, pathSum) => {
        if (!node) {
            return;
        }
        
        const currentPath = [ ...path, node.val ];
        const currentSum = pathSum + node.val;
        
        if (!node.left && !node.right) {
            if (currentSum === targetSum) {
                result.push(currentPath);
            }
            
            return;
        }
        
        checkNode(node.left, currentPath, currentSum);
        checkNode(node.right, currentPath, currentSum);
    };
    
    checkNode(root, [], 0);
    
    return result;
};