import { render } from '@testing-library/react'

import Table from '..'

describe('<Table />', () => {
  it('Expect true to be true', () => {
    render(<Table />)

    expect(true).toBeTruthy()
  })
})
