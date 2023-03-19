export default (data, target) => {
  const regex = new RegExp(`^${target}`, 'i')
  return regex.test(data)
}

