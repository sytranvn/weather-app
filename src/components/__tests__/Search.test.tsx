import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import Search from '../Search'

describe('Search', () => {
  test('renders light rain night', () => {
    const history = createMemoryHistory()
    const { getByRole, getByPlaceholderText } = render(
      <Router history={history}>
        <Search />
      </Router>
    )
    const input = getByPlaceholderText('City')
    const btn = getByRole('button')
    expect(input).toBeInTheDocument()
    expect(btn).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'New York' } })
    fireEvent.click(btn)
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/locations')
    expect(history.location.search).toBe('?search=New York')
  })
})
