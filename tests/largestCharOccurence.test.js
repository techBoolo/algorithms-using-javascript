import largestCharOccurence from '../algorithms/largestCharOccurence.js'

test('for empty string it throw', () => {
  expect(() => largestCharOccurence('')).toThrow()  
})

test('return the character with the largest occurence', () => {
  expect(largestCharOccurence('Occurence')).toMatch('c')
})
