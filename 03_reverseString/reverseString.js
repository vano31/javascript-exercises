const reverseString = function(str) {
    const l = str.length;
    let newStr = str.slice(-1);
    for (i = 0; i > -l; i--) {
        let newLtr = str.slice((i - 1), i);
        newStr += newLtr;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
