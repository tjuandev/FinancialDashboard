import { render } from '@testing-library/react'

import ExpandableIconButton from '..'

describe('<ExpandableIconButton />', () => {
  it('Expect true to be true', () => {
    render(<ExpandableIconButton />)

    expect(true).toBeTruthy()
  })
})
