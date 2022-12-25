/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const text = s.trim();
    
    if (!text) {
        return 0;
    }
    
    const worlds = text.split(' ').pop();
    
    return worlds.length;
};