/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let num of nums) {
        const find = nums.filter(itNum => itNum === num);

        if (find.length > 1) {
            return true;
        }
    }

    return false;
};