/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    while (nums.length > 1) {
        const lastIndex = nums.lastIndexOf(nums[0]);
        
        if (lastIndex === 0) {
            return nums[0];
        }
        
        nums.splice(lastIndex, 1);
        nums.splice(0, 1);
    }
    
    return nums[0];
};