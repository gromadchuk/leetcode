/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    let min = 1;
    let max = n;
    let current = 1;
    
    while (true) {
        current = Math.floor(((max - min) / 2) + min);
        
        const state = guess(current);
        if (state === 1) {
            min = current + 1;
        } else if (state === -1) {
            max = current - 1;
        } else {
            break;
        }
    }
    
    return current;
};