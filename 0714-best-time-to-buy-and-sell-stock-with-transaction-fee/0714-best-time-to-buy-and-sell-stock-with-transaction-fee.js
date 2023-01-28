/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function(prices, fee) {
    let hold = -prices[0];
    let notHold = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const tempHold = notHold;
        
        notHold = Math.max(prices[i] - fee + hold, notHold);
        hold = Math.max(-prices[i] + tempHold, hold);
    }
    
    return Math.max(notHold, hold);
};