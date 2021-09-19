import { render } from '@testing-library/react'

import Locations from '../Locations'
import { useFetch } from '../../hooks/useFetch'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

jest.mock('../../hooks/useFetch')

describe('Search', () => {
  const setup = () => {
    const history = createMemoryHistory()
    return render(
      <Router history={history}>
        <Locations />
      </Router>
    )
  }

  test('renders loading', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      response: null,
      error: null,
      isLoading: true,
    })
    const { getByText } = setup()
    expect(getByText(`Searching for ''...`)).toBeInTheDocument()
  })

  test('renders error', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      response: null,
      error: new Error('bad error'),
      isLoading: false,
    })
    const { getByText } = setup()
    expect(getByText('bad error')).toBeInTheDocument()
  })

  test('renders no result', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      response: [],
      error: null,
      isLoading: false,
    })
    const { getByText } = setup()
    expect(getByText(/No location found .*/)).toBeInTheDocument()
  })

  test('renders result', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      response: [
        {
          title: 'New York',
          location_type: 'City',
          woeid: 2459115,
          latt_long: '40.71455,-74.007118',
        },
        {
          title: 'New Delhi',
          location_type: 'City',
          woeid: 28743736,
          latt_long: '28.643999,77.091003',
        },
      ],
      error: null,
      isLoading: false,
    })
    const { getByText, getAllByRole } = setup()
    expect(getByText('New York')).toBeInTheDocument()
    expect(getByText('New Delhi')).toBeInTheDocument()
    const links = getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', '/2459115')
    expect(links[1]).toHaveAttribute('href', '/28743736')
  })
})
