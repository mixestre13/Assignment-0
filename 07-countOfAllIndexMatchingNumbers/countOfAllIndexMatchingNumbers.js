function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let counting = 0;

  for(let i =0; i < nums.length; i++){

    if(i == nums[i]){

      counting++;
    }
  }

  return counting;

}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;