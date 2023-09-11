import { render, screen } from '@testing-library/react'
import IconButton from '..'

describe('<IconButton />', () => {
  it('Should render with correct icon', () => {
    render(<IconButton name="search" />)
    const icon = screen.getByLabelText('search icon')
    expect(icon).toBeInTheDocument()
  })
})
