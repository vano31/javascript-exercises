const ftoc = function(F) {

  let c = ((F - 32) * (5/9));
  if ((Math.round(c) / c) === 1) {
    return c;
  } else {
    //let newc = parseInt(c.toFixed(2));
    let newc = c.toFixed(1);
    return parseFloat(newc);
  }
  

};

const ctof = function(C) {

  let f = ((C * (9/5)) + 32);
  if ((Math.round(f) / f ) === 1) {
    return f;
  } else {
    //let newf = parseInt(f.toFixed(2));
    let newf =f.toFixed(1);
    return parseFloat(newf);
  }
  

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


console.log(ftoc(67));