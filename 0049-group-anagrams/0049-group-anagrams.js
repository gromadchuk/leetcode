const getKey = (word) => {
    return word.split('').sort().join('');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const tempData = new Map();
    
    for (let word of strs) {
        const key = getKey(word);
        
        tempData.set(key, [...(tempData.get(key) || []), word]);
    }
    
    return Array.from(tempData.values());
};