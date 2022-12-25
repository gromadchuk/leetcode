/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s = s.split(' ');
    
    return s.slice(0, k).join(' ');
};