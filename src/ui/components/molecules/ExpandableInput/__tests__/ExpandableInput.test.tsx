import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ExpandableIconButton from '..'

const CALLED_ONE_TIME = 1

describe('<ExpandableIconButton />', () => {
  const user = userEvent.setup()

  it('Should expand with passed width when get clicked', async () => {
    render(<ExpandableIconButton placeholder="test" expandedWidth="200px" />)

    const buttonElement = screen.getByRole('button')
    await user.click(buttonElement)

    const containerElement = screen.getByTestId('container-element')

    expect(containerElement).toHaveAttribute('aria-expanded', 'true')

    expect(containerElement).toHaveStyle({
      width: '200px'
    })
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

  it('Should shrink when lose focus', async () => {
    const placeholderValue = 'test'
    render(<ExpandableIconButton placeholder={placeholderValue} />)

    const buttonElement = screen.getByRole('button')

    await user.click(buttonElement)
    await user.click(document.body)

    const containerElement = screen.getByTestId('container-element')

    expect(containerElement).toHaveAttribute('aria-expanded', 'false')
  })
})
