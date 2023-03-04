function anagrams(str1, str2) {
  const str1Sanitized = str1.toLowerCase().replace(/[\W_]/g, '')
  const str2Sanitized = str2.toLowerCase().replace(/[\W_]/g, '')
  // both time and space complexity of, O(n) + O(m) for sanitizing the input strings
  //
  if(str1Sanitized.length !== str2Sanitized.length){
    return false;
  }

  let str1Obj = {}
  for(let i = 0; i < str1Sanitized.length; i++) {
    str1Obj[str1Sanitized[i]] = str1Obj[str1Sanitized[i]] + 1 || 1
  } 
  // time complexity of, O(n)
  // space complexity, in the worst case if each character appears once , O(n)

  for(let i = 0; i < str2Sanitized.length; i++) {
    let s = str1Obj[str2Sanitized[i]]
    if(!s) return false
    str1Obj[str2Sanitized[i]] -= 1
  } 
  // time complexity of, O(n),    // here we are sure they are same length
  // assigning to s, O(1)
  //
  Object.keys(str1Obj).forEach((k, v) => {
    if(v > 0) return false
  }) 
  // time complexity of, O(m)   // depending on the repetition of characters

  return true
}

// time complexity of, O(n) + O(m) + O(n) + O(n) + O(m) => O(n)
// space complexity of, O(n) + O(m) + O(n) + O(1) => O(n)
export default anagrams
