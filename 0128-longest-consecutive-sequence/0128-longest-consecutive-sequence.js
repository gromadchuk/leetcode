/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    
    nums.sort((a, b) => a - b);
    nums = Array.from(new Set(nums));
    
    let maxLine = 1;
    let currentLine = 1;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            currentLine++;
        } else {
            currentLine = 1;
        }
        
        if (currentLine > maxLine) {
            maxLine = currentLine;
        }
    }
    
    return maxLine;
};