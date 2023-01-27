/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let currentPrice = prices[0];
    let result = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > currentPrice && (prices[i] - currentPrice) > result) {
            result = prices[i] - currentPrice;
        }

        if (prices[i] < currentPrice) {
            currentPrice = prices[i];
        }
    }

    return result;
};