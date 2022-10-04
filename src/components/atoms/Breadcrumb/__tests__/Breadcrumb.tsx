import { render } from '@testing-library/react'

import Breadcrumb from '..'

const breadcrumbName = 'Page'
const iconLabel = 'page-icon'

describe('<Breadcrumb />', () => {
  it('Should render heading based on name prop', () => {
    const { getByRole } = render(<Breadcrumb name={breadcrumbName} />)

    const breadcrumbHeading = getByRole('heading')

    expect(breadcrumbHeading).toHaveTextContent(breadcrumbName)
  })

  it('Should render Icon if prop is passed', () => {
    const { getByLabelText } = render(
      <Breadcrumb
        name={breadcrumbName}
        icon={<svg aria-label={iconLabel}>Icon</svg>}
      />
    )

    const breadcrumbHeading = getByLabelText(iconLabel)

    expect(breadcrumbHeading).toBeInTheDocument()
  })
})
