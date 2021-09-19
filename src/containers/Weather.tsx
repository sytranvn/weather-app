import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getLocation, LocationDetail } from '../api/location'
import ErrorView from '../components/ErrorView'
import WeatherCard from '../components/WeatherCard'
import useFetch from '../hooks/useFetch'

interface RouteParams {
  woeid: string
}

export default function Weather() {
  const params = useParams<RouteParams>()
  const { response, error, isLoading } = useFetch<LocationDetail>(getLocation, params)

  if (isLoading) {
    return (
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col>Loading...</Col>
      </Row>
    )
  }

  if (!isLoading && error) {
    return <ErrorView message={error.message} />
  }

  const { parent, time, sun_rise, sun_set, consolidated_weather, ...location } =
    response as LocationDetail
  const consolidatedWeather = consolidated_weather.slice(0, 5)

  return (
    <Row className="d-flex justify-content-center align-items-center h-100">
      {consolidatedWeather.map((cw) => (
        <Col key={cw.id} xs="auto" md>
          <WeatherCard
            location={location}
            consolidatedWeather={cw}
            parent={parent}
            sunRise={sun_rise}
            sunSet={sun_set}
          />
        </Col>
      ))}
    </Row>
  )
}
