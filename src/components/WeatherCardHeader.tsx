import { Image } from 'react-bootstrap'
import { Time, Weather } from '../constants'

interface WeatherCardHeaderProps {
  weatherCode: Weather | string
  weather: string
  sunRise: string
  sunSet: string
}

export function getTime(sunRise: string, sunSet: string): Time {
  const sr = new Date(sunRise)
  const ss = new Date(sunSet)
  const now = Date.now()
  if (sr.getTime() <= now && now < ss.getTime()) {
    return Time.DAY
  }
  return Time.NIGHT
}

export function weatherImage(weatherCode: Weather | string, time: Time) {
  const posfix = time === Time.DAY ? '' : '_night'
  switch (weatherCode) {
    case Weather.SNOW:
      return `snow${posfix}`
    case Weather.CLEAR:
    case Weather.LIGHT_CLOUD:
      return `clear${posfix}`
    case Weather.HEAVY_CLOUD:
      return `cloud${posfix}`
    case Weather.HEAVY_RAIN:
    case Weather.HAIL:
    case Weather.LIGHT_RAIN:
    case Weather.SHOWERS:
      return `rain${posfix}`
    default:
      return `clear${posfix}`
  }
}

export default function WeatherCardHeader({
  weatherCode,
  weather,
  sunRise,
  sunSet,
}: WeatherCardHeaderProps) {
  const time = getTime(sunRise, sunSet)
  const image = weatherImage(weatherCode, time)
  return (
    <Image
      src={`/images/${image}.jpg`}
      srcSet={`/images/${image}_small.jpg 640w`}
      className="w-100"
      alt={weather}
    />
  )
}
