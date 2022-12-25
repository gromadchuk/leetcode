/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const tempData = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!tempData[num]) {
            tempData[num] = 0;
        }

        tempData[num]++;
    }

    const list = [];

    for (let num in tempData) {
        list.push({
            num,
            count: tempData[num]
        });
    }

    list.sort((a, b) => b.count - a.count);

    return +list[0].num;
};