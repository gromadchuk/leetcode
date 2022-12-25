/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = `${ x }`;
    
    if (string[0] === '-') {
        return false;
    }
    
    if (string.length % 2) {
        string = string.split('');
        string.splice(Math.floor(string.length/2), 1);
        string = string.join('');
    }
    
    const firstPart = string.slice(0, string.length / 2);
    const secondPart = string.slice(string.length / 2, string.length).split('').reverse().join('');
    
    return firstPart === secondPart;
};