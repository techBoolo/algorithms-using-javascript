const isPrime = (num) => {
  if(num < 2) {
    throw new Error('the number to test must be greater than 2')
  }
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}

export default isPrime
