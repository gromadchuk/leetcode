const checkAnagram = (str, anagramLetters) => {
    const strLetters = new Map();
    
    for (let letter of str) {
        strLetters.set(letter, (strLetters.get(letter) || 0) + 1);
    }
    
    for (let [letter, count] of strLetters) {
        if (anagramLetters.get(letter) !== count) {
            return false;
        }
    }
    
    return true;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    const result = [];
    const anagramLetters = new Map();
    
    for (let letter of p) {
        anagramLetters.set(letter, (anagramLetters.get(letter) || 0) + 1);
    }
    
    for (let i = 0; i <= (s.length - p.length); i++) {
        if (p.indexOf(s.slice(i + p.length - 1, i + p.length)) === -1) {
            i = i + p.length - 1;
        } else if (checkAnagram(s.slice(i, i + p.length), anagramLetters)) {
            result.push(i);
        }
    }
    
    return result;
};