function missingNumber(nums) {
  const maxNum = nums.length
  const expected = maxNum * (maxNum + 1) / 2

  return expected - nums.reduce((accum, el) => accum + el)

}

