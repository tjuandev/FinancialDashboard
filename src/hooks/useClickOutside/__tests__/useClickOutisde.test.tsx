import { Ref } from 'react'

import { render, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import useClickOutside from '..'

const MockComponent = ({ mockRef }: { mockRef: Ref<HTMLDivElement> }) => (
  <div ref={mockRef} />
)

describe('useClickOutside', () => {
  const user = userEvent.setup()

  it('Should call onClick when user click outside of component', async () => {
    const onClick = jest.fn()

    const { result } = renderHook(() =>
      useClickOutside<HTMLDivElement>({ onClick })
    )

    render(<MockComponent mockRef={result.current} />)

    await user.click(document.body)

    expect(onClick).toBeCalledTimes(1)
  })
})
