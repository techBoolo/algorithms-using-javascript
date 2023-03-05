import arraysInGroupN from '../algorithms/arraysInGroupN.js'

let arr, N

beforeEach(() => {
  arr = [1, 2, 3, 4, 5, 6, 7 ]
  N = 3
})

describe('arrays in group of N', () => {
  test('if N is not positive integer it will return -1', () => {
    N = 0 
    const result = arraysInGroupN(arr, N)
    expect(result).toBe(-1)
  })
  test('result array must be correct size', () => {
    const resultLen = Math.ceil(arr.length / N)
    const result = arraysInGroupN(arr, N)
    expect(result.length).toBe(resultLen)
  })
  test('each grouped array must be atmost the given size N', () => {
    const result = arraysInGroupN(arr, N)
    result.forEach(r => {
      expect(r.length).toBeLessThanOrEqual(N)
    })
  })
  test('the first array element must contain atmost the first N elements', () => {
    const result = arraysInGroupN(arr, N)
    if(arr.length > N) {
      expect(result[0].length).toEqual(N)
      expect(result[0]).toEqual(arr.slice(0, N))
    }
  })
})
