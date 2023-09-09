import { render } from '@testing-library/react'

import Spinner from '..'

describe('<Spinner />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Spinner />)

    expect(container).toMatchSnapshot()
  })
})
