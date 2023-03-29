function fibonacci(n) {
  if(n < 0) {
    throw new Error('Argument is not a positive integer');
  }
  if(n == 0) {
    return null
  }
  let fib = []
  if(n == 1) fib.push(0)
  if(n == 2) fib.push(0, 1)
  fib.push(0, 1)
  for( let i = 2; i < n; i++) {
    let res = fib[i - 2] + fib[i - 1]
    fib.push(res)
  }
  return fib
}

export default fibonacci
