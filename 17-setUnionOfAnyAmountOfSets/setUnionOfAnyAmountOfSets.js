function setUnionOfAnyAmountOfSets(...args) {
  let complSet = new Set();
  for(i of args){
    for(j of i){
      if(!complSet.has(j)){
        complSet.add(j);
      }
    }
  }
  return complSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;