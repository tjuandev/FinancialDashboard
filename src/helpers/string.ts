export const getFirstAndLastInitialsUpperCase = (str: string) => {
  const firstInitialRegex = /(\b\S)?/g
  const lastInitialRegex = /(^\S|\S$)?/g

  return (
    str
      ?.match(firstInitialRegex)
      ?.join('')
      ?.match(lastInitialRegex)
      ?.join('')
      ?.toUpperCase() || ''
  )
}

export const capitalize = (str: string) => {
  const firstCapitalizedLetter = str[0].toUpperCase()

  return firstCapitalizedLetter + str.slice(1)
}
