/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const findIndex = nums.indexOf(target);
    
    if (findIndex >= 0) {
        return findIndex;
    }
    
    for (let i = 0; i < nums.length; i++) {
        console.log('i', i, 'n', nums[i], 'n + 1', nums[i + 1], 't', target);
        
        if (target > nums[i] && target < nums[i + 1]) {
            return i + 1;
        }
        
        if (target > nums[i] && !nums[i + 1]) {
            return i + 1;
        }
    }
    
    return 0;
};