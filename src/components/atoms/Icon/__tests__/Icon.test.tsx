import { render } from '@testing-library/react'
import { runTestSilently } from 'helpers/tests'

import Icon from '..'
import { IconsLiteralsOptions } from '../types'

describe('<Icon />', () => {
  it('Should render icons based on name', () => {
    const { getByLabelText } = render(<Icon name="notification" />)

    const notificationIcon = getByLabelText(/notification/i)

    expect(notificationIcon).toBeInTheDocument()
  })

  it('Should trigger error if a unknown icon is passed', () => {
    expect(() =>
      render(<Icon name={'testUnknownIcon' as IconsLiteralsOptions} />)
    ).toThrowError()
  })

  runTestSilently()
})
