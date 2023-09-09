import { render, screen } from '@testing-library/react'

import Header from '..'

const pageName = 'Page'
const profileName = 'Test'

describe('<Header />', () => {
  it('Should render breadcrumb and avatar if props is passed', () => {
    render(
      <Header
        breadcrumbProps={{ name: pageName }}
        avatarProps={{ name: profileName }}
      />
    )

    const breadcrumbNameElement = screen.getByText(pageName)
    const avatarNameElement = screen.getByText(profileName)

    expect(avatarNameElement).toBeInTheDocument()
    expect(breadcrumbNameElement).toBeInTheDocument()
  })
})
