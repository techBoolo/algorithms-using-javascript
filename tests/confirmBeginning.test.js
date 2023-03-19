import confirmBeginning from '../algorithms/confirmBeginning.js'

test('the input must start with the given target', () => {
  let inputData = 'Bearer jsonwebtoken' 
  let target = 'bearer'
  expect(confirmBeginning(inputData, target)).toBeTruthy()
})

test('return false if the input does not start with the target', () => {
  let inputData = 'Bearer jsonwebtoken' 
  let target = 'dearer'
  expect(confirmBeginning(inputData, target)).not.toBeTruthy()
})

