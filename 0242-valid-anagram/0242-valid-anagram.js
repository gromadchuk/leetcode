const lettersCount = function(word) {
    return word
        .split('')
        .reduce((res, letter) => {
            if (!res[letter]) {
                res[letter] = 0;
            }

            res[letter]++;

            return res;
        }, {});
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const sSize = s.length; 
    const tSize = t.length; 
    
    if (sSize !== tSize) {
        return false;
    }
    
    const sLetters = lettersCount(s);
    const tLetters = lettersCount(t);

    return Object.keys(sLetters).every((letter) => sLetters[letter] === tLetters[letter]);
};