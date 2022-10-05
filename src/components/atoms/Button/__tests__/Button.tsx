import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '..'

const calledOneTime = 1

const buttonChildren = 'Test'

describe('<Button />', () => {
  const user = userEvent.setup()

  it('Should render children', () => {
    const { getByRole } = render(<Button>{buttonChildren}</Button>)

    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveTextContent(buttonChildren)
  })

  it('Should trigger onClick when get clicked', async () => {
    const onClick = jest.fn()

    const { getByRole } = render(
      <Button onClick={onClick}>{buttonChildren}</Button>
    )

    const buttonElement = getByRole('button')
    await user.click(buttonElement)

    expect(onClick).toHaveBeenCalledTimes(calledOneTime)
  })

  it('Should change padding if prop passed', () => {
    const { getByRole } = render(
      <Button padding="1rem">{buttonChildren}</Button>
    )

    const buttonElement = getByRole('button')

    expect(buttonElement).toHaveStyle({
      padding: '1rem'
    })
  })
})
