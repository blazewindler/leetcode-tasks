function findDisappearedNumbers(nums) {
  const  maxNum = nums.length
  const output = []
  
  const dict = nums.reduce((accum, el) => {
    accum[el] ? accum[el] += 1 : accum[el] = 1
    return accum
  }, {})

  for(let i = 1; i < maxNum + 1; i++) {
    if(!dict[i]) {
      output.push(i)
    }
  }
  return output
}

const nums = [1, 1]

console.log(findDisappearedNumbers(nums))

