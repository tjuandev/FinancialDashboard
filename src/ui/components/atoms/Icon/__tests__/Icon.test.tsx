import { render, screen } from '@testing-library/react'

import Icon from '..'
import { IconsNames } from '../types'

describe('<Icon />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
  })

  it('Should render icons based on name', () => {
    render(<Icon name="notification" />)

    const notificationIcon = screen.getByLabelText(/notification/i)

    expect(notificationIcon).toBeInTheDocument()
  })

  it('Should trigger error if a unknown icon is passed', () => {
    expect(() =>
      render(<Icon name={'testUnknownIcon' as IconsNames} />)
    ).toThrow()
  })
})
