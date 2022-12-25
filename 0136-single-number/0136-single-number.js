/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let num of nums) {
        const find = nums.filter(itNum => itNum === num);

        if (find.length === 1) {
            return num;
        }
    }
};