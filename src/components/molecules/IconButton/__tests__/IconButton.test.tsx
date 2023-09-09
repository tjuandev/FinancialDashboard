import { render } from '@testing-library/react'

import IconButton from '..'

describe('<IconButton />', () => {
  it('Expect true to be true', () => {
    render(<IconButton />)

    expect(true).toBeTruthy()
  })
})
