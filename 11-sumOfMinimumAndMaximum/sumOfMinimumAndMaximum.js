function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  nums.sort;

  return nums[0]+nums[nums.length-1];
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;