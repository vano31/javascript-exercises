const removeFromArray = function(array,...items) {

    const arrayCopy = array;
    const l = arrayCopy.length;
    let i = items.length;
    innerLoop: for (let item of items) {
      let z = l - i;
      if (!(array.includes(item))) {
          continue innerLoop;
      }

      /*
      item = (items.indexOf(item)) + 1
      */

      if (typeof(item) === `string`) {
            item = items.indexOf(item) + 1;   
      }
    
      if (array[item - 1] === arrayCopy[item - 1]) {
        array.splice((item - 1), 1);
      } else {
        array.splice((item - 1 - z), 1);
      }
      i--;
    }
    return array;
}

console.log(removeFromArray([`hey`, `ha`, 3, 4, `ho`], 3, 4));
   

// Do not edit below this line
module.exports = removeFromArray;
