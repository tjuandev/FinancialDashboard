import { render, screen } from '@testing-library/react'
import theme from 'theme'

import Grid from '..'

const childrenElement = (
  <>
    <li>Child 1</li>
    <li>Child 2</li>
    <li>Child 3</li>
  </>
)

describe('<Grid />', () => {
  it('Should apply grid to an array of children elements', () => {
    render(
      <Grid rows={1} columns={3} gap={4}>
        {childrenElement}
      </Grid>
    )

    const childrenElements = screen.getAllByRole('listitem')

    childrenElements.forEach((element) =>
      expect(element.parentElement).toHaveStyle({
        display: 'grid',
        gap: theme.spacing[4],
        gridTemplateColumns: 3,
        gridTemplateRows: 1
      })
    )
  })

  it('Should apply a default gap if not passed', () => {
    render(
      <Grid rows={1} columns={3}>
        {childrenElement}
      </Grid>
    )

    const childrenElements = screen.getAllByRole('listitem')

    childrenElements.forEach((element) =>
      expect(element.parentElement).toHaveStyle({
        display: 'grid',
        gap: theme.spacing[2],
        gridTemplateColumns: 3,
        gridTemplateRows: 1
      })
    )
  })
})
