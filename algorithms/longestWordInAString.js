const longestWordInAString = (str) => {
  if(str.trim().length  === 0 ) {
    throw new Error('a string must be provided')
  }
  let words = str.split(/\s+/)
  let longest = words[0]
  for(let i = 1; i < words.length; i++){
    if(words[i].length > longest.length) {
      longest = words[i]
      console.log(words[i], longest);
    }
  }
  return longest
}

export default longestWordInAString
