import { render } from '@testing-library/react'

import Default from '..'

const pageName = 'Page'
const profileName = 'Test'

describe('<Default />', () => {
  it('Should render breadcrumb if breadcrumb props is passed', () => {
    const { getByText } = render(
      <Default breadcrumbProps={{ name: pageName }} />
    )

    const breadcrumbNameElement = getByText(pageName)

    expect(breadcrumbNameElement).toBeInTheDocument()
  })

  it('Should render avatar if avatar props is passed', () => {
    const { getByText } = render(
      <Default avatarProps={{ name: profileName }} />
    )

    const breadcrumbNameElement = getByText(profileName)

    expect(breadcrumbNameElement).toBeInTheDocument()
  })
})
