/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    words.sort();
    
    const tempData = new Map();
    const tempTop = [];
    
    for (let word of words) {
        tempData.set(word, (tempData.get(word) || 0) + 1);
    }
    
    for (let [word, count] of tempData) {
        tempTop[count] = [...(tempTop[count] || []), word];
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