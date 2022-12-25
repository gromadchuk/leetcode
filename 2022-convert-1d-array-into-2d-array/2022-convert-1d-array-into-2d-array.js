/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if ((m * n) !== original.length) {
        return [];
    }

    const result = [];
    let row = [];

    for (let i = 0; i <= original.length; i++) {
        if (i > 0 && (i % n) === 0) {
            result.push(row);
            row = [];
        }

        row.push(original[i]);
    }

    return result;
};