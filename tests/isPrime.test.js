import isPrime from '../algorithms/isPrime.js'

test('a number less than two throws an error', () => {
  expect(() => isPrime(0)).toThrow()
})

test('if a number is not prime it will return false', () => {
  expect(isPrime(9)).toBeFalsy()
})

test('if a number is prime it will return true', () => {
  expect(isPrime(7)).toBeTruthy()
})
