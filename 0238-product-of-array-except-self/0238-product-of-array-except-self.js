/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let answer = 1;
        
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }

            answer = answer * nums[j];
        }

        result.push(answer);
    }

    return result;
};