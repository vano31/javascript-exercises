const repeatString = function(string, num) {
    let newString = string;
    if (num === 0) {
        return ``;
    } else if (num < 0) {
        return `ERROR`;
    } else if (string === ``) {
        return ``;
    }
    for (let i = 1; i < num; i++) {

        newString = string + newString;
    }
    return newString;
};



// Do not edit below this line
module.exports = repeatString;

