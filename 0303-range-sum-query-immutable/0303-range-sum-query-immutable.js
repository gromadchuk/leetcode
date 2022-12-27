/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        result += this.nums[i];
    }

    return result;
};