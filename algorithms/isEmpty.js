export default (arg) =>  {
  if(Array.isArray(arg)) {
    return arg.length === 0
  } else if(typeof(arg) === 'object') {
    const keys = Object.keys(arg)
    return keys.length === 0
  } else {
    throw new Error('not an object')
  }
}
