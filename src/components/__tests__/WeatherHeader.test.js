import { render } from '@testing-library/react'
import WeatherCard from '../WeatherCard'
import { getTime, weatherImage } from '../WeatherCardHeader'
import { Time, Weather } from '../../constants'

afterAll(() => {
  Date.now.mockReset()
})
test('get time', () => {
  Date.now = jest.fn(() => new Date("2021-01-01T12:00:00+00:00"))
  expect(getTime('2021-01-01T07:00:00+00:00', '2021-01-01T17:00:00+00:00')).toBe(Time.DAY)
  expect(getTime('2021-01-01T07:00:00+10:00', '2021-01-01T17:00:00+10:00')).toBe(Time.NIGHT)
})

test('get weather image', () => {
  expect(weatherImage('unknown')).toBe('clear_night')
  
  expect(weatherImage(Weather.SNOW)).toBe('snow_night')
  expect(weatherImage(Weather.SNOW, Time.DAY)).toBe('snow')

  expect(weatherImage(Weather.CLEAR, Time.DAY)).toBe('clear')
  expect(weatherImage(Weather.LIGHT_CLOUD, Time.DAY)).toBe('clear')

  expect(weatherImage(Weather.HEAVY_CLOUD, Time.DAY)).toBe('cloud')

  expect(weatherImage(Weather.LIGHT_RAIN, Time.DAY)).toBe('rain')
  expect(weatherImage(Weather.HEAVY_RAIN, Time.DAY)).toBe('rain')
  expect(weatherImage(Weather.HAIL, Time.DAY)).toBe('rain')
  expect(weatherImage(Weather.SHOWERS, Time.DAY)).toBe('rain')
})
