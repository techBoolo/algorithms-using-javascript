import fibonacci from '../algorithms/fibonacci.js'

//
describe('fibonacci', () => {
  test('of negative number must throw an error', () => {
    expect(() => fibonacci(-1)).toThrow()    
  })
  test('of zero return null', () => {
    expect(fibonacci(0)).toBeNull()
  })
  test('of a positive number must return correct result', () => {
    const result = fibonacci(5)
    expect(result).toHaveLength(5)
    expect(result).toContain(3)
    expect(result).toEqual(expect.arrayContaining([0, 1, 1, 2, 3]))
  })
})
