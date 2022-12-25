/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const prefix = word.indexOf(ch);
    
    if (prefix === -1 || prefix === 0) {
        return word;
    }
    
    const prefixWord = word
        .slice(0, prefix + 1)
        .split('')
        .reverse()
        .join('');
    
    return prefixWord + word.slice(prefix + 1, word.length);
};