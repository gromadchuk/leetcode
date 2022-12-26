/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return nums.reduce((result, num) => (
        result.concat(
            result.map(list => [num, ...list])
        )
    ), [[]]);
};