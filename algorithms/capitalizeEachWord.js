const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

export default (sentence) => {
  const arr = sentence.trim().split(/\s+/)
  const result = arr.map(word => capitalize(word))
  return result.join(' ')
}
