/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const list = nums.sort((a, b) => a -b);

    if (list[0] !== 0) {
        return 0;
    }

    for (let i = 0; i < list.length; i++) {
        const current = list[i];
        const next = list[i + 1];

        if ((current + 1) !== next) {
            return current + 1;
        }
    }

    return (list.pop()) + 1;
};