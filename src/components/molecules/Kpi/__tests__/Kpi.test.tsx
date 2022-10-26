/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react'

import Kpi from '..'

const kpiName = 'R$ 1290,20'
const kpiDescription = 'Seu saldo atual'

const iconTestName = 'icon-test'

jest.mock('components/atoms', () => ({
  Icon: () => <svg aria-label={iconTestName} />
}))

describe('<Kpi />', () => {
  it('Should render name and description if props passed', () => {
    render(<Kpi name={kpiName} description={kpiDescription} />)

    const nameElement = screen.getByText(kpiName)
    const descriptionElement = screen.getByText(kpiDescription)

    expect(nameElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })
})
