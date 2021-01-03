function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let counting = 0;

  for(let i =0; i < nums.length;i++){

    if(nums[i] < target){
      counting++;
    }
  }
  return counting;
}


// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;