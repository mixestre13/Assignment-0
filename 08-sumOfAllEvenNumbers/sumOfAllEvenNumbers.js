function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let counting = 0;
for(let i = 0; i < nums.length;i++){
  if(nums[i] % 2 == 0){
    counting++;
  }
}
return counting;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;