import factorial from '../algorithms/factorial.js'

let n
describe('factorial', () => {
  test('factorial of a negative number must throw an error', () => {
    n = -3
    expect(() => factorial(n)).toThrow()
  })
  test('factorial of 0 is 1', () => {
    n = 0
    expect(factorial(n)).toBe(1)
  })
  test('factorial of a positive integer must be returned', () => {
    n = 4
    expect(factorial(n)).toBe(24)
  })
})
