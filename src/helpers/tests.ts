import '@testing-library/jest-dom'

export const runTestSilently = () =>
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
  })
