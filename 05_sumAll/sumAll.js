const sumAll = function(p1, p2) {
    if ((typeof p1 === `number` && typeof p2 === `number`) && (p1 > 0 && p2 > 0) && ((Math.round(p1) % p1) === 0 && (Math.round(p2) % p2) === 0)) {
        let big;
        let small;

        /*
        switch (p1) {
            case (p1 > p2):
                big = p1;
                small = p2;
                break;
            
            case (p1 < p2):
                big = p2;
                small = p1;
                break;
        }
        */
    
        if (p1 > p2) {
            big = p1;
            small = p2;
        }   else {
            big = p2;
            small = p1;
        }

        let sum = 0;
        
        for (let i = small; i <= big; i++) {
            sum += i;
        }

        return sum;

    }   else {
        return (`ERROR`);
    }
    
};


console.log(sumAll(1,4));


// Do not edit below this line
module.exports = sumAll;
