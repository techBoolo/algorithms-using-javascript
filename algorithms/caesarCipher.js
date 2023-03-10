const caesarCipher = (str, shift) => {
  let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let cipher = ''
  
  // for each input string character
  for(let i = 0; i < str.length; i++) {
    // find the character index in the alphabet array
    const idx = alphabetArray.indexOf(str[i])
    if(idx == -1) {
      // character not found, means it is not an alphabet, so add the character
      // itself in the result string witout shifting
      cipher += str[i]
      // continue to the next iteration
      continue
    }
    // otherwise the chaaracter is alphabet, then shift the index
    const shiftedIdx = idx + shift
    // we have to handle the looping after reaching the end 26
    const correctShiftedIdx = shiftedIdx % 26
    cipher += alphabetArray[correctShiftedIdx]
  }
  return cipher
}

export default caesarCipher
