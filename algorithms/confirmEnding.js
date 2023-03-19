export default (inputData, target) => {
  return inputData.substring(inputData.length - target.length) === target
}
