/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    const list = new Set(nums);
    const maxInt = Math.max(...list);
    
    if (maxInt < 1) {
        return 1;
    }
    
    let i = 0;
    
    while (i++ < maxInt) {
        if (!list.has(i)) {
            return i;
        }
    }
    
    return maxInt + 1;
};