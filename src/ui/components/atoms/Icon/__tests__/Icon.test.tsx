import { render, screen } from '@testing-library/react'
import { runTestSilently } from 'tests/mocks'

import Icon from '..'
import { IconsLiteralsOptions } from '../types'

describe('<Icon />', () => {
  it('Should render icons based on name', () => {
    render(<Icon name="notification" />)

    const notificationIcon = screen.getByLabelText(/notification/i)

    expect(notificationIcon).toBeInTheDocument()
  })

  it('Should trigger error if a unknown icon is passed', () => {
    expect(() =>
      render(<Icon name={'testUnknownIcon' as IconsLiteralsOptions} />)
    ).toThrowError()
  })

  runTestSilently()
})
