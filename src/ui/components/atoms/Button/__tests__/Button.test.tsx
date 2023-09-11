import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'ui/theme'

import Button from '..'

const calledOneTime = 1

const buttonChildren = 'Test'

describe('<Button />', () => {
  const user = userEvent.setup()

  it('Should render childrean', () => {
    render(<Button>{buttonChildren}</Button>)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent(buttonChildren)
  })

  it('Should trigger onClick when get clicked', async () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>{buttonChildren}</Button>)

    const buttonElement = screen.getByRole('button')
    await user.click(buttonElement)

    expect(onClick).toHaveBeenCalledTimes(calledOneTime)
  })

  it('Should change padding if prop passed', () => {
    render(<Button padding="1rem">{buttonChildren}</Button>)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveStyle({
      padding: '1rem'
    })
  })

  it('Should change button color based on colorSchema', () => {
    render(<Button colorSchema="primary">{buttonChildren}</Button>)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      color: theme.colors.primary
    })
  })
})
