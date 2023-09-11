import { Ref } from 'react'

import { render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import useClickOutside from '..'

const MockComponent = ({ mockRef }: { mockRef: Ref<HTMLButtonElement> }) => (
  <button ref={mockRef} />
)

const CALLED_ONCE = 1
const NEVER_CALLED = 0

describe('useClickOutside', () => {
  const user = userEvent.setup()

  it('Should call onClick when user click outside of component', async () => {
    const onClick = jest.fn()

    const { result } = renderHook(() =>
      useClickOutside<HTMLButtonElement>({ onClick })
    )

    render(<MockComponent mockRef={result.current} />)

    await user.click(document.body)

    expect(onClick).toHaveBeenCalledTimes(CALLED_ONCE)
  })

  it('Should not call onClick when user click in the component referenced', async () => {
    const onClick = jest.fn()

    const { result } = renderHook(() =>
      useClickOutside<HTMLButtonElement>({ onClick })
    )

    render(<MockComponent mockRef={result.current} />)

    const buttonElement = screen.getByRole('button')

    await user.click(buttonElement)

    expect(onClick).toHaveBeenCalledTimes(NEVER_CALLED)
  })
})
