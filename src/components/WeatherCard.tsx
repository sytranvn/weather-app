import { Card } from 'react-bootstrap'

import { ConsolicatedWeather, Location } from '../api/location'
import { Time } from '../constants'

import Mask from './Mask'
import WeatherCardBody from './WeatherCardBody'
import WeatherCardHeader from './WeatherCardHeader'

interface WeatherCardProps {
  consolidatedWeather: ConsolicatedWeather
  location: Location
  parent: Location
  sunRise?: string
  sunSet?: string
}

export default function WeatherCard({ consolidatedWeather, location, parent }: WeatherCardProps) {
  return (
    <Card style={{ borderRadius: '10px' }} className="mb-3">
      <div
        className="bg-image ripple"
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      >
        <WeatherCardHeader weatherCode={consolidatedWeather.weather_state_abbr} />
        <Mask weatherCode={consolidatedWeather.weather_state_abbr} time={Time.DAY}>
          <div className="text-center text-white pt-2">
            <p className="h4 mb-4">{consolidatedWeather.weather_state_name}</p>
            <p className="h6 mb-4">
              {location.title}, {parent.title}
            </p>
            <p className="h6 mb-4">
              {new Date(consolidatedWeather.applicable_date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="display-5">
              <strong>{consolidatedWeather.the_temp.toFixed(0)}°C</strong>{' '}
            </p>
          </div>
        </Mask>
      </div>
      <WeatherCardBody
        maxTemp={consolidatedWeather.max_temp}
        minTemp={consolidatedWeather.min_temp}
      />
    </Card>
  )
}
