/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const findGreaterLetter = letters.find(letter => letter > target);
    if (findGreaterLetter) {
        return findGreaterLetter;
    }

    return letters[0];
};