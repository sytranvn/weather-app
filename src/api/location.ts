import { DEFAULT_LOCATION, Weather } from '../constants'

export interface ConsolicatedWeather {
  id: number
  weather_state_name: string
  weather_state_abbr: Weather | string
  wind_direction_compass: string
  applicable_date: string
  min_temp: number
  max_temp: number
  the_temp: number
  wind_speed: number
  wind_direction: number
  air_pressure: number
  humidity: number
  visibility: number
  predictability: number
}

export interface Location {
  latt_long?: string
  location_type?: string
  title: string
  woeid: number
}

export interface LocationDetail extends Location {
  parent: Location
  time: string
  sun_rise: string
  sun_set: string
  consolidated_weather: ConsolicatedWeather[]
}

export async function searchLocations({
  search,
}: {
  search: string
}): Promise<{ data: Location[]; error: Error | null }> {
  let data = []
  let error = null
  if (search) {
    try {
      const response = await fetch(`/api/location/search/?query=${search}`)
      data = await response.json()
    } catch (err) {
      error = new Error('Failed to search locations')
    }
  }
  return { data, error }
}

export async function getLocation({
  woeid = DEFAULT_LOCATION,
}: {
  woeid: number | string
}): Promise<{ data: LocationDetail | null; error: Error | null }> {
  let data = null
  let error = null
  try {
    const response = await fetch(`/api/location/${woeid}/`)
    data = (await response.json()) as LocationDetail
  } catch (err) {
    error = new Error('Failed to get location')
  }
  return { data, error }
}
