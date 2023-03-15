import capitalizeEachWord from '../algorithms/capitalizeEachWord.js'

let sentence = 'capitalize this sentence'
test('must capitalize each word', () => {
  const result = capitalizeEachWord(sentence)

  expect(result).toEqual('Capitalize This Sentence')
})
