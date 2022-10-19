import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Select from '..'

describe('<Select />', () => {
  const user = userEvent.setup()

  it('Should render chevron down icon as Dropdown Indicator', () => {
    const { getByLabelText } = render(<Select />)

    expect(getByLabelText(/chevronDown/i)).toBeInTheDocument()
  })

  it('Should render single value custom component when user select a option', async () => {
    const { getByTestId, getByText } = render(
      <Select menuIsOpen options={[{ value: 'test', label: 'Test' }]} />
    )

    const testOption = getByText('Test')

    await user.click(testOption)

    const singleValueElement = getByTestId('SingleValue')

    expect(singleValueElement).toBeInTheDocument()
  })

  it('Should render Menu and MenuList  custom components when select is opened', async () => {
    const { getByTestId } = render(<Select menuIsOpen />)

    const menuElement = getByTestId('Menu')
    const menuListElement = getByTestId('MenuList')

    expect(menuElement).toBeInTheDocument()
    expect(menuListElement).toBeInTheDocument()
  })

  it('Should render Input and Control custom components by default', async () => {
    const { getByTestId } = render(<Select />)

    const controlElement = getByTestId('Control')
    const inputElement = getByTestId('Input')

    expect(controlElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })
})
