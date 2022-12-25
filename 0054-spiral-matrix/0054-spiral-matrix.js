/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    let rowIndex = 0;
    let action = 'right';

    const step = () => {
        if (action === 'right') {
            result.push(
                matrix[rowIndex].shift()
            );

            if (!matrix[rowIndex].length) {
                action = 'down';
                rowIndex++;
            }
        } else if (action === 'down') {
            result.push(
                matrix[rowIndex].pop()
            );
            
            if (matrix[rowIndex + 1] && matrix[rowIndex + 1].length) {
                rowIndex++;
            } else {
                action = 'left';
            }
        } else if (action === 'left') {
            result.push(
                matrix[rowIndex].pop()
            );

            if (!matrix[rowIndex].length) {
                action = 'up';
                rowIndex--;
            }
        } else if (action === 'up') {
            result.push(
                matrix[rowIndex].shift()
            );
            
            if (matrix[rowIndex - 1] && matrix[rowIndex - 1].length) {
                rowIndex--;
            } else {
                action = 'right';
            }
        }

        if (!matrix.every(row => row.length === 0)) {
            step();
        }
    };

    step();

    return result;
};