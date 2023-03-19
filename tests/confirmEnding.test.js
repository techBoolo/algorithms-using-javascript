import confirmEnding from '../algorithms/confirmEnding.js'

test('the input must end with the target string', () => {
  const inputData = 'user@email.com'
  const target = '.com'
  expect(confirmEnding(inputData, target)).toBeTruthy()
})

test('return false if not end with the target string', () => {
  const inputData = 'user@email.com'
  const target = '.om'
  expect(confirmEnding(inputData, target)).toBeFalsy()
})
