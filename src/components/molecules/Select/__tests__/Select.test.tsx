import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Select from '..'

describe('<Select />', () => {
  const user = userEvent.setup()

  it('Should render chevron down icon as Dropdown Indicator', () => {
    render(<Select />)

    const chevronDownIconElement = screen.getByLabelText(/chevronDown/i)

    expect(chevronDownIconElement).toBeInTheDocument()
  })

  it('Should render single value custom component when user select a option', async () => {
    render(<Select menuIsOpen options={[{ value: 'test', label: 'Test' }]} />)

    const testOption = screen.getByText('Test')

    await user.click(testOption)

    const singleValueElement = screen.getByTestId('SingleValue')

    expect(singleValueElement).toBeInTheDocument()
  })

  it('Should render Menu and MenuList  custom components when select is opened', async () => {
    render(<Select menuIsOpen />)

    const menuElement = screen.getByTestId('Menu')
    const menuListElement = screen.getByTestId('MenuList')

    expect(menuElement).toBeInTheDocument()
    expect(menuListElement).toBeInTheDocument()
  })

  it('Should render Input and Control custom components by default', async () => {
    render(<Select />)

    const controlElement = screen.getByTestId('Control')
    const inputElement = screen.getByTestId('Input')

    expect(controlElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })
})
