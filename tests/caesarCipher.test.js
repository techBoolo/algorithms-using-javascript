import caesarCipher from '../algorithms/caesarCipher.js'

test('the correct cipher must be returned', () => {
  let plainText = 'plain text'

  const cipher = caesarCipher(plainText, 13)
  expect(cipher).toEqual('cynva grkg')
})
