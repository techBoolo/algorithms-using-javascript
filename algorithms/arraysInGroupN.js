const arraysInGroupN = (arr, N) => {
  const result = []
  if(N < 1) return -1
  while(arr.length > 0) {
    result.push(arr.splice(0, N))
  }
  return result
}

export default arraysInGroupN
