function containsDuplicate(nums) {
  const dict = {}
  for (let number of nums) {
    if(dict[number]) {
      return true
    }
    dict[number] = 1
  }
  return false
}


