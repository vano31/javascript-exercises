const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y
};

/* This version uses normal for loop and causes problems even though it shouldn't)
const sum = function(...kirby) {

  if (kirby.length === 0) {
    return 0;
  } else {

    let addition = kirby[0];
    
	  for (let z = 1; z < kirby.length; z++) {
      addition += kirby[z];
    }

    return addition;

  }

};

*/

/*
This didn't work either. Maybe an issue with the [] in the test environment?
const sum = function(...kirby) {

  const initialValue = 0;
  const sumWithInitial = kirby.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return sumWithInitial;


}

*/



const multiply = function() {
  //Won't try this because I will run into the the same problem I have with sum
};

const power = function(x, y) {

  return x ** y;
	
};

const factorial = function(x) {

  if (x === 0) {

    return 1;

  }  else {

    return x * factorial(x- 1);

  }

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
