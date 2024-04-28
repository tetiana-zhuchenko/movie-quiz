const validate = (value: string) => {
  const trimmedValue = value.trim().toLowerCase()
  if (/^[a-zA-Z0-9]+$/.test(trimmedValue)) {
    console.log('trimmedValue', trimmedValue)
    return trimmedValue
  } else {
    console.log('err i validate')
    return false
  }
}

export default validate
