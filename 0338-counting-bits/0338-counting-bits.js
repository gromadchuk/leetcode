/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
    const result = [0];

    for (let i = 1; i <= n; i++) {
        result.push(
            i
                .toString(2)
                .split('')
                .filter(num => num === '1')
                .length
        );
    }

    return result;
};