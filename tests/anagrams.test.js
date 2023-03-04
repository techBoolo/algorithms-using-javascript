import anagrams from '../algorithms/anagrams.js'

describe('anagrams', () => {
  test('unequal length strings are not anagrams', () => {
    let str1 = 'just lenght diff'
    let str2 = 'length diff'
    expect(anagrams(str1, str2)).toBeFalsy()
  })

  test('anagrams strings return true', () => {
    let str1 = '_time!'
    let str2 = 'emit-_??'
    expect(anagrams(str1, str2)).toBeTruthy()
  })

  test('non anagrams strings return false', () => {
    let str1 = '_time!!!!'
    let str2 = '-emtt'
    expect(anagrams(str1, str2)).toBeFalsy()
  })
})
