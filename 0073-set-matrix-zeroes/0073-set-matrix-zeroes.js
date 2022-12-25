/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowsCount = matrix.length;
    const columnsCount = matrix[0].length;

    const zeroRows = [];
    const zeroColumns = [];

    for (let i = 0; i < rowsCount; i++) {
        for (let j = 0; j < columnsCount; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.push(i);
                zeroColumns.push(j);
            }
        }
    }

    for (let i = 0; i < rowsCount; i++) {
        for (let j = 0; j < columnsCount; j++) {
            if (zeroRows.includes(i) || zeroColumns.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};