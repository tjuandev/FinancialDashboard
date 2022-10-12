import { render } from '@testing-library/react'

import Select from '..'

describe('<Select />', () => {
  it('Expect true to be true', () => {
    render(<Select />)

    expect(true).toBeTruthy()
  })
})
