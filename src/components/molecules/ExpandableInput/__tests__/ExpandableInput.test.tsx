import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ExpandableIconButton from '..'

const CALLED_ONE_TIME = 1

/* eslint-disable */

jest.mock('components/atoms/Icon', () => () => <svg aria-label="icon-test" />)

describe('<ExpandableIconButton />', () => {
  const user = userEvent.setup()

  it('Should expand when get clicked', async () => {
    render(<ExpandableIconButton placeholder="test" />)

    const buttonElement = screen.getByRole('button')
    await user.click(buttonElement)

    const containerElement = screen.getByTestId('container element')

    expect(containerElement).toHaveAttribute('aria-expanded', 'true')
  })

  it('Should call onOpen and inputFocus when getClicked', async () => {
    const onOpen = jest.fn()

    render(<ExpandableIconButton placeholder="test" onOpen={onOpen} />)

    const inputElement = screen.getByPlaceholderText('test')
    const buttonElement = screen.getByRole('button')
    await user.click(buttonElement)

    expect(onOpen).toHaveBeenCalledTimes(CALLED_ONE_TIME)
    expect(inputElement).toHaveFocus()
  })

  it('Should render a placeholder and an icon', () => {
    const placeholderValue = 'test'

    render(
      <ExpandableIconButton placeholder={placeholderValue} iconName="search" />
    )

    const inputElement = screen.getByPlaceholderText(placeholderValue)
    const icon = screen.getByLabelText('icon-test')

    expect(inputElement).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('placeholder', placeholderValue)
  })

  it('Should shrink when click outside', async () => {
    render(<ExpandableIconButton placeholder="test" />)

    const buttonElement = screen.getByRole('button')

    await user.click(buttonElement)

    const outsideComponent = document.body

    await user.click(outsideComponent)

    const containerElement = screen.getByTestId('container element')

    expect(containerElement).toHaveAttribute('aria-expanded', 'false')
  })
})
