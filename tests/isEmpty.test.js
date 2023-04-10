import isEmpty from '../algorithms/isEmpty.js'
describe('the test', () => {
  test('throw an error if the argument given is not an object or array', () => {
    const num = 12
    expect(() => isEmpty(num)).toThrow()
  })
  test('checks if an array is empty', () => {
    let arr = []
    expect(isEmpty(arr)).toBeTruthy()
    arr.push(1, 2, 3)
    expect(isEmpty(arr)).not.toBeTruthy()
  })
  test('check if an object contains no element', () => {
    let obj = {}
    expect(isEmpty(obj)).toBeTruthy()
    obj['one'] = 1
    obj['two'] = 2
    expect(isEmpty(obj)).not.toBeTruthy()
  })
})
