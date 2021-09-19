import { ConsolicatedWeather, Location } from '../api/location'
import { Time } from '../constants'
import Mask from './Mask'

type CardBodyProps = {
  consolidatedWeather: ConsolicatedWeather
  parent: Location
  location: Location
}

export default function WeatherCardBody({ consolidatedWeather, parent, location }: CardBodyProps) {
  return (
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
  )
}
