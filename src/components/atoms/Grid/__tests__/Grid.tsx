import { render } from '@testing-library/react'
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
    const { getAllByRole } = render(
      <Grid rows={1} columns={3} gap={2}>
        {childrenElement}
      </Grid>
    )

    const childrenElements = getAllByRole('listitem')

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
