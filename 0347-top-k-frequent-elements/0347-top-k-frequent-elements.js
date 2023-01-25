/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const tempData = new Map();
    const tempTop = [];
    
    for (let num of nums) {
        tempData.set(num, (tempData.get(num) || 0) + 1);
    }
    
    for (let [num, count] of tempData) {
        tempTop[count] = [...(tempTop[count] || []), num];
    }

    const result = [];
    
    for (let i = tempTop.length - 1; i >= 0; i--) {
        if (tempTop[i] === undefined) {
            continue;
        }
        
        result.push(...tempTop[i]);
        
        if (result.length >= k) {
            break;
        }
    }
    
    return result.slice(0, k);
};