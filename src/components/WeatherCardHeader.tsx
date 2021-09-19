import { Image } from 'react-bootstrap'

interface WeatherCardHeaderProps {
  weatherCode: string
}

export default function WeatherCardHeader({ weatherCode }: WeatherCardHeaderProps) {
  return <Image src="/images/clear_night.png" className="w-100" alt="night" />
}
