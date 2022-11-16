import { render, screen } from '@testing-library/react'

import Header from '..'

const pageName = 'Page'
const profileName = 'Test'

describe('<Header />', () => {
  it('Should render breadcrumb if breadcrumb props is passed', () => {
    render(<Header breadcrumbProps={{ name: pageName }} />)

    const breadcrumbNameElement = screen.getByText(pageName)

    expect(breadcrumbNameElement).toBeInTheDocument()
  })

  it('Should render avatar if avatar props is passed', () => {
    render(<Header avatarProps={{ name: profileName }} />)

    const breadcrumbNameElement = screen.getByText(profileName)

    expect(breadcrumbNameElement).toBeInTheDocument()
  })
})
