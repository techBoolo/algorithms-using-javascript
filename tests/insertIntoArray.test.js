import insertIntoArray from '../algorithms/insertIntoArray.js'

let arr
let len
beforeEach(() => {
  arr = [1, 4, 5]
  len = arr.length
})
describe('inserting into an array', () => {
  test('will succeed with the element included', () => {
    const result = insertIntoArray(arr, 2, 1)
    expect(result).toHaveLength(len + 1)
    expect(result).toContain(2)
  })
  test('will insert the give array elements', () => {
    let val = [2, 3]
    const result = insertIntoArray(arr, val, 1)
    expect(result).toHaveLength(len + val.length)
    val.forEach(ele => {
      expect(result).toContain(ele)
    })
  })
})
