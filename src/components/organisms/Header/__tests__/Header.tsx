import { render } from '@testing-library/react'

import Header from '..'

const pageName = 'Page'
const profileName = 'Test'

describe('<Header />', () => {
  it('Should render breadcrumb if breadcrumb props is passed', () => {
    const { getByText } = render(
      <Header breadcrumbProps={{ name: pageName }} />
    )

    const breadcrumbNameElement = getByText(pageName)

    expect(breadcrumbNameElement).toBeInTheDocument()
  })

  it('Should render avatar if avatar props is passed', () => {
    const { getByText } = render(<Header avatarProps={{ name: profileName }} />)

    const breadcrumbNameElement = getByText(profileName)

    expect(breadcrumbNameElement).toBeInTheDocument()
  })
})
