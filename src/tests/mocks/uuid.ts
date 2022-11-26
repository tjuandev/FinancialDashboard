jest.mock('uuid', () => {
  const base = '9134e286-6f71-427a-bf00-'
  let current = 100000000000

  return {
    v4: () => {
      const uuid = base + current.toString()
      current++

      return uuid
    }
  }
})

export {}
