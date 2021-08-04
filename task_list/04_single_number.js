function singleNumber(nums) {
  const dict = nums.reduce((accum, el) => {
    accum[el] ? accum[el] += 1 : accum[el] = 1
    return accum
  }, {})

  for (key in dict) {
    if (dict[key] === 1) {
      return +key
    }
  }
}
