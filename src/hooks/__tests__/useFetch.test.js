import { useState as useStateMock } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../useFetch'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('useFetch', () => {
  const setState = jest.fn()
  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState])
  })
  it('should return the data from api', async () => {
    const getData = jest.fn()
    getData.mockResolvedValueOnce({ data: 1 , error: null })
    
    const { rerender, unmount } = renderHook(({ val }) => useFetch(getData, val), { initialProps: { val: 1}})
    expect(setState).toHaveBeenCalledWith({"error": null, "isLoading": true, "response": null})
    expect(getData.mock.calls[0][0]).toBe(1)
    rerender({ val: 2 })
    expect(getData.mock.calls[1][0]).toBe(2)
    expect(unmount).not.toThrow()
  })
})
