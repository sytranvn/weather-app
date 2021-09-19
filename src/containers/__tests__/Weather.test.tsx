import { render } from '@testing-library/react'

import Weather from '../Weather'
import { useFetch } from '../../hooks/useFetch'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// const mockUseFetchFn = jest.fn()
jest.mock('../../hooks/useFetch')

describe('Search', () => {
  const setup = () => {
    const history = createMemoryHistory()
    return render(
      <Router history={history}>
        <Weather />
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
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  test('renders loading', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      response: null,
      error: new Error('bad error'),
      isLoading: false,
    })
    const { getByText } = setup()
    expect(getByText('bad error')).toBeInTheDocument()
  })

  test('renders loading', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      response: {
        consolidated_weather: [
          {
            id: 5062633091760128,
            weather_state_name: 'Heavy Rain',
            weather_state_abbr: 'hr',
            applicable_date: '2021-09-24',
            min_temp: 23.619999999999997,
            max_temp: 28.625,
            the_temp: 26.55,
          },
        ],
        time: '2021-09-19T10:56:25.963334+07:00',
        sun_rise: '2021-09-19T05:42:38.783919+07:00',
        sun_set: '2021-09-19T17:51:26.426747+07:00',
        parent: {
          title: 'Vietnam',
          location_type: 'Country',
          woeid: 23424984,
          latt_long: '15.974210,107.868042',
        },
        title: 'Ho Chi Minh City',
        location_type: 'City',
        woeid: 1252431,
        latt_long: '10.759180,106.662498',
        timezone: 'Asia/Ho_Chi_Minh',
      },
      error: null,
      isLoading: false,
    })
    const { getByText } = setup()
    expect(getByText('Heavy Rain')).toBeInTheDocument()
    expect(getByText('Ho Chi Minh City, Vietnam')).toBeInTheDocument()
  })
})
