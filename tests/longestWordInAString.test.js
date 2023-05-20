import longestWordInAString from '../algorithms/longestWordInAString.js'

test('empty string throw an error', () => {
  let str = ' '
  expect(() => longestWordInAString(str.trim())).toThrow()
})

test('return the correct word', () => {
  const str = 'find the longest word in this string'

  expect(longestWordInAString(str)).toMatch(/longest/)
})
