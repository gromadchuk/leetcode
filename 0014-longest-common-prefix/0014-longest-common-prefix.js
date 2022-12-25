/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    
    const firstWord = strs[0];
    const minLength = Math.min(...strs.map(word => word.length));
    let findedPrefix = false;
    
    console.log("minLength", minLength);
    
    for (let i = 1; i <= minLength; i++) {
        const everyPrefix = strs.every((word) => {
            return firstWord.slice(0, i) === word.slice(0, i);
        });
        
        if (everyPrefix) {
            findedPrefix = true;
        } 
        
        if (findedPrefix && !everyPrefix) {
            return firstWord.slice(0, i - 1);
        }
    }
    
    if (findedPrefix) {
        return firstWord;
    }
    
    return '';
};