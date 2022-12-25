/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mapScopes = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    
    if (s.length % 2) {
        return false;
    }
    
    const openScopes = ['(', '[', '{'];
    const currentState = [];
    let openedCount = 0;
    let closedCount = 0;
    
    const letters = s.split(''); 
    
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        
        if (openScopes.includes(letter)) {
            currentState.push(letter);
            openedCount++;
        } else {
            const lastLetter = currentState[currentState.length - 1];
            if (mapScopes[letter] === lastLetter) {
                currentState.pop();
                closedCount++;
            } else {
                return false;
            }
        }
    }
    
    if (openedCount !== closedCount) {
        return false;
    }
    
    return true;
};