const palindromes = function (oldString) {

    let symbols = [".", ",", "?", "!", " "];

    let oldStringArray = oldString.toUpperCase().split("").filter(item => symbols.includes(item) === false);

 /*
    for (stuff in symbols) {
        if ((oldStringArray.includes(stuff) === true) {
            oldStringArray.splice(indexOf)
        }
    };

 */
 
    let newStringArray = [];
    
    for (let x = (oldStringArray.length - 1); x >= 0; x--) {
        
        newStringArray.push(oldStringArray[x]);

    }

    let result = newStringArray.toString() === oldStringArray.toString() ? true : false;

    return result;

    

};

// Do not edit below this line
module.exports = palindromes;
