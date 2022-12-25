const pushOrPopString = (str) => {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            result.pop();
        } else {
            result.push(str[i]);
        }
    }

    return result.join();
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    let firstStack = pushOrPopString(s);
    let secondStack = pushOrPopString(t);

    return firstStack === secondStack;
};