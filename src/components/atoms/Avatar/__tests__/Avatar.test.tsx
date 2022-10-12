import { render } from '@testing-library/react'
import { getFirstAndLastInitialsUpperCase } from 'helpers/string'

import Avatar from '..'

const avatarUrl = 'test'

const avatarName = 'Thiago Juan'
const avatarDescription = 'Student'

describe('<Avatar />', () => {
  it('Should render img with url prop if passed', () => {
    const { getByRole } = render(<Avatar name={avatarName} url={avatarUrl} />)

    const imageElement = getByRole('img')

    expect(imageElement).toHaveAttribute('src', avatarUrl)
  })

  it('Should render avatar info according to props', () => {
    const { getByText } = render(
      <Avatar name={avatarName} description={avatarDescription} />
    )

    const nameElement = getByText(avatarName)
    const descriptionElement = getByText(avatarDescription)

    expect(nameElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('Should render a placeholder with name initial if url not passed', () => {
    const { getByText } = render(
      <Avatar name={avatarName} description={avatarDescription} />
    )

    const placeholderElement = getByText(
      getFirstAndLastInitialsUpperCase(avatarName)!
    )

    expect(placeholderElement).toBeInTheDocument()
  })
})
