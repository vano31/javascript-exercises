const fibonacci = function(x) {

    let number = Number(x);
    let innerfunction = function(number) {


        if (number <= 0) {
            return 0;
        }   else if (number === 1) {
            return 1;
        }   else {
            return innerfunction(number - 2) + innerfunction(number - 1);
        }

    }

    let answer = innerfunction(number);
    if (answer <= 0) {
        return "OOPS"
    }   else {
        return answer;
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
