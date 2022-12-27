/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
    allowed = allowed.split('');
    
    const filtered = words.filter((word) => {
        for (let i = 0; i < word.length; i++) {
            if (!allowed.includes(word[i])) {
                return false;
            }
        }
        
        return true;
    });
    
    return filtered.length;
};