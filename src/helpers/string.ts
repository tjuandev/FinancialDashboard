export const getFirstAndLastInitialsUpperCase = (str: string) => {
  if (!str) {
    return ''
  }

  const firstInitialRegex = /(\b\S)?/g
  const lastInitialRegex = /(^\S|\S$)?/g

  return str
    ?.match(firstInitialRegex)
    ?.join('')
    ?.match(lastInitialRegex)
    ?.join('')
    ?.toUpperCase()
}
