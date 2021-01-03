function productOfAnyAmountOfNumbers(...args) {
  let num =1;
  for(let i = 0; i < arguments.length; i++){
    num*= arguments[i];
  }
  return num;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;