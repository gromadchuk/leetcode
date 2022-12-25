/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    const result = [];

    for (let word of words) {
        for (let i = 0; i <= text.length - word.length; i++) {
            if (text.slice(i, i + word.length) === word) {
                result.push([i, (i + word.length) - 1]);
            }
        }
    }

    result.sort((a, b) => a[1] - b[1]);
    result.sort((a, b) => a[0] - b[0]);

    return result;
};