function isPowerOfTen(n) {
  if(n < 1) {
    throw new Error('argument must be postive number')
  }
  while(n > 1) {
    if(n % 2 !==0) {
      return false
    }
    n /= 2
  }
  return true
}

export default isPowerOfTen
