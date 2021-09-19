import { ListGroup, Row, Col } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { Location, searchLocations } from '../api/location'
import ErrorView from '../components/ErrorView'
import LocationItem from '../components/LocationItem'
import { useMemo } from 'react'
import { useLocation } from 'react-router'

export default function Locations() {
  const { search: searchStr } = useLocation()
  const params = useMemo(() => {
    const searchParams = new URLSearchParams(searchStr)
    return Object.fromEntries(searchParams.entries())
  }, [searchStr])

  const { response, error, isLoading } = useFetch<Location[]>(searchLocations, params)
  const items = response as Location[]

  if (isLoading) {
    return (
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col>Searching for '{params.search}'...</Col>
      </Row>
    )
  }

  if (error) {
    return <ErrorView message={error.message} />
  }

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col>
          {items?.length === 0
            ? `No location found for '${params.search}'. Please try a diffrent name.`
            : `Result for '${params.search}':`}
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {items?.map((item) => (
              <LocationItem key={item.woeid} location={item} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
