/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length;
    }
    
    let maxDiff = 1;
    let tempDiff = [];
    
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        
        if (tempDiff.indexOf(letter) !== -1) {
            tempDiff.splice(0, tempDiff.indexOf(letter) + 1);
        }
        
        tempDiff.push(letter);
        
        if (tempDiff.length > maxDiff) {
            maxDiff = tempDiff.length;
        }
    }
    
    return maxDiff;
};