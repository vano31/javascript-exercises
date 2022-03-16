const removeFromArray = function(array,...items) {

    const arrayCopy = array;
    const l = arrayCopy.length;
    let i = items.length;
    innerLoop: for (const item of items) {
      let z = l - i;
      if (!(array.includes(item))) {
          continue innerLoop;
      }

      if (typeof(item) === `string`) {
            let newItem = items.indexOf(item);
            item = newItem;
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


   

// Do not edit below this line
module.exports = removeFromArray;
