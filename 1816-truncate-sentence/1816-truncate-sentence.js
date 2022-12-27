/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) => {
    s = s.split(' ');
    
    return s.slice(0, k).join(' ');
};