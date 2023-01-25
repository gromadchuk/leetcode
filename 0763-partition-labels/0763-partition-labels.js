/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function(s) {
    const lettersLastIndexes = {};
    
    for (let i = 0; i < s.length; i++) {
        lettersLastIndexes[s[i]] = i;
    }
    
    const result = [];
    let curLast = 0;
    let end = 0;
    
    for (let j = 0; j < s.length; j++) {
        curLast = Math.max(curLast, lettersLastIndexes[s[j]]);
        
        if (j === curLast) {
            result.push(j + 1 - end);
            end = j + 1;
        }
    }

    return result;
};