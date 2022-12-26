/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums];
    }
    
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const remainingNums = nums
            .slice(0, i)
            .concat(nums.slice(i + 1));
        const remainingNumsPermuted = permute(remainingNums);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [num].concat(remainingNumsPermuted[j]);
            
            result.push(permutedArray);
        }
    }
    
    return result;
};