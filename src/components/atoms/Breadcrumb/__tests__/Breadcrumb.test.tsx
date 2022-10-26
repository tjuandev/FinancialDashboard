import { render, screen } from '@testing-library/react'

import Breadcrumb from '..'

const breadcrumbName = 'Page'
const iconLabel = 'page-icon'

describe('<Breadcrumb />', () => {
  it('Should render heading based on name prop', () => {
    render(<Breadcrumb name={breadcrumbName} />)

    const breadcrumbHeading = screen.getByRole('heading')

    expect(breadcrumbHeading).toHaveTextContent(breadcrumbName)
  })

  it('Should render Icon if prop is passed', () => {
    render(
      <Breadcrumb
        name={breadcrumbName}
        icon={<svg aria-label={iconLabel}>Icon</svg>}
      />
    )

    const breadcrumbHeading = screen.getByLabelText(iconLabel)

    expect(breadcrumbHeading).toBeInTheDocument()
  })
})
