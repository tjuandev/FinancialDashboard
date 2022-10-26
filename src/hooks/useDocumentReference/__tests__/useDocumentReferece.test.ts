import { renderHook } from '@testing-library/react'
import useDocumentReference from '..'

describe('useDocumentReference()', () => {
  it('Should return javascript document object', () => {
    const { result } = renderHook(() => useDocumentReference())

    expect(result.current).toEqual(window.document)
  })
})
