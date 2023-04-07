export default (arr, val, pos) => {
  if(Array.isArray(val)) {
    arr.splice(pos, 0, ...val)
  } else {
    arr.splice(pos, 0, val)
  }
  return arr
}
