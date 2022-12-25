/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const lostNums = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            lostNums.push(i);
        }
    }

    return lostNums;
};