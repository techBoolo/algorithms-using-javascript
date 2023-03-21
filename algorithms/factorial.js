const factorial = (n) => {
  if(n < 0) {
    throw new Error('must be positive integer')
  } 
  if(n === 0) {
    return 1
  }
  let result = n * factorial(n - 1)
  return result
}

export default factorial
