import isPowerOfTwo from '../algorithms/isPowerOfTen.js'

test('for non positive number it throws', () => {
  expect(() => isPowerOfTwo(-1)).toThrow() 
})

test('return true for a value which is power of ten', () => {
  expect(isPowerOfTwo(16)).toBeTruthy()
})

test('return false for a value which is not power of ten', () => {
  expect(isPowerOfTwo(12)).toBeFalsy()
})
