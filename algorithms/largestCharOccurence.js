export default (str) => {
  if(!str.trim()) {
    throw new Error('no character found / empty string')
  }
  str = str.toLowerCase();
  let arr = str.split('')
  const charObj = {}
  let max = 0
  let maxChar;
  for(let ch of arr) {
    if(Object.hasOwn(charObj, ch)) {
      charObj[ch] = charObj[ch] + 1
    } else {
      charObj[ch] = 1
    }
    if(charObj[ch] > max) {
      max = charObj[ch]
      maxChar = ch
    }
  }
  return maxChar
}
