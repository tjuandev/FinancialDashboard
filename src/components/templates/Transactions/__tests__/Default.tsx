import { render } from '@testing-library/react'
import Default from '..'

describe('<Default />', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <Default
        headerProps={{
          avatarProps: {
            name: 'User Test'
          },
          breadcrumbProps: {
            name: 'Test'
          }
        }}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
