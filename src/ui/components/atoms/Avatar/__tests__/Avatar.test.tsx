import { render, screen } from '@testing-library/react'
import { getFirstAndLastInitialsUpperCase } from 'helpers/string'

import Avatar from '..'

const avatarUrl = 'test'

const avatarName = 'Thiago Juan'
const avatarDescription = 'Student'

describe('<Avatar />', () => {
  it('Should render img with url prop if passed', () => {
    render(<Avatar name={avatarName} url={avatarUrl} />)

    const imageElement = screen.getByRole('img')

    expect(imageElement).toHaveAttribute('src', avatarUrl)
  })

  it('Should render avatar info according to props', () => {
    render(<Avatar name={avatarName} description={avatarDescription} />)

    const nameElement = screen.getByText(avatarName)
    const descriptionElement = screen.getByText(avatarDescription)

    expect(nameElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('Should render a placeholder with name initial if url not passed', () => {
    render(<Avatar name={avatarName} description={avatarDescription} />)

    const placeholderElement = screen.getByText(
      getFirstAndLastInitialsUpperCase(avatarName)
    )

    expect(placeholderElement).toBeInTheDocument()
  })
})
