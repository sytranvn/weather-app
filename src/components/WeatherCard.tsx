import { Card } from 'react-bootstrap'

import { ConsolicatedWeather, Location } from '../api/location'

import WeatherCardHeader from './WeatherCardHeader'
import WeatherCardBody from './WeatherCardBody'
import WeatherCardFooter from './WeatherCardFooter'

interface WeatherCardProps {
  consolidatedWeather: ConsolicatedWeather
  location: Location
  parent: Location
  sunRise: string
  sunSet: string
}

export default function WeatherCard({
  consolidatedWeather,
  location,
  parent,
  sunRise,
  sunSet,
}: WeatherCardProps) {
  return (
    <Card style={{ borderRadius: '10px' }} className="mb-3">
      <WeatherCardHeader
        weather={consolidatedWeather.weather_state_name}
        weatherCode={consolidatedWeather.weather_state_abbr}
        sunRise={sunRise}
        sunSet={sunSet}
      />
      <WeatherCardBody
        location={location}
        consolidatedWeather={consolidatedWeather}
        parent={parent}
      />
      <WeatherCardFooter
        maxTemp={consolidatedWeather.max_temp}
        minTemp={consolidatedWeather.min_temp}
      />
    </Card>
  )
}
