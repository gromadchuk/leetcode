/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    if (height.length === 2) {
        return Math.min(...height);
    }
    
    let result = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (i < j) {
        const water = Math.min(height[i], height[j]) * (j - i);
        
        result = Math.max(result, water);
        
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return result;
};